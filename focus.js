import React, {useEffect,useRef} from 'react';
function Todo2(){
const fist=useRef(null)
const secnd=useRef(null)
const thrd=useRef(null)
useEffect(()=>{
    fist.current.focus()
    console.log('i am here')
},[])
function fist1(e){
if(e.key==='Enter')return secnd.current.focus()
}
function secnd2(e){
    if(e.key==='Enter')return thrd.current.focus()
}
function thrd3(e){
    if(e.key==='Enter')return alert('i like u')
}
useEffect(() => {
console.log('second has been run')
},[secnd])
   return(
<div>
    <input type="text" ref={fist} onKeyDown={fist1}/>
    <input type="text" ref={secnd}  onKeyDown={secnd2}/>
    <button ref={thrd} onKeyDown={thrd3} >submit</button>
</div>
   ) 
}
 


export default Todo2;
