import React, { useState } from 'react'

const Task_List = () => {
    const [task, setTask] = useState([]);
    const [name, setName] = useState("");
    const [isEdit, setIsEdit] = useState(false)
    const [num, setNum] = useState(0);
    const [prev, setPrev] = useState("");

    console.log(task)

    function addTask() {
        setTask([...task, name])
        setName("");
    }

    function editTask(index) {
        console.log("Edit function", index);
        setNum(index);
        setIsEdit(true);
    }

    console.log(num + " ....")

    function deleteTask(index) {
        task.splice(index, 1);
        setTask([...task]);
    }

    return (


        <div>
            <h1>Task Manage</h1>
            <input type="text" placeholder='Add task' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <br />
            <br />
            {
                isEdit ?
                    task.map((item, index) => (
                        <li>
                            <input type='checkbox' />

                            {
                                index == num ? 
                                    <>
                                        <input type='text' value={item} />
                                        <button style={{ margin: "10px 15px" }}>Save</button>

                                        <button onClick={() => deleteTask(prev)}>Delete</button>
                                    </>

                                
                                    :
                                    (
                                        <>
                                            {item}
                                            <button style={{ margin: "10px 15px" }}>Edit</button>

                                            <button onClick={() => deleteTask(prev)}>Delete</button>
                                        </>

                                    )
                            }

                        </li>
                        )
                        
                    )
                    :

                    task.map((item, index) => (
                        <li>
                            <input type='checkbox' />
                            {item}
                            <button style={{ margin: "10px 15px" }} onClick={() => editTask(index)}>Edit</button>

                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>))
            }
        </div>
    )
}

export default Task_List