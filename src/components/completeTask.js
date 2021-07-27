function completed(event){
  let id=event.target.parentElement.id;
  let arr=getlocalstorage();
  if(event.target.value!=="0"){

    arr.forEach((element)=>{
      if(element.taskId==id){
        
        if(event.target.classList.contains("fa-circle")){
          element.isCompleted=true;
          event.target.value="1";
          event.target.classList.add("fa-check-circle")
          event.target.classList.remove("fa-circle")
          event.target.parentElement.childNodes[1].style.textDecoration="line-through";
        }else{
          element.isCompleted=false;
          event.target.value="0";
          event.target.classList.remove("fa-check-circle")
         event.target.classList.add("fa-circle")
         event.target.parentElement.childNodes[1].style.textDecoration="none";
        }
        
       
      }
    })
  }else{

    arr.forEach((element)=>{
      if(element.taskId==id){
        element.isCompleted=true;
        event.target.value="1";
        event.target.classList.add("fa-check-circle")
        event.target.classList.remove("fa-circle")
        event.target.parentElement.childNodes[1].style.textDecoration="line-through";
      }
    })
  }

  updatelocalstorageitem(arr);
}
