
const task={
    taskId:"",
    description:"",
    isCompleted:"",
    createdAt:"",
    isUpdated:false,
    updatedAt:"",
};

// constructor
function Task(description){
    // initialize the task
   
    this.taskId=uuidv4();
    this.description=description;
    this.isCompleted=false;
    this.createdAt=new Date().toISOString().slice(0, 10);
    this.updated=false;
    this.updatedAt="";
}

