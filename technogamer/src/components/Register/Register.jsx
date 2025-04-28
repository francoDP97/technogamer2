import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../button/Button'; // Asegúrate que existe
import './Register.css';

function Register({ abrirModalLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    codigoArea: '',
    telefono: '',
    pass: '',
    repitePass: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.pass !== formData.repitePass) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const user = {
      email: formData.email,
      nombre: formData.nombre,
      apellido: formData.apellido,
      telefono: `+${formData.codigoArea} ${formData.telefono}`,
      pass: formData.pass,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Usuario registrado con éxito");
    abrirModalLogin();
  };

  return (
    <div className="register-container">
      <h2 className="register-title">REGISTRARSE</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          placeholder="Dirección de correo electrónico*"
          value={formData.email}
          onChange={handleChange}
          className="register-input"
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre*"
          value={formData.nombre}
          onChange={handleChange}
          className="register-input"
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido*"
          value={formData.apellido}
          onChange={handleChange}
          className="register-input"
          required
        />

        <label className="register-label">Teléfono de contacto</label>
        <div className="phone-group">
          <input
            type="text"
            name="codigoArea"
            placeholder="Código de área*"
            value={formData.codigoArea}
            onChange={handleChange}
            className="register-input small-input"
            required
          />
          <input
            type="text"
            name="telefono"
            placeholder="Número de teléfono*"
            value={formData.telefono}
            onChange={handleChange}
            className="register-input small-input"
            required
          />
        </div>

        <input
          type="password"
          name="pass"
          placeholder="Contraseña*"
          value={formData.pass}
          onChange={handleChange}
          className="register-input"
          required
        />
        <input
          type="password"
          name="repitePass"
          placeholder="Repetir contraseña*"
          value={formData.repitePass}
          onChange={handleChange}
          className="register-input"
          required
        />

        <div className="register-footer">
          <Button texto="REGISTRARME" type="submit" />
          <button type="button" className="login-link border border-0" onClick={abrirModalLogin}>
            ¿Ya tienes cuenta?
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
