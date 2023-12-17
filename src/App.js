// function based app
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
 const togglemode = ()=>{

   if(mode === 'light') {
     setMode('dark');
     document.body.style.backgroundColor = 'rgb(37 37 37)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
 
   }
  }
  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type: type,
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return ( 
    <div className="App">
    <Router>

      <Navbar title="Text Utils"  mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route  path="/" element={ <TextForm heading="Enter the text to analyz" mode={mode} showalert={showalert}/>}/>
          <Route  path="/about" element={<About />}/>
        </Routes>
            
           
           
    </Router>
    </div>

  );
}

export default App;
