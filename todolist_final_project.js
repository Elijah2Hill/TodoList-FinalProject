const list = document.querySelector("list");
let todoListArr = [];

todoListForm.addEventListener("submit", function(event) {
  event.preventDefault();
});

function addTodoList() {
	let todoItem = document.getElementById("todo").value;
	document.getElementById("todo").value = "";
	let obj = {};
	obj['text'] = todoItem;
	obj['complete'] = false;
	todoListArr.push(obj);
	createListHTML();
}

function completeTodoList(textToLineThrough) {
	for( var i = 0; i < todoListArr.length; i++){ 
        if (todoListArr[i].text == textToLineThrough) {     
			todoListArr[i].complete = true; 
        }
    }
	createListHTML();
}

function uncompleteTodoList(textToShow) {
	for( var i = 0; i < todoListArr.length; i++){ 
        if (todoListArr[i].text == textToShow) {     
			todoListArr[i].complete = false; 
        }
    }
	createListHTML();
}

function deleteTodoList(textToDelete) {
	for( var i = 0; i < todoListArr.length; i++){ 
        if (todoListArr[i].text == textToDelete) {     
			todoListArr.splice(i, 1); 
        }
    }
	createListHTML();
}

function createListHTML() {
	const template = todoListArr.map(todo => todo.complete ? `
		<p class="line-through"><input type="checkbox" onclick="uncompleteTodoList('${todo.text}')" checked>	${todo.text} <input type="button" value="X" onclick="deleteTodoList('${todo.text}')"></p>` : `
		<p><input type="checkbox" onclick="completeTodoList('${todo.text}')"> ${todo.text} <input type="button" value="X" onclick="deleteTodoList('${todo.text}')"></p>`);
	list.innerHTML = template.join('');
}	