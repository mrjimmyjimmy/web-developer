var notQuit = true;
var todoList = [];
var selection = prompt('please enter you selection');
while(notQuit){


	if (selection === 'new') {
		var newTodo = prompt('please enter what you want to do');
		todoList.push(newTodo);
	} else if (selection === 'list') {
		console.log(todoList);
	} else if (selection === 'quit') {
		notQuit = false;
	}
}
