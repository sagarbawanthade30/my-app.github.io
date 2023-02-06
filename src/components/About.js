import React from 'react'

export default function About(props) {
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    
   
  }
  let border = {
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : 'black',
    borderRadius:'15px',
   

  }
  return (
    <>
     <h1 style={mystyle}>About Us</h1>
      <div className="container "style={border}>
        <div className="my-3" style={mystyle} >
          <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
          <p className="user-select-auto">This paragraph has default select behavior.</p>
          <p classNAme="user-select-none">This paragraph will not be selectable when clicked by the user.</p>

        </div>
      </div>
    </>
  )
}
