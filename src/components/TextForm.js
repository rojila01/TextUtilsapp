import React,{ useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Upper Case was clicked" +text);
       let newText= text.toUpperCase();
       setText(newText);
       props.showAlert(" Converted to Upper Case!", "success");
    }
    const handleLoClick = () =>{
        // console.log("Upper Case was clicked" +text);
       let newText= text.toLowerCase();
       setText(newText);
       props.showAlert(" Converted to Lower Case!", "success");
    }
    const handleCapitalClick = () =>{
        // console.log("Upper Case was clicked" +text);
       let newText= text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
       setText(newText);
       props.showAlert(" The first letter is Capital!", "success");
    }
    const handleClearClick = () =>{
        // console.log("Upper Case was clicked" +text);
       let newText=(' ');
       setText(newText);
       props.showAlert(" Clear!", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
     
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitized Text</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
   
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008*text.split(" ").length} Minutes read</p>
        <h2> Preview </h2>
        <p> {text.length>0 ? text:"Enter something in the textbox above to preview it here"} </p>
    </div>
    </>
  )
}
