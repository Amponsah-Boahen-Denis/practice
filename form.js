import React,{useState} from 'react'
import Cret from './cret'

function Navba() {
const [value,setValue]=useState('')
const handle=(e)=>{
setValue(e.target.value)
}
 const action=(e)=>{
e.preventDefault()
alert(`${value}`)
setValue('')
 }
    return (
        <div>
          <ul className='nav'>
              <b>contact</b>
              <b>location</b>
              <b>state</b>
              <b>search</b>
              </ul>
              <progress>ggg</progress> <span>we are waiting for server...</span><br/>
              <input type="text" onChange={handle}  value={value}/>
              <button onClick={action}>action</button>
              <Cret/>

        </div>
    )
}

export default Navba;
