import React, {useState} from "react";

export default function BtnLR({ onLoginClick, onRegisterClick }){
    const [loginClicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
    setRegisterClicked(false);
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setLoginClicked(false);
    setRegisterClicked(true);
    onRegisterClick();
  };

    return(
        <>
        <div className="bg-gray-400 w-full rounded-r-lg  flex justify-end">
            <div className=" m-2">
                <button className={`p-2 border rounded-l-lg ${loginClicked ? "bg-gray-200" : ""}`}onClick={handleLoginClick}>
                    Iniciar sesión
                </button>

                <button className={`p-2 border rounded-r-lg ${registerClicked ? "bg-gray-200" : ""}`}onClick={handleRegisterClick}>
                    Registrarme
                </button>
                
            </div>
        </div>
        </>
    )
}