import { render, addBorderRed } from "./module.js";

const createFormAcc = document.querySelector('#create-form-acc'),
	createLogin = document.querySelector('#create-login'),
	createPassword = document.querySelector('#create-password'),
	createConfirm = document.querySelector('#create-confirm'),
	createCheck = document.querySelector('#create-check'),
	createLinkAcc = document.querySelector('#create-link-acc');


createLinkAcc.addEventListener('click', () => {
	render('/app/authorization.html');
});

createCheck.addEventListener('click', () => {
	if (createPassword.getAttribute('type') === 'password' && createConfirm.getAttribute('type') === 'password') {
		createPassword.setAttribute('type', 'text');
		createConfirm.setAttribute('type', 'text');
	} else {
		createPassword.setAttribute('type', 'password');
		createConfirm.setAttribute('type', 'password');

	}
});

function getLocalStorage() {
	let arr = JSON.parse(localStorage.getItem('arr')) || [];

	const user = {
		login: createLogin.value,
		password: createPassword.value,
		passwordConfirm: createConfirm.value
	}
	arr.push(user);

	localStorage.setItem('arr', JSON.stringify(arr));
};


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
		render('/app/index.html');
		return true;
	}
}

createFormAcc.addEventListener('submit', checkValidation);

