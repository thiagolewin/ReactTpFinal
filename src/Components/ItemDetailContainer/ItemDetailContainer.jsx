import './ItemDetailContainer.css'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import {getItem} from '../../services/firebase.js'
import {cartContext} from '../../context/cartContext'
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
export default function ItemDetailContainer() {
    let params = useParams()
    console.log("a")
    let count
    const miContext = useContext(cartContext)
    let productData = miContext.cart.find((item)=> item.index == params.id)
    if (productData) {
        count = productData.count
    } else {
        count = 0
    }
    const [product,setProduct]= useState([])
    useEffect(()=> {
        getItem(params.id).then((res)=> setProduct(res))
    },[])
    if (product.length != 0) {
        return (
            <section id='Detailed'>
                <div className="itemDetailed">
                    <img src={product.img} alt={product.nombre} />
                    <h3>{product.nombre}</h3>
                    <h4>{product.precio} ARS</h4>
                    <h5 className={product.sexo}>{product.sexo}</h5>
                    <div className='talles'>
                    {product.talles.split(" ").map((talle)=> {
                        return <h6 key={talle} className='talle'>{talle}</h6>
                    })}
                    </div>
                    <ItemCount addItem={miContext.addItem} substractItem={miContext.substractItem} count={count} product={product}></ItemCount>
                </div>
            </section>
            
           )
    } else {
        return(<h2>Cargando...</h2>)
    }
    
}