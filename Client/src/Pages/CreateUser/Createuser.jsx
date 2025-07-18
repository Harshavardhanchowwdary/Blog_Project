import React from 'react'
import './Createuser.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Createuser() {
    const [user,setuser] = useState({
        name:"",
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
    async function Register(){
        let data = await fetch('http://localhost:5000/Register',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        });
        console.log(data.data)
        setuser({ name: "", email: "", password: "" });
        navigate('/Login'); // Redirect to Login page after successful registration
    }
    return (
        <div>
            <div className="MainCard">
                <form onSubmit={e => e.preventDefault()}>
                    <h2>Register Here</h2>
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="form-control" id="Name" name='name' onChange={handleinput} placeholder="Enter Your Name" autoComplete='off'
                        value={user.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className="form-control" id="Email" name="email" onChange={handleinput} placeholder="example@gmail.com" value={user.email} autoComplete='off'/>
                    </div>
                     <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="Password" name="password" onChange={handleinput} placeholder="Enter your password" value={user.password} autoComplete='off'/>

                    </div>
                    <button className='btn btn-success' type='button' onClick={Register}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Createuser