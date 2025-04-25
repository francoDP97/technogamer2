import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pedirProductos from '../js/pedirProductos';
import ItemList from '../ItemList/ItemList';
import Category from '../Categoryfilter/Category';
import './ItemListContainer.css'
import pronto from '../../../assets/img/iconos/pronto.png'


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category, subcategory } = useParams(); // ahora también usamos subcategoría

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        let filtered = res;

        // Filtra por categoría
        if (category) {
          filtered = filtered.filter((prod) => prod.category === category);
        }

        // Filtra por subcategoría
        if (subcategory) {
          filtered = filtered.filter((prod) => prod.subcategory === subcategory);
        }

        setProductos(filtered);
      })
      .catch((error) => {
        console.error('Error al pedir productos:', error);
      });
  }, [category, subcategory]);

  return (
    <div className=' grid-layout'>
      <div className='flex-container-category'>
        {/* Le pasamos category y subcategory para que el componente Category pueda saber cuál está activa */}
        <Category selectedCategory={category} selectedSubcategory={subcategory} />
      </div>
      <div className='flex-container'>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <div className="muy-pronto"><h3>¡MUY PRONTO <br />TENDREMOS MÁS!</h3>
            <img src={pronto} alt="pronto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
