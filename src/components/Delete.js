function delete1(e){
    if(confirm('Cick Yes to confirm')){
      let id=e.target.parentElement.id;
      let arr=getlocalstorage();
      let start;
      arr.forEach((element,index)=>{
        if(element.taskId==id){
          start=index;
        }
      })
      arr.splice(start,1)
      updatelocalstorageitem(arr);
      addTaskToDom();
    }
  }

function deleteAll(){
  const tasklist=document.getElementById("content");
  tasklist.innerHTML=""
  localStorage.clear();
}
  