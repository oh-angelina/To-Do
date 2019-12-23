// Select document elements
const clear = document.getElementById("clear"); 
const list = document.getElementById("list");
const input = document.getElementById("input"); 

// Create an array for the list items
var toDoList = [{},{}];
//initialize id 
let id = 0;


function addToDo(toDo, id, checked, trash) {
	
	if(trash) {return; }

	const text = `<li class ="list-item">
					<label class = "container">
					<p class = "task">${toDo}</p>
					<input type="checkbox" name="complete" job="complete" id="${id}">
					<span class="checkmark"></span>
					</label>

					<button class="remove" job="delete" id="${id}">x</button>	
				</li>`; 

	const position = "beforeend";

	list.insertAdjacentHTML(position, text); 
}

document.addEventListener("keyup", function(event) {
	if(event.keyCode == 13) {
		const toDo = input.value;
		//if not empty, add to do
		if (toDo) {
			addToDo(toDo); 
		}
		//Empties input after submit 
		input.value = "";
	}
}); 

addToDo("sleep", 1, false, false,)

// On click, update or remove function will run on list item
list.addEventListener("click", function(event){
	let element = event.target; 
	const elementJob = event.target.attributes.job.value;
		
		if(elementJob == "complete") {
			completeToDo(element);
		} else if (elementJob == "delete") {
			removeToDo(element); 
		}
}); 


function completeToDo (element) {
	element.classList.toggle("checked"); 
	//list[element.id].checked = list[element.id].checked ? true : false;

}

function removeToDo (element) {
	element.parentNode.parentNode.removeChild(element.parentNode); 
	//list[element.id].trash = true; 
}

clear.addEventListener("click", function() {
	localSorage.cler(); 
	location.reload();
});
