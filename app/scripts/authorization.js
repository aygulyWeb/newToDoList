import { render, addBorderRed } from "./module.js";

const regForm = document.querySelector('#reg-form-auth'),
	regLogin = document.querySelector('#reg-login'),
	regPassword = document.querySelector('#reg-password'),
	regSubmit = document.querySelector('#reg-submit'),
	regLinkAcc = document.querySelector('#reg-link-acc');

regLinkAcc.addEventListener('click', () => {
	render('/app/create.html');
});

function checkUsers(e) {
	e.preventDefault();

	const regLoginValue = regLogin.value.trim();
	const regPasswordValue = regPassword.value.trim();

	if (regLoginValue === '' || regLoginValue === null || regPasswordValue.length <= 5) {
		addBorderRed(regLogin);
		addBorderRed(regPassword);
		return false;
	}
	else {
		render('/app/index.html');
		return true;
	}
}

regForm.addEventListener('submit', checkUsers);


