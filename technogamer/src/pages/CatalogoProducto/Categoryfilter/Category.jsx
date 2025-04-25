import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'; // asegurate de tener los estilos

function Category({ selectedCategory, selectedSubcategory }) {
  // Categorías y sus subcategorías
  const categories = {
    Teclado: ['Logitech', 'Redragon', 'SteelSeries'],
    Periféricos: ['Mouse', 'Auriculares'],
    Streaming: ['Webcam', 'Micrófono'],
    Hardware: ['Procesadores', 'Placas Madre'],
  };

  return (
    <div>
      <h3 className='tituloCategoria'>Categorías</h3>
      <ul className='categoria'>
        {/* Todos los productos */}
        <li>
          <Link
            to="/productos"
            className={!selectedCategory ? 'selected-category' : ''}
          >
            Todos los Productos
          </Link>
        </li>

        {/* Categorías y subcategorías */}
        {Object.entries(categories).map(([cat, subcats]) => (
          <li key={cat}>
            {/* Enlace a la categoría */}
            <Link
              to={`/productos/${cat}`}
              className={selectedCategory === cat && !selectedSubcategory ? 'selected-category' : ''}
            >
              {cat}
            </Link>

            {/* Subcategorías solo si está seleccionada la categoría */}
            {selectedCategory === cat && (
              <ul className="subcategories">
                {subcats.map((sub) => (
                  <li key={sub}>
                    <Link
                      to={`/productos/${cat}/${sub}`}
                      className={selectedSubcategory === sub ? 'selected-category' : ''}
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;