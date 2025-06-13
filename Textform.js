
import React,{useState} from 'react';


export default function Textform(props) {
    const handler=()=>{
      console.log("Upper case clicked");
      let newtext=text.toUpperCase();
      setText(newtext);
      props.showalert("Upper Case clicked!","success")
    }
    const handleonchange=(evt)=>{
      console.log("on change");
      setText(evt.target.value);
    }
    const handler2=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showalert("Lower Case clicked!","success")
    }
    const copy=()=>{
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
      console.log("Copied to clipboard");
      props.showalert("Copied to clipboard!","success")
    }
    const Removeextraspaces=()=>{
      const newtext=text.trim().replace(/\s+/g,' ')
      setText(newtext);
      props.showalert("Extra Spaces removed!","success")
    }
    const[text,setText]=useState("Enter text here");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode=='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            
        </div>
           <button className="btn btn-primary" onClick={handler}>Convert to Upper case</button>
           <button className='btn btn-primary mx-2' onClick={handler2}>Convert to Lower case</button>
           <button className='btn btn-primary mx-2' onClick={()=>{setText("");props.showalert("Text cleared!","success")}}>Clear Text</button>
           <button className='btn btn-primary mx-2' onClick={copy}>Copy to clipboard</button>
           <button className='btn btn-primary mx-2' onClick={Removeextraspaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').length} seconds to read</p>
      <h2>Your text summary</h2>
      <p>{text.length>0?text:"Write something to Preview here"}</p>
    </div>
        
    </>
  )
}
