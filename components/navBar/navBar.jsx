import React from "react";
import DropDown from "../dropDown/dropDown";

function NavBar(){
    return(
        <>
<nav className="bg-gray-800 fixed h-16 flex justify-between items-center left-0 right-0 top-0 shadow-md ">
    <div className="w-1/12 ">
        <DropDown/>
    </div>
    <input type="text" className="w-4/12 p-1 rounded-lg items-center" placeholder="Busca tu puto note" />
    <button className="mr-4 bg-white p-1 rounded-lg">Iniciar sesion</button>
</nav>
        </>
    )
}

export default NavBar;