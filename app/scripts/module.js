const moduleFunctions = {
	getRender: function render(link) {
		window.location.href = link;
		return link;
	},

	getAddBorder: function addBorderRed(input) {
		input.classList.add('border-red');
		return input;
	},

	getRemoveBorder: function removeBorderRed(input) {
		input.classList.remove('border-red');
		return input;
	}
}


export const render = moduleFunctions.getRender;
export const addBorderRed = moduleFunctions.getAddBorder;
export const removeBorderRed = moduleFunctions.getRemoveBorder;