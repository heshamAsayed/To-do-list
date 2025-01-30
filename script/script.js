


// let header = document.querySelector('.container .header h1');
// console.log(header)
// //      here i want make the h1 move right and left with else
// const emptyList = TasksList.innerHTML;
// function empty() {
//     if (!(TasksList.innerHTML === emptyList)) { TasksList.style.display = "block"; }
//     else {
//         let myPromise = new Promise((res, rej) => {
//             // res(console.log(header.style.translate)),
//             res(0),
//             rej('rejected ..')
//         })

//         myPromise.then(
//             (resValue => {header.style.translate = resValue + 60 +'px'}),
//             (rejValue => {alert(rejValue)})
//         )

//         myPromise.then(
//             (resValue => {header.style.translate += resValue -60 + 'px'}),
//             (rejValue => {alert(rejValue)})
//         )


//     }
// }



let TasksList = document.getElementById('task');
let input = document.getElementById('input');

const emptyList = TasksList.innerHTML;


function isEmpty() {    
    if (!(input.value == ''|| input.value.trim() == '')) {
        // let cardTask = createElement('')
         TasksList.style.display = "block";
         addTaskToList();
        }
        else{
        let alertDiv = createDivAlert();
        setTimeout(() => {
            alertDiv.style.display = 'none'
            alertDiv.style.transition = '0.3s'
        }, 3000);
    }
    
}





function createDivAlert(){
    
    let alertDiv = document.createElement('div');
    alertDiv.classList.add('.alert-div')
    alertDiv.style.position = 'absolute';
    alertDiv.style.top = '6%';
    alertDiv.style.left = '16%';
    alertDiv.style.transform = '(-50%,-50%)';
    alertDiv.style.backgroundColor = 'black';
    alertDiv.style.opacity = '0.8'
    alertDiv.style.width = '70vw';
    alertDiv.style.height = '60vh';
    alertDiv.style.border = '5px solid white'
    


    let headerDiv = document.createElement('h1')
    headerDiv.innerHTML = "Error ";
    headerDiv.style.color = 'white'
    let paragrphDiv = document.createElement('p');
    paragrphDiv.innerHTML = "The Input List Task Is Empty";
    paragrphDiv.style.color =' green'
    paragrphDiv.style.fontSize = '2em';
    

    alertDiv.append(headerDiv );
    alertDiv.append(paragrphDiv);
    document.querySelector('.container').append(alertDiv)

    return alertDiv;
}



function addTaskToList(){
    let contentTask = input.value;
    let tasks = createCardTask(contentTask);
    TasksList.append(tasks);
    input.value = '';

}





function createCardTask(contentOfTask){
    let containerOfCardTasks = document.createElement('div');

    let cardTask = document.createElement('div');
    cardTask.classList.add('card-task');

    let containerContentOfTask =document.createElement('h3')
    containerContentOfTask.innerHTML=contentOfTask;

    let containerBtns = document.createElement('div');
    containerBtns.classList.add('btn');
    let btnRemove = document.createElement('button');
    btnRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnRemove.addEventListener("click",remove);
    let btnDone = document.createElement('button');
    btnDone.innerHTML = '<i class="fa-solid fa-check"></i>';
    btnDone.addEventListener('click',done);


    containerBtns.append(btnDone);
    containerBtns.append(btnRemove);
    cardTask.append(containerContentOfTask);
    containerOfCardTasks.append(cardTask);
    containerOfCardTasks.append(containerBtns);

    return containerOfCardTasks;

}

function remove(){
    this.parentNode.parentNode.remove();
    if(TasksList.innerHTML === emptyList){
        TasksList.style.display = 'none';
    }
}


function done(){
    let parent = this.parentNode;  // coz i remove done button so this keyword is not usefull after that 
    // this.parentNode.previousSibling.style.backgroundColor = 'green'
    this.parentNode.parentNode.style.backgroundColor = 'green';
    this.parentNode.style.padding = '10px 25px 10px 25px';
    this.parentNode.style.margin = '5px';
    let goodBtn = document.createElement('button');
    goodBtn.innerHTML = '<i class="fa-solid fa-thumbs-up"></i><p>Good</p>';
    parent.removeChild(parent.firstChild);
    parent.removeChild(parent.firstChild);
    parent.append(goodBtn);
    parent.addEventListener(
        'mouseover',() =>{
            parent.firstChild.style.color = 'white';
            parent.style.cursor = 'pointer';
            
        }
    )
    parent.addEventListener('mouseout',
        function() {
            parent.firstChild.style.color = 'black';
            parent.style.cursor = 'none';

        }
    )


    parent.firstChild.addEventListener(
        'click',function() {
            parent.parentNode.remove();
            if(TasksList.innerHTML === emptyList){
                TasksList.style.display = 'none';
            }
        }
    )
  

}






