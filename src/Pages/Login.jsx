import React from "react";
//import Add from "../images/Gallery.png";

function Login(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                
                <span className="Title">Login</span>
                <form action="">
                    
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                   
                    
                    <button>Sign in</button>
                </form>
                <p>Don't have an account? <b>Register</b></p>
            </div>
        </div>
    );
}

export default Login;