
import './signStyle.css';
import {React, useState} from 'react';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: ""
}) 

const navigate = useNavigate();

const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUser({
        ...user, 
        [name]: value
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8000/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        })

        if(response.ok){
            const res = await response.json();
            navigate("/");
            setTimeout(()=>{
              alert(res);
          },1000)
        }else{
            const res = await response.json();
          setUser({
            email: "",
            password: ""
        })

        alert(res);
        }
    } catch (error) {
        
    }

    
}

  return (
    <>
		<section className='section' id='signupSection'>
			<div className="contentSection">
				

				<div className="inputDiv" >
                    <div className="signUpCard">
                    <h1>Login </h1>

                        <form className="signUpForm" onSubmit={handleSubmit}>
                            <p>
                                <input type="text" value={user.email} name="email" onChange={handleInput} placeholder="youremail@gmail.com" id="email"/>
                            </p>
                            <p>
                               
                                <input type="password" name='password' value={user.password} onChange={handleInput} placeholder="password" id="password"/>
                            </p>
                            <p>
                                <button className='submitButton' id="submit">Login</button>
                            </p>
                        </form>
                            
                        <p id="login">Dont have an account? <a  href="/signup">Register</a></p>
                        
                    </div>
                </div>
                <div className="illustration"></div>
			</div>
		</section>
    </>
  );
}

export default Signin