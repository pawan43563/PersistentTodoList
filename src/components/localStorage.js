const updatelocalstorageitem=(updatedarr)=>{
    localStorage.clear();
    localStorage.setItem('tasks',JSON.stringify(updatedarr))
}

const setlocalstorage=(newTask)=>{
    if(localStorage.getItem('tasks')===null){
        let tasklist=[]
        tasklist.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasklist));
      } else {
        let arr=JSON.parse(localStorage.getItem("tasks"));
        arr.push(newTask)
        localStorage.setItem('tasks',JSON.stringify(arr))
      }
}

const getlocalstorage=()=>{
    return JSON.parse(localStorage.getItem("tasks"));
}



