import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import pedirProductos from "../js/pedirProductos";
import ItemList from "../ItemList/ItemList";
import Category from "../Categoryfilter/Category";
import "./ItemListContainer.css";
import pronto from "../../../assets/img/iconos/pronto.png";

function ItemListContainer() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const textoBusqueda = searchParams.get("buscar")?.toLowerCase() || ""; // Obtiene el parámetro de búsqueda de la URL
  const [productos, setProductos] = useState([]);
  const { category, subcategory } = useParams(); // usa también la subcategoría si está definida

  useEffect(() => {
    console.log("Texto de búsqueda:", textoBusqueda); // Verifica el valor del texto de búsqueda
    pedirProductos()
      .then((res) => {
        let filtered = res;

        // Filtrado por categoría
        if (category) {
          filtered = filtered.filter((prod) => prod.category === category);
        }

        // Filtrado por subcategoría
        if (subcategory) {
          filtered = filtered.filter(
            (prod) => prod.subcategory === subcategory
          );
        }

        // Filtrado por nombre (si se encuentra texto en la búsqueda)
        if (textoBusqueda) {
          filtered = filtered.filter((prod) =>
            prod.name.toLowerCase().includes(textoBusqueda)
          );
        }

        setProductos(filtered); // Actualiza el estado con los productos filtrados
      })
      .catch((error) => {
        console.error("Error al pedir productos:", error); // Muestra el error si hay problemas
      });
  }, [category, subcategory, textoBusqueda]); // Vuelve a ejecutarse si cambia la categoría, subcategoría o el texto de búsqueda

  return (
    <div className="grid-layout">
      <div className="flex-container-category">
        {/* Le pasamos category y subcategory para que el componente Category pueda saber cuál está activo */}
        <Category
          selectedCategory={category}
          selectedSubcategory={subcategory}
        />
      </div>
      <div className="flex-container">
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <div className="muy-pronto">
            <h3>
              ¡MUY PRONTO <br />
              TENDREMOS MÁS!
            </h3>
            <img src={pronto} alt="pronto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
