import React from "react"
import Error404 from '../../assets/img/iconos/pronto.png'
import './Error.css'

function Error() {
    return (
        <div className="error">
            <h2>ERROR 404!</h2>
            <img src={Error404} alt="Error_404" />
        </div>
    )
}

export default Error
