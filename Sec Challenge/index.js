let addTask = document.getElementById("add");
let inputVal = document.getElementById("inp");
 

function add(){
    
    let newEle = document.createElement("p");
    newEle.innerHTML=inputVal.value;
    addTask.appendChild(newEle);
    inputVal.value=""
   
     
}