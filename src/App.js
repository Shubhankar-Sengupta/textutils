import React, { useState } from 'react'; // use-state is a hook that we use.
import './App.css';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // using the usestate hook to clarify things.
  const [mode, setMode] = useState('light'); 


  // set alert.
  const [alert, setAlert] = useState(null);


  let toggleMode = () => {

    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor= '#fff';
    } 

    else {
      setMode('dark');
      document.body.style.backgroundColor= '#212529';
    }

  }

  // in order to show alerts
  let showAlert = (msg, type) => {

    setAlert({
      msg,
      type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }

  // compontents with props.

  
  return (

    <>


    <Router>
    {/* <Navbar mode={mode} title="Textutils" toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    <TextBar alert={showAlert} mode={mode}/> */}


      <Navbar mode={mode} title="Textutils" toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <Routes>

          <Route path='/' element={<TextBar alert={showAlert} mode={mode}/>}></Route>      
       
          <Route path='/about' element={<Aboutus/>}></Route> 

      </Routes>
 
    </Router> 


    </>
    
  );
}

export default App;
