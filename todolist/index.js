const form = document.getElementById('form');
const input = document.getElementById('task-input');
const tasklist = document.getElementById('task-list');


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const taskValue = input.value;
    if(taskValue.trim() === ''){
        return;
    }
    console.log(taskValue);
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskValue} <button>Delete</button>`
    tasklist.appendChild(taskItem);

    
    input.value = '';

})

tasklist.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})