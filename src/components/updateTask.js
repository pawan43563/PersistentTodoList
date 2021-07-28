const editTask=(event)=>{
    let id=event.target.parentElement.id;
    if(event.target.classList.contains("fa-check")){
        let y1=document.getElementById(id).childNodes[1]
        let arr=getlocalstorage();
        arr.forEach((element)=>{
          if(element.taskId==id){
            element.description=y1.value;
            element.updatedAt=new Date().toLocaleString();
            if(element.updated===false){
              let small=document.createElement("p");  
              small.id="time"
              small.classList.add("smalleredit");
              small.textContent="(Edited)";
              event.target.parentElement.appendChild(small);
              event.target.parentElement.childNodes[3].innerText=element.updatedAt;
            }
            else{
              if(event.target.parentElement.childElementCount==6){
                event.target.parentElement.childNodes[3].innerText=element.updatedAt;
              }else{
                event.target.parentElement.childNodes[4].innerText=element.updatedAt;
              }
             
            }
            element.updated=true;
            
          }
        })
        event.target.classList.remove("fa-check");
        event.target.classList.add("fa-edit");
        event.target.parentElement.childNodes[1].disabled="true";
        updatelocalstorageitem(arr);
      }
      else{
      event.target.parentElement.childNodes[1].removeAttribute("disabled");
      event.target.classList.remove("fa-edit")
      event.target.classList.add("fa-check")
     
    }
      
}
  
  