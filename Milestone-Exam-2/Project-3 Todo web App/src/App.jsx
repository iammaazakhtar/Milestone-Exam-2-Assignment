import {useState } from "react"
import AddTodo from "./components/AddTodo.jsx"
import Todo from "./components/Todo.jsx"

function App(){
  const[todos,setTodos]=useState([])
  let allTodos=[...todos]

  const updateStatus=(index)=>{
    let updateTodo=todos[index]
    updateTodo.status=(updateTodo.status==='Pending')?'Completed':'Pending'
    allTodos[index]=updateTodo
    setTodos(allTodos)
  }

  const removeTodo=(index)=>{
    let remainTodos
    (allTodos.length>1)?remainTodos=allTodos.filter((todo,i)=>i!==index):remainTodos=[]
    setTodos(remainTodos)
  }

  return(
    <>
      <AddTodo setTodos={setTodos} todos={todos} />
      <div className="todo-list">
        {
          todos.map((todo,index)=>(
            <Todo key={index} todo={todo} index={index} updateStatus={updateStatus} removeTodo={removeTodo} />
          ))
        }
      </div>
    </>
  )
}

export default App