
import "./styles.css";

 function Login({handelInput,hanelSubmit,input}) {
  
  return (
    <div className="App">
      <input type="text" name="fname" value={input.fname||""}  onChange={handelInput}/>
      <input type="password" name="pass" value={input.pass||""} onChange={handelInput}/>
      <button onClick={hanelSubmit}>Log In</button>
    </div>
  );
}
export default Login