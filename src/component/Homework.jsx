import React from 'react'



export default function ArrayMethod() {
    const fruits = ["orange","banana","watermelon","Mango"]

    const degree = [{
        course : "BE",
        College : "YIT",
        Address : "Mangalore"
    }]
  return (
    <>
    <div>
        {fruits[2]}
        <ol>
            {fruits.map((row)=>{
                return <li>{row}</li>
            })}
        </ol>
        <ol>
        {degree.map((rr)=>{
                return <li>{rr.course}</li>
        })}
        </ol>
        {degree.map((rrr)=>{
            return(
                <div>
                    <p><strong>Course:</strong>{rrr.course}</p>
                    <p><strong>College:</strong>{rrr.College}</p>
                    <p><strong>Address:</strong>{rrr.Address}</p>
                </div>
            )
            
        })}
    </div>
    </>
  )
}
   