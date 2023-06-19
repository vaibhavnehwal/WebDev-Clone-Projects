import React, {useState} from 'react'
export default function TextForm(props){

const handleUpClick = () => {
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
} 
const handleLoClick = () => {
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")
} 
const handleOnChange = (event) =>{
    console.log("On change")
    setText(event.target.value);
}
const handleClearClick = ()=>{
    let newText = ("");
    setText(newText);
}
const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success")
}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success")
}
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{(text.split(" ").filter((element)=>{return element.length !==0}).length)} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Prievew</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
        </>
    )
}