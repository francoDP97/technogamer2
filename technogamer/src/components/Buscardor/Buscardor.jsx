// src/components/Buscador/Buscador.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buscador.css';

function Buscador(props) {
    const [texto, setTexto] = useState('');
    const navigate = useNavigate();

    const manejarBusqueda = (e) => {
        e.preventDefault();
        if (texto.trim() !== '') {
            navigate(`/productos?buscar=${encodeURIComponent(texto)}`);
        }
    };

    return (
        <form onSubmit={manejarBusqueda} className="form-buscador">
            <input
                type="text"
                placeholder="Buscar producto"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="input-buscador"
            />
        </form>

    );
}

export default Buscador;