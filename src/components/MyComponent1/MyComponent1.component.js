import { useEffect, useState } from "react";
function MyComponent1(props) {
    const [task, setTask]=useState('');
    
    const addTask = ()=>{
        let taskList = [...props.taskList];
        taskList.push(task);
        props.setTaskList(taskList);
    } 
    useEffect(()=>{
        
    },[task]);
    return (
        <div data-testid="MyComponent1-test">
        This is MyComponent1, here you can create task
        
            <input type="text" value={task} onChange={e=>setTask(e.target.value)} placeholder="Enter task name"></input>
            <button onClick={addTask}>Click me to add task</button>
        
        </div>
    );
}
export default MyComponent1;