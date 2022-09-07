import { render, addBorderRed } from "./module.js";

const createFormAcc = document.querySelector('#create-form-acc'),
	createLogin = document.querySelector('#create-login'),
	createPassword = document.querySelector('#create-password'),
	createConfirm = document.querySelector('#create-confirm'),
	createCheck = document.querySelector('#create-check'),
	createLinkAcc = document.querySelector('#create-link-acc');


//////////////// RENDER PAGE /////////////////////

createLinkAcc.addEventListener('click', () => {
	render('/app/authorization.html');
});

//////////////// SHOW PASSWORD /////////////////////////

createCheck.addEventListener('click', () => {
	if (createPassword.getAttribute('type') === 'password' && createConfirm.getAttribute('type') === 'password') {
		createPassword.setAttribute('type', 'text');
		createConfirm.setAttribute('type', 'text');
	} else {
		createPassword.setAttribute('type', 'password');
		createConfirm.setAttribute('type', 'password');

	}
});

////////////// LOCAL STORAGE FOR REGISTRATION ////////////////////

function getLocalStorage() {
	let arr = [];

	const userDefault = {
		user: "admin",
		password1: "root123",
		password2: "root123"
	}

	localStorage.setItem('userDefault', JSON.stringify(userDefault));


	const user = {
		login: createLogin.value,
		password: createPassword.value,
		passwordConfirm: createConfirm.value
	}

	//Сначала тексериу керек базаны если бар болса алерт пенен корсетиу керек. 
	// Иначе базага жазыу керек

	if (localStorage.getItem('users') == null) {
		arr.push(user);
		localStorage.setItem('users', JSON.stringify(arr));
	} else {
		arr = JSON.parse(localStorage.getItem('users'));
		arr.push(user);
		localStorage.setItem('users', JSON.stringify(arr));

		alert('Успешно');
	}

	//Если жок болса localstorage импорт кылып обьектке откерип
	// потом сол обьектке косасыз юзерди
	// дальше изменённый обьектти строкага айлантырып localstorage га перезапись кыласыз

};

///////////////// VALIDATION INPUTS /////////////////////////

function checkValidation(e) {
	e.preventDefault();

	const createLoginValue = createLogin.value.trim();
	const createPasswordValue = createPassword.value.trim();
	const createConfirmValue = createConfirm.value.trim();

	if (createLoginValue === '' && createPasswordValue === null || createConfirmValue === null
		&& createPasswordValue.length <= 5 || createConfirmValue.length <= 5) {
		addBorderRed(createLogin);
		addBorderRed(createPassword);
		addBorderRed(createConfirm);
		return false;
	}
	if (createPasswordValue !== createConfirmValue) {
		addBorderRed(createPassword);
		addBorderRed(createConfirm);
		alert('Пароли не совпадают');
		return false;
	}
	else {
		getLocalStorage();
		render('/app/authorization.html');
		return true;
	}
}

createFormAcc.addEventListener('submit', checkValidation);




