"use client"
import React from "react";
import DropDown from "../dropDown/dropDown";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

function NavBar({catchDataHome}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogin = () => {
        router.push('/login-register'); 
    };


    const handleLogout = () => {
        
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('email');
        localStorage.removeItem('_id');
        setIsLoggedIn(false);
        window.location.reload();
    };

    const dataNote =  (data) => {
            console.log(data)
         catchDataHome(data)
    }
    return (
        <>
            <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md">
                <div className="h-full flex justify-between items-center mx-auto   lg:max-w-7xl">

                    <div className="min-w-6">
                        <DropDown catchDataNav={dataNote} /> 
                    
                    </div>
                    <input type="text" className="w-4/12 p-1 rounded-lg items-center" placeholder="Buscar..." />
                    {/* Alternar entre botones dependiendo del estado de autenticación */}
                    {isLoggedIn ? (
                        <button className="mr-4 bg-white p-1 rounded-lg text-lg text-cyan-600 font-medium" onClick={() => handleLogout()}>Cerrar sesión</button>
                    ) : (
                        <button className="mr-4 bg-white p-1 rounded-lg text-lg text-cyan-600 font-medium" onClick={() => handleLogin()}>Iniciar sesión</button>
                    )}
                </div>

            </nav>
        </>
    )
}

export default NavBar;