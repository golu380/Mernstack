import React,{useState}  from 'react'

import { useHistory } from 'react-router';
export const Login = () => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const loginUser = async (e) =>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method: "POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

    });
   
    if(res.status === 400 ){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login succesfull")
      history.push("/")
    }
  }
    return (
       <>
       <form method="POST">



  <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="email" required
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

    <input type="submit" name="signin" id="signin"
    value="Log In"
    onClick={loginUser}
    />
   
  </div>

 
</form>
       </>
    )
}
