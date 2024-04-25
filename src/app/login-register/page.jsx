'use client'
import {React, useState} from "react";
import BtnLR from "../../../components/barLogReg/barLogReg";
import Login from "../../../components/loginForm/loginForm";
import RegisterForm from "../../../components/registerForm/registerForm";



export default function LoginRegister() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  
  
  return (
    <section className="bg-gray-100 flex justify-center items-center w-5/6 h-screen">
      <div className=" w-full h-5/6 flex flex-row justify-center">
      <div className=" bg-pink-800 w-2/6 rounded-l-lg bg-cover bg-center" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bm90YXN8ZW58MHx8MHx8fDA%3D')"}}></div>
        <div className="bg-gray-300 w-3/6 flex flex-col items-center">
          <BtnLR
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          />
          <div className="bg-gray-400 w-5/6 h-5/6 mt-8">
             {/* <Login/> */}
            {showRegister == true ?  <RegisterForm /> : <Login/>}
          </div>
        </div>
      </div>
    </section>
  );
}
