const MONGO_URL = 'http://localhost:3001/users';



export const registerUserFetch = async (data) => {
    try {
        const response = await fetch(`${MONGO_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          console.log('Registro exitoso');
          
        } else {
          console.error('Error al registrar');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      } 
}

export async function loginUserFetch(data) {
  try {
    const response = await fetch(`${MONGO_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('Mensaje del servidor:', data.msg);
      console.log('Token JWT recibido:', data.data);
      

      // Guardar el token JWT en el localStorage
      localStorage.setItem('jwtToken', data.data);
      localStorage.setItem('email', data.email);
      localStorage.setItem('_id', data._id);
      console.log('Token JWT guardado en localStorage.');
      
      return { success: true, data: data.data }; // Indica éxito y devuelve el token
    } else {
      const errorData = await response.json();
      console.error('Error al iniciar sesión:', errorData.msg);
      return { success: false, error: errorData.msg }; // Indica fallo
    }
  } catch (error) {
    console.error('Error de red:', error);
    return { success: false, error: error }; // Indica error de red
  }
}

// export const login = async (data) => {
//   const response = await fetch(`${MONGO_URL_LOGIN}/login`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//           "Content-Type": "application/json",
//       },
//   });
//   const dataResponse = await response.json();
//   console.log('DataResponse:', dataResponse);
//   // console.log('Token:', dataResponse.data);

//   localStorage.setItem("token", dataResponse.data);
//   // return dataResponse;
// }