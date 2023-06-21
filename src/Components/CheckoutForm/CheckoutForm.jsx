import './CheckoutForm.css'
import { useState } from 'react';
export default function CheckoutForm({onConfirm}) {
    const [userData, setUserData] = useState({
        nombre: "",
        phone: "",
        email: "",
      });
      function onInputChange(evt) {
        const prop = evt.target.name;
        const value = evt.target.value;
    
        const newData = { ...userData };
        newData[prop] = value;
        setUserData(newData);
      }
    
      function onSubmit(evt) {
        evt.preventDefault();
        console.log(userData);
        onConfirm(userData)
      }
    return (
        <>
        <form action="">
        <input type="text" name='nombre' placeholder='Nombre' onChange={onInputChange} className="inputForm"/>
        <input type="number" name='phone' placeholder='Telefono' onChange={onInputChange} className="inputForm"/>
        <input type="email" name="email" id="" placeholder='Email' onChange={onInputChange} className="inputForm"/>
        <button className="enviar" onClick={onSubmit}>Comprar</button>
        </form>
        </>
    )
}