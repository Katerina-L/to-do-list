const addMessage = document.querySelector('.message');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo')
const todoList = [];
addButton.addEventListener('click', function(){
    const newTodo = addMessage.value;
    todoList.push(newTodo);
    //console.log(todoList);
    displayMessages();
});
function displayMessages(){
    let displayMessages = "";
    todoList.forEach(function(item,i){
        //console.log(item);
        displayMessages += `
        <li>
        <input type='checkbox' id='iteam_${i}'>
        <label for='iteam_${i}'>${item}</label>
        </li>
        `;

        todo.innerHTML = displayMessages;
    });
}
