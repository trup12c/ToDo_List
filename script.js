let button = document.getElementById('button');
let input = document.getElementById('input');
let task = document.getElementById('task');

button.addEventListener('click', function(event){

    if(input.value === ''){
        alert('Please Enter Task');
    }
    else{
        task = input.value;
    }
    console.log('hello');
})
















document.addEventListener('keydown', function(event){
    console.log(event);
})