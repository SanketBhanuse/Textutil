import React, {useState} from 'react'

const TextForm = (props) => {
  

    
    const habldeOnChange = (event)=>{ 
        setText(event.target.value);
    }
    const handleUpClick = ()=>{ 

        let newText =text.toUpperCase();
        if (text.length !== 0){
            setText(newText);
            props.showalert("converted to Uppercase Successfully ","success");
        }
        else{

            props.showalert("Enter Something ","danger");
        }
    }
    const handleLowClick = ()=>{ 
        let newText =text.toLowerCase();
        if (text.length !== 0){
        setText(newText);
        props.showalert("Converted To Lowercase Successfully","success");
        }
        else{
            props.showalert("Enter Something ","danger");

        }
    }
    const handleClearClick = ()=>{  
        if (text.length !== 0){
        setText("");
        props.showalert("Clear Text Successfully","danger");
        }
        else{
            
            props.showalert("Enter Something ","danger");
        }
 
    }
    
    const handleCopy =() => {
        if (text.length !== 0){
        let text = document.getElementById('mybox'); 
        navigator.clipboard.writeText(text.value)
        props.showalert("Copy Text Successfully ","success");
        }
        else{
            props.showalert("Enter Something ","danger"); 
        }
    }
    
    const handleremovespace = ()=> {
        let newtext = text.split(/[ ]+/);
        if (text.length !== 0){
        setText(newtext.join(' '));
        props.showalert("Remove Extra Space Successfully","success");
        }
        else{
            props.showalert("Enter Something ","danger");
        }
    };
    
    const [text, setText]= useState('');  
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center flex-column '>
        <div className="container" >
        <h2 style={{ color:props.mode === 'light'?'#000':'#fff'}}>{props.heading}</h2>

        <div className="mb-3"  > 
            <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'#fff':'#000', color:props.mode === 'light'?'#000':'#fff'}} id="mybox" onChange={habldeOnChange} rows="8" value={text} placeholder='Enter Text Here'></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert To Lower Case</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-danger mx-2" onClick={handleremovespace}>Remove Extra spaces</button>

        </div>

        <div className="container my-2" style={{ color:props.mode === 'light'?'#000':'#fff'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length!==0
            }).length} words And {text.length} Characters</p>
        </div>
    </div>
  )
}

export default TextForm