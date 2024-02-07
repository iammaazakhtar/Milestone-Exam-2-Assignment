import React from "react"

const Todo=({todo,updateStatus,removeTodo,index})=>{
    const{task,status}=todo

    return(
        <div className="todo">
            <h3>{`${index+1}.${task}`}</h3>
            <p>Status:{status}</p>
            <button className="btn" onClick={()=>{updateStatus(index)}} style={{marginBottom:'10px'}}>Update Status</button>
            <button className='btn' onClick={() => removeTodo(index)}>Remove</button>
        </div>
    )
}

export default Todo