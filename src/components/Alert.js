import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);


    }
  return (
    props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.Alert.type)}</strong>{props.Alert.msg}
            
        </div>
  )
}

export default Alert
