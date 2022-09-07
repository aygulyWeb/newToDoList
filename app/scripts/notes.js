const tableForm = document.querySelector('#table-form'),
	dateValue = document.querySelector('#dateValue'),
	addNote = document.querySelector('#addNote'),
	checkInput = document.querySelector('.form-check-input'),
	addBtn = document.querySelector('#addBtn'),
	tableRow = document.querySelector('#tableRow');

document.addEventListener('DOMContentLoaded', showInfoTasks)

function showInfoTasks() {
	let now = new Date();
	dateValue.value = '';
	addNote.value = '';

	let tasks;
	!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

	tasks.forEach(element => {
		return tableRow.innerHTML += `
						<div class="table-column">
							<div class="table-text">
								<span class="table-round"></span>
								<span class="input-note">${element.addNote}</span>
							</div>
							<div class="column">
								${element.dateValue}
								${now.toLocaleTimeString()}
								<button class="table-delete">Delete</button>
								<button class="table-edit">Edit</button>
							</div>						
						</div>`;
	})

};
function addNotesToLocalStorage() {
	let tasks = [];

	const notesValues = {
		dateValue: dateValue.value,
		addNote: addNote.value,
		checkInput: true
	}

	if (localStorage.getItem('tasks') == null) {
		tasks.push(notesValues);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.push(notesValues);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

};

tableForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addNotesToLocalStorage();

});

