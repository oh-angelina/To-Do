const clear = document.getElementById("clear"); 
const list = document.getElementById("list");
const input = document.getElementById("input"); 

// const check = "checked class name"
// const uncheck = "uncheck class name"

list.addEventListener("click", function(event){
	let element = event.target; 
	const elementJob = event.target.attribute.job.value;
		
		if(elementJob == "complete") {
			completeToDo(element);
		} else if (elementJob == "delete") {
			removeToDo(element); 
		}
}); 


function completeToDo (element) {
	element.classList.toggle(checked); 

	list[element.id].checked = list[element.id].checked ? true : false; 
}

function removeToDo (element) {
	element.parentNode.parentNode.removeChild(element.parentNode); 
	list[element.id].trash = true; 
}


function addToDo(toDo, id, checked, trash) {

// Need to find a way to see if the list item that is selected is checked or not
// then can remove/rename the done code
	
	if(trash) {return; }
	const Done = element.checked ? true : false;

	const text = `<li class ="list-item">
					<label class = "container">
					<p class = "task">${toDo}</p>
					<input type="checkbox" name="complete" job="complete">
					<span class="checkmark"></span>
					</label>

					<button class="remove" job="delete">x</button>	
				</li>`; 

	const position = "beforeend";

	list.insertAdjacentHTML(position, text); 
}

document.addEventListener("keyup",function(event) {
	if(event.keycode == 13) {
		const toDo = input.value;
		if(toDo) {
			addToDo(toDo, id, false, false);
			toDoList.push (
				{
					name: toDo,
					id: id,
					checked: false,
					trash: false, 
				}
			)
		}
		input.value=""; 
		id++;
	}
})

var toDoList = [];
let id = 0;

toDoList = [
	{
		name: "Drink Coffee",
		id: 0,
		checked : false, 
		trash : false
	},
	{
		name: "Work out",
		id: 1, 
		checked : false,
		trash : false, 
	}
]; 