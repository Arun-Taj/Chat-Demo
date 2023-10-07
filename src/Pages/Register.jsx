import React from "react";
import Add from "../images/Gallery.png";

function Register(){
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat With Me</span>
                <span className="Title">Register</span>
                <form action="">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter Email"/>
                    <input type="password" placeholder="Enter Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                    
                    <button>Sign up</button>
                </form>
                <p>You do have an account? <b>Login</b></p>
            </div>
        </div>
    );
}

export default Register;