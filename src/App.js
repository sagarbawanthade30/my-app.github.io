import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = 'grey';
      showalert("Dark mode has been enabled", "success ");
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showalert("Light mode has been enabled", "success ");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert Alert={alert} />
      

      <Routes>
        <Route path="/textform" element={<Textform heading="Enter your text here" mode={mode}/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/hi" element={<About/>} />
        <Route path="/me" element={<About/>} />
      </Routes>

    </>








  );
}

export default App;

