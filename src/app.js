


const rootDiv=document.getElementById("root");
const contentDiv=document.getElementById("content");



const TaskList=(event)=>{
  event.preventDefault();
  let taskDesc=document.taskInput.task.value; 
  // check if string has characters in it
  if(!taskDesc.trim().length){
    alert("Enter Task");
    return
  }
  let newTask=new Task(taskDesc);
    setlocalstorage(newTask);
    document.taskInput.task.value="";
    addTaskToDom()

}



const addTaskToDom=()=>{
    const tasklist=document.createElement("div");
    tasklist.classList.add("tasklist")
    // check if localstorage has data in it otherwise return
    let arr=getlocalstorage();
    if(!arr){
      return;
    }
    arr.forEach(element=>{
        let taskDiv=document.createElement("div");
        taskDiv.id=element.taskId;
        taskDiv.classList.add("item")

        // task completed

        let taskDesc1=document.createElement("i");
        taskDesc1.classList.add("fa","fa-check-circle");
        taskDesc1.setAttribute("onclick","completed(event)")


        let remove=document.createElement("i");
        remove.classList.add("fa","fa-trash");
        remove.setAttribute("onclick","delete1(event)")
        

        let taskDesc=document.createElement("input");
        taskDesc.type="text";
        taskDesc.classList.add("inputitem")
        taskDesc.disabled=true;
        taskDesc.setAttribute('value',element.description);
        
        // check if task is completed and according to it apply stying to  its field 

        if(element.isCompleted){
          taskDesc.style.textDecoration="line-through";
          taskDesc1.value="1";
        }else{
          taskDesc.style.textDecoration="none";
          taskDesc1.classList.remove("fa-check-circle")
          taskDesc1.classList.add("fa-circle")
          taskDesc1.value="0";
        }

        // edit

        const update=document.createElement("i");
        update.classList.add("fa","fa-edit")
        update.setAttribute('onclick',"editTask(event)")


        taskDiv.appendChild(taskDesc1);
        taskDiv.appendChild(taskDesc);
        taskDiv.appendChild(update);
        taskDiv.appendChild(remove);
        let taskLog=document.createElement("p");
        taskLog.textContent=element.createdAt;
        taskDiv.appendChild(taskLog)
        tasklist.appendChild(taskDiv)  
        console.log(tasklist);
        
    })
    content.innerHTML=tasklist.innerHTML
 
}   


const editTask=(event)=>{
    console.log("inside edittask");
    let id=event.target.parentElement.id;
    console.log(event.target.parentElement);
    event.target.parentElement.childNodes[1].removeAttribute("disabled")
    console.log(event.target.parentElement);
}



