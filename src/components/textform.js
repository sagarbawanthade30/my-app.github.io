import React,{useState} from 'react'


export default function Textform(props) {
    const handleUPClick = ()=>{
        //console.log("Uppercase was click");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Uppercase","success ");
    }
    const handleLRClick = ()=>{
        //console.log("Uppercase was click");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase","success ");
    }
    const italicclick = ()=>{
        let newtext = text.bold();  
        setText(newtext);
        props.showalert("Converted to Italic","success ");
    }     
    const handleonchange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const[text , setText] = useState("Enter your text here") 
  return (
    <>
    <div className="container" style={{color: props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="MyBox" className="form-label"></label>
            <textarea className="form-control"  value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',color: props.mode==='light'? 'black':'white'}}id="MyBox" rows="6"></textarea>
        </div>
        <div>
        <button className="btn btn-primary mx-2"onClick={handleUPClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2"onClick={handleLRClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2"onClick={italicclick} >Convert to Italic</button>
        </div>
        <h3>Your text summary</h3>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p2>{0.008 * text.split(" ").length} Minutes to read</p2>
    </div>
    </>
  )
}
