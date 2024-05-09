const MONGO_URL = 'http://localhost:3001/notes';

export const createNoteFetch = async (data) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch(`${MONGO_URL}/createNote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          console.log('Nota registrada con exito');
          
        } else {
          console.error('Error al registrar');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      } 
}

export const getNotesFetch = async () => {
  try {
    const idUser = localStorage.getItem('_id');
    const token = localStorage.getItem('jwtToken');
    const response = await fetch(`${MONGO_URL}/getNotes/${idUser}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.ok) {
      const data = await response.json(); // Aquí obtienes los datos de la respuesta
      console.log('Notas del usuario:', data); // Puedes hacer algo con los datos aquí
      return data
    } else {
      console.error('No hay notas del usuario');
      return [];
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    return [];
  } 
}