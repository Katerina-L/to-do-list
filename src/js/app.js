const newtask= document.querySelector('.message');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo')
const todoList = [];
function addItem (){addButton.addEventListener('click', function(){
    const newTodo = newtask.value;
    console.log(newtask.value);
    if (newtask.value !== '') todoList.push(newTodo);

    //console.log(todoList);
    renderList();
    newtask.value = '';
});}
addItem();
function renderList(listData, listContainer){
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
