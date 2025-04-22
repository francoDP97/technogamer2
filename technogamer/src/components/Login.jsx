import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.pass === pass) {
      localStorage.setItem("logged", true);
      navigate('/');
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} required />
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
      <br />
    </div>
  );
}

export default Login;
