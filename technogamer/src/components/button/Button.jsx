import React from "react";
import './Button.css';
function Button({ texto }) {
    return (
        <div className="my-4">
            <button className="btn carrito">{texto}</button>
        </div>
    );
}
export default Button