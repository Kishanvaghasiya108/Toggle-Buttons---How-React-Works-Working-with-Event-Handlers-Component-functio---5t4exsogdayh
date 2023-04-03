import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
const [toggle,setToggle] = useState(false);

function handleClick(){
  setToggle(!toggle)
}
  

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {toggle ? "ON" : "OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {!toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
}


export default App;
