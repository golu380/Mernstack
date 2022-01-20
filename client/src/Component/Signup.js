import React,{useState} from 'react'
import './Signupdes.css'
import {useHistory} from 'react-router-dom'



export const Signup = () => {
  const history = useHistory();
  const [user,setUser] =useState({
    name:"",email:"",work:"",password:"",cpassword:""
  });
  let name, value
  const handleInputs=(e)=>{
    console.log(e)
    name= e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});


  }
  const PostData= async(e)=>{
    e.preventDefault();
    
    const { name, email, phone, work, password, cpassword } = user;

    const res= await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    console.log("should run it")
    const data =await res.json();
    if(data.status === 422 || !data){
      window.alert("You could not register")
     
    }else{
      window.alert("Registration succesfull");
      console.log("Successfull Registration")
      history.push("/login")
    }

  }
    return (
      <>
      
     
     <form  method="POST">
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
  

    <label htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter name"  name="name" 
    value={user.name}
    onChange={handleInputs}
    required/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email"   name="email"
    value={user.email}
    onChange={handleInputs}
    required/>

    <label htmlFor="phone"><b>Phone number</b></label>
    <br/>
    <input type="number" placeholder="Enter phone number" name="phone" 
    value={user.phone}
    onChange={handleInputs}
    required/>
    <br/>

    <label htmlFor="work"><b>Work</b></label>
    <input type="text" placeholder="Enter your profession" name="work" required
    value={user.work}
    onChange={handleInputs}
    />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required
    value={user.password}
    onChange={handleInputs}
    />

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="cpassword" required
    value={user.cpassword}
    onChange={handleInputs}
    />



    

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" name="signup" value="register" onClick={PostData}>Sign Up</button>
    </div>
   
  </div>

</form>
<figure>
  
</figure>
      </>
    )
}
