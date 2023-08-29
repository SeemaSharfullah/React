// function App(){
//     alert('hello');
// }

import React from 'react'

export default function Arrowfunction() {
    const Heloo = () =>{
        alert('hello world');

    }
  return (
    <div>
    {Heloo() }
    <button onClick={Heloo}>Submit</button>
    </div>
  )
}


