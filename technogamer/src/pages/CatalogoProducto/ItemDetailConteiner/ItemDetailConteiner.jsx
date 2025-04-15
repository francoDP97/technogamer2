import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import pedirItemPorId from '../js/pedirItemPorId';

export default function ItemDetailConteiner({itemId}) {
    const [item, setItem]= useState(null);
    useEffect(() => {
        pedirItemPorId(itemId)
            .then((res) => {
                setItem(res);
            })
    }, [itemId])

  return (
    <div>
        {item && <ItemDetail item={item}/>}
        
    </div>
  )
}
