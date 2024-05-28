import {React, useState} from 'react';
import { toast } from 'react-toastify';
import './signupStyles.css';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
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
            const response = await fetch("http://localhost:8000/register",{
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
                    firstName: "",
                    lastName: "",
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
                    <h1>Customer SignUP </h1>

                        <form className="signUpForm" onSubmit={handleSubmit}>
                            <p>  
                                <input type="text" value={user.firstName}  name="firstName" onChange={handleInput} placeholder="firstname" id="name"/>
                            </p>
                            <p>
                                
                                <input type="text" value={user.lastName} name="lastName" onChange={handleInput} placeholder="lastname" id="name"/>
                            </p>
                            <p>
                                <input type="text" value={user.email} name="email" onChange={handleInput} placeholder="youremail@gmail.com" id="email"/>
                            </p>
                            <p>
                               
                                <input type="password"  value={user.password} onChange={handleInput} name="password" placeholder="password" id="password"/>
                            </p>
                            <p>
                                <button type='submit' className='submitButton' id="submit">Register</button>
                            </p>
                        </form>
                            
                        <p id="login">Already have an account? <a  href="/signin">Login</a></p>
                        
                    </div>
                </div>
                <div className="illustration"></div>
			</div>
		</section>
    </>
  );
}

export default Signup