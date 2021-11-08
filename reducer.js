
import React,{useReducer} from 'react'
function reducer(value,action){
switch(action.type){
    case 'increment': return value + 1
    case 'decrement': return value - 1
    default: return value
}
}
function Cret(){
const[value,dispatch]=useReducer(reducer,0)
return(
    <div>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        <b>{value}</b>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
    </div>
)
}

export default Cret;