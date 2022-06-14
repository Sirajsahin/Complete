import { useState } from "react";
import Login from "./Login";
import User from './User'
import "./styles.css";

function App() {
  const [input , setInput]=useState({})
  const [data,setData]=useState([]) 
  console.log(data)
  const [flag,setFlage]=useState(true)
  const [inputAreaa,setInputAreaa]=useState({})
  const [arr,setArr]=useState([])
  const handelInput =(e)=>{
      const name=e.target.name;
      const value=e.target.value
      setInput({...input,[name]:value})
  }
  const hanelSubmit=()=>{
    //  setData(val=>[...val,input])
     setFlage(false)
  }
  const inputArea=(e)=>{
     const name=e.target.name
     const value=e.target.value
     setInputAreaa({...inputAreaa,[name]:value})

  }
  const postClick=()=>{
     setArr(val=>[...val,inputAreaa])
  }
  return (
    <div className="App">
      {
        flag?<Login input={input} hanelSubmit={hanelSubmit} handelInput={handelInput} />:<User data={data} input={input} inputAreaa={inputAreaa} postClick={postClick} arr={arr} inputArea={inputArea}/>
      
     }
    </div>
  );
}
export default App

// Create a simple page in React JS version:17.0.2 that has a login with Facebook. Once you click on it, it will ask for Facebook login. Once you log in, it will show the next page that shows "Welcome <name>" where the name is the Full name of the person logging in. 
// Part 2: Once you login just below Welcome <> there will be a POST, the user can simply add some text and publish a post to Facebook, It will be visible on Facebook.
// Part 3 Record the final output video using screen recorder and mail it back
