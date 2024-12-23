import React from 'react';
import './App.css'; // Make sure to style the component as needed

function SignIn() {
  return (
    <div className="app-container">
      <div className="login-box">
        <div className='login-box-inner'>
        <h2 className="app-name" >Application Name</h2>
        <label className="password-label"id = 'application'>Application Name</label><br></br>
        {/* <input type="email" className="email-input" value="xyz123@gmail.com" readOnly /> */}
        <h4 id = 'gmail'>
          xyz123@gmail.com 
        </h4>
        
        <div className="password-container">
         <label className="password-label">𝐄𝐧𝐭𝐞𝐫 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
          <input type="password" className="password-input" placeholder="⚫ ⚫ ⚫ ⚫ ⚫⚫" />
        </div>

        
        <div className="links-container" id='link'>
          <a href="#" className="forgot-link">Forgot Password?</a>
          <a href="#" className="email-link">Email code to xyz123@gmail.com</a>
        </div>
        <button className="signin-button">Signin</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
