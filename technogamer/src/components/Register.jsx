import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, pass }));
    alert("Usuario registrado correctamente");
  };

  return (
    <div className="container mt-5">
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} required />
        <button className="btn btn-success" type="submit">Registrar</button>
      </form>
      <br />
    </div>
  );
}

export default Register;
