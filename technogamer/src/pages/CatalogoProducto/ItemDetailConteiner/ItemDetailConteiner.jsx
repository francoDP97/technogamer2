import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import pedirItemPorId from '../js/pedirItemPorId';
import { useParams } from 'react-router-dom';

export default function ItemDetailConteiner() {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    setTimeout(function () {
      pedirItemPorId(Number(id))
        .then((res) => {
          setItem(res);
        })
    }, 250);
  }, [id])

  return (
    <div>

      {item && <ItemDetail item={item} />}

    </div>
  )
}
