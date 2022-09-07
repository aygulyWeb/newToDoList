import { render, addBorderRed } from "./module.js";

const regForm = document.querySelector('#reg-form-auth'),
	regLogin = document.querySelector('#reg-login'),
	regPassword = document.querySelector('#reg-password'),
	regSubmit = document.querySelector('#reg-submit'),
	regLinkAcc = document.querySelector('#reg-link-acc');

regLinkAcc.addEventListener('click', () => {
	render('/app/create.html');
});

///////////////////////// VALIDATION /////////////////////////////


function checkUsers(e) {

	e.preventDefault();

	let allUsers = JSON.parse(localStorage.getItem('users'));

	const regLoginValue = regLogin.value.trim();
	const regPasswordValue = regPassword.value.trim();

	const compareUsers = allUsers.filter(user =>
		user.login == regLogin.value && user.password == regPassword.value);

	if (regLoginValue === '' || regLoginValue === null || regPasswordValue.length <= 5) {
		addBorderRed(regLogin);
		addBorderRed(regPassword);
		return false;
	}
	if (compareUsers.length > 0) {
		alert('Успешно');
		render('/app/index.html');
		return true;
	}
	else {
		alert('Не существует такой логин');
	}
}

regForm.addEventListener('submit', checkUsers);





