import ReactDOM from 'react-dom';
import "./index.css";
 import React,{useState} from 'react'
 function Index(){
      const [todos,setTodos]=useState([])
    const [todo,setTodo]=useState('')
    const [todoEditing,setTodoEditing]=useState(null)
    const [editingText,setEdtingText]=useState('')
    
    const addtdo=(e)=>{
        e.preventDefault()
        const details={
            id:new Date().getTime(),
            text:todo,
             complete:false,
        }

       if(todo==='') return alert('enter your todo')
        setTodos([...todos].concat(details)) 
        setTodo('') 
    };
    const det=(id)=>{
        setTodos([...todos].filter((todo)=>todo.id!==id))
    }

    const toogle=(id)=>{
        const update=[...todos].map((todo)=>{
if(todo.id===id){
    todo.complete=!todo.complete
}
return todo
        })
        setTodos(update)
    }
    const editTodo=(id)=>{
        if(editingText==='') return alert('enter a new todoplz')
        const updatetTodos=[...todos].map((todo)=>
        {
            if(todo.id===id){
                todo.text=editingText
                
            }
            return todo
        })
        setTodos(updatetTodos)
    setTodoEditing(null)
        setEdtingText('')
    }
    return(
        <div>
            <h1>MY TODO</h1>
               <form onSubmit={addtdo}>
            <input type="text"  onChange={(e)=>setTodo(e.target.value)} value={todo}/>
            <button type='submit'>Add</button>
            </form>

        {todos.map((todo)=><div key={todo.id}>
{todoEditing===todo.id?(<input type="text" onChange={(e)=>setEdtingText(e.target.value)} value={editingText}/>):
(<div> {todo.text}</div>)}
       
       

       <button onClick={()=>det(todo.id)}>DELETE</button>

      
       {todoEditing===todo.id?(<button onClick={()=>editTodo(todo.id)}>SUBMIT</button>):
       ( <button onClick={()=>setTodoEditing(todo.id)}>EDITING</button>)}
        <input type="checkbox" name="" id="check" onChange={()=>toogle(todo.id)} checked={todo.complete}/>
      
        </div>)}
        </div>
    )
}
 
 

ReactDOM.render(<Index/>,document.getElementById('h1'));


