


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
        remove.classList.add("fa","fa-trash","fa-2x");
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
        // updated
        let taskLog=document.createElement("p");
        if(element.updated){
          let small=document.createElement("p");  
          small.id="time"
          small.classList.add("smalleredit");
          small.textContent="(Edited)";
          // taskDiv.appendChild(small)
          taskLog.textContent=element.updatedAt;
          taskDiv.appendChild(taskLog);
          taskDiv.appendChild(remove);
          taskDiv.appendChild(small);
          tasklist.appendChild(taskDiv) 
        }else{
          taskLog.textContent=element.createdAt;
          taskDiv.appendChild(taskLog);
        taskDiv.appendChild(remove);
        // taskDiv.appendChild(small);
        tasklist.appendChild(taskDiv) 
        }



        // taskDiv.appendChild(update);
        
         
        
        
    })
    content.innerHTML=tasklist.innerHTML
}   




const date=document.getElementById("date");

date.innerText=getday();

function getday(){

    const today = new Date();

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };

  return today.toLocaleDateString("en-US", options);
  }
  
