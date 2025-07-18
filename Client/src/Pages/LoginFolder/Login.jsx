import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Userdetails() {
    const [user,setuser] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate();

    function handleinput(e){

        let value = e.target.value;
        let field = e.target.name;
        setuser(prev=>({
            ...prev,
            [field]:value
        }));
    }
    async function Login(){
        let data = await fetch('http://localhost:5000/Login',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        });
        let response = await data.json();
        if(response.success) {  
            navigate('/'); // Redirect to homepage after successful login
        }else{
            alert(response.message); // Show error message if login fails
        }
        setuser({  email: "", password: "" });
         
    }
    return (
        <div>
            <div className="MainCard">
                <form onSubmit={e => e.preventDefault()}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className="form-control" id="Email" name="email" onChange={handleinput} placeholder="example@gmail.com" value={user.email} autoComplete='off'/>
                    </div>
                     <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="Password" name="password" onChange={handleinput} placeholder="Enter your password" value={user.password} autoComplete='off'/>

                    </div>
                    <button className='btn btn-success' type='button' onClick={Login}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Userdetails;