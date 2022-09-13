let button = document.getElementById('button');
let input = document.getElementById('input');
let tasks = document.getElementById('tasks');
// let container = document.getElementsByClassName('container');

button.addEventListener('click', function(event){

    if(input.value === ''){
        alert('Please Enter Task');
    }
    else{
        
        //for creating new div
        let todo_div = document.createElement('div');
        todo_div.classList.add('todo');
        
        // for creating list
        let new_todo = document.createElement('li');
        new_todo.textContent = input.value;
        new_todo.classList.add('todo_item');
        todo_div.appendChild(new_todo);

        //check complete button
        let completed_Btn = document.createElement('btn');
        completed_Btn.textContent = 'Completed'; 
        completed_Btn.classList.add('completed-Btn'); 
        todo_div.appendChild(completed_Btn);

        //check delete button
        let delete_Btn = document.createElement('btn');
        delete_Btn.textContent = 'Delete';
        delete_Btn.classList.add('delete-Btn'); 
        todo_div.appendChild(delete_Btn);

        //append to list
        tasks.appendChild(todo_div);

    }
    
})

document.addEventListener('click', function(event){
    let task = event.target;
    if(task.classList[0] === 'delete-Btn'){
       task.parentNode.remove();
       //task.remove();
    }
})

document.addEventListener('click', function(event){
    let task = event.target;
    if(task.classList[0] === 'completed-Btn'){
        task.parentNode.classList.toggle('completed');
    }
})

document.addEventListener('keydown', function(event){
    //console.log(event);
})