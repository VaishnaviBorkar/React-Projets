import './App.css';
import { useState } from 'react';

 const App=()=> {
   //states of App function component
  const [FirstName,setFirstName]=useState('')
  const [LastName,setLastName]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [Message,setMessage]=useState('')
  const [Checkbox,setCheckbox]=useState(false)

  const handleFirstName=(e)=>{
    setFirstName(e.target.value)
    // console.log(FirstName)
 }
  const handleLastName=(e)=>{
    setLastName(e.target.value)
  }
  const handleEmail=(e)=>
  {
   setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
   setPassword(e.target.value) 
  }
  const handleMessage=(e)=>{
    setMessage(e.target.value)
  }
  const submitFormHandler=(e)=>{
    e.preventDefault();
    const details=[FirstName,LastName,Email,Password,Message,Checkbox];
    console.log(details);
  }
  const handlecheckbox=(e)=>{
    // console.log(e.target.checked);
    setCheckbox(e.target.checked)

  }
  return (
   <div className="container"> 
     <h2>Form In React</h2>
     <form>
       <div className="form-group"> 
          <label>First Name : </label>
          <input type="text" placeholder="Enter Your First Name"
          onChange={handleFirstName}/>
       </div>
       <div className="form-group"> 
          <label>Last Name : </label>
          <input className="form-control" type="text" 
           placeholder="Enter your last name"
           onChange={handleLastName}/>
      </div>
      
      <div className="form-group"> 
          <label>Email : </label>
          <input className="form-control" type="email" 
           placeholder="Enter your Email"
           onChange={handleEmail}/>
      </div>
      <div className="form-group"> 
          <label>Password : </label>
          <input className="form-control" type="password" 
           placeholder="Enter your Password"
           onChange={handlePassword}/>
       </div> 
       <div className="form-group">
                  <label>Gender : </label>
                  <select className="form-control" >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                  </select>
       </div>

       <div className="form-group">
              <label>Message : </label>
              <textarea className="form-control" 
              onChange={handleMessage}></textarea>
      </div>

      <div className="form-group">
             <input type="checkbox" 
             onClick={handlecheckbox}/> I agree with the terms & conditions
      </div>

              <div className="form-group">
                  <input className="form-control" type="file" />
              </div>
        <input className="btn btn-success btn-lg" type="submit" onClick={submitFormHandler} />
  
     </form>

  </div>
  );
}

export default App;
