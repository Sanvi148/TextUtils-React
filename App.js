import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setalert]= useState(null);
  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About /> */}
          <Textform showalert={showalert}heading="Enter the text to analyze below" mode={mode} /> 
    </div>
    
    </>
  );
}


export default App;
