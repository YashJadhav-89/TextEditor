
// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React,{ useState } from 'react'







// // function App() {
// //   return (
// //    <div className="blank"><h1>Anurag loves mitali</h1></div>
// //   );
// // }

// // export default App;





// // let name = "ANURAG";     // example code line
// function App() {
//   const [Mode, setMode] = useState('light'); //whether dark mode is enabled or not.
//  const toggleMode = ()=>{
//   if(Mode === 'light'){
//     setMode('dark');
//     document.body.style.backgroundColor = 'grey';
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//   }
//  }
//   return (
//     <>
//     {/* //example code below strat  */}
//     {/*} <nav>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//     </nav>
//     <img src="" alt="" /> 
//     <div className="container">
//       <h1>Story of {name}</h1>
//     <p>Anurag is a 21 year old boy who is studied at N.B.N college of Engineering,pune.one day he saw a beatiful girl in her college.But unfortunately she was in cs department.Although anurag did not get demotivated.He suffering for her.after that one she came at maharana classes.from that day anurag also gone there for mitali.after that one day anurag took a bullet from rajas and gone at maharana classes .when class is over then mitali saw his bullet then she said to anurag that"plz drop me anurag",then anurag become happy.at the end he forget his friends and live happily with mitali</p>
//     </div> */}
  






     
//  {/* <Navbar title="Yash Jadhav" aboutText="About Textutils" />    //here we passing props. */}
// {/* <Navbar />   */}
// <Navbar title="Yash Jadhav" mode={Mode} toggleMode={toggleMode}/>
// <div className="container my-3">
// <TextForm heading="Enter the text to analyze below" mode={Mode}/>

// {/* <About /> */}






// </div>
//     </>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;


