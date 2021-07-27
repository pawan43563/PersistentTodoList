const editTask=(event)=>{
    let id=event.target.parentElement.id;
    if(event.target.classList.contains("fa-check")){
      if(confirm("Click Yes to update your task")){
        let y1=document.getElementById(id).childNodes[1]
        let arr=getlocalstorage();
        arr.forEach((element)=>{
          if(element.taskId==id){
            element.description=y1.value;
            element.updatedAt=new Date().toLocaleString();
            element.updated=true;
            event.target.parentElement.childNodes[4].innerText=element.updatedAt;
          }
        })
        event.target.classList.remove("fa-check");
        event.target.classList.add("fa-edit");
        event.target.parentElement.childNodes[1].disabled="true";
        updatelocalstorageitem(arr);
      }else{
        event.target.classList.add("fa-edit")
        event.target.classList.remove("fa-check")
        event.target.parentElement.childNodes[1].disabled="true";
      }
      
    }else{
      event.target.parentElement.childNodes[1].removeAttribute("disabled");
      event.target.classList.remove("fa-edit")
      event.target.classList.add("fa-check")
     
    }
      
}
  
  