import React from 'react'
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
function Item({producto}) {
  return (     
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">      
        <div className="card h-100">
          <img
            src={producto.image}
            className="card-img-top"
            alt={producto.image}            
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{producto.name}</h5>
              <p className="card-text fw-bold">${producto.price}</p>
            </div>
            <div className="d-flex flex-column  gap-2 mt-3">
              <Button className="btn-sm" as={Link} to={`/producto/${producto.id}`} variant="primary">
                Ver Detalle
              </Button>
              <Button className="btn-sm" variant="success">
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Item