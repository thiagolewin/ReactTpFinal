import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import './CartWidget.css'
export default function CartView() {
    const miContext = useContext(cartContext)
    let primera = true
    console.log(miContext.cart)
    return (
        <section className={`Cart ${miContext.cart.length == 0 ? `justify` : ``}`}>
            {miContext.cart.length == 0 ? (
                <h2>No hay items en el cart...</h2>
            ) : 
            <>
            <article className="cartItem tituloArticle">
                <h2>Imagen</h2>
                <h2>Nombre</h2>
                <h3>Precio</h3>
                <h4>Cantidad</h4>
            </article>
            {miContext.cart.map((item)=> {
                return(<article key={item.index} className="cartItem">
                    <img src={item.img}  alt={item.nombre} />
                    <h2>{item.nombre}</h2>
                    <h3>{item.precio * item.count}$</h3>
                    <h4>{item.count}</h4>
                </article>)
            })}
            <button className="enviar">Comprar</button>
            </>
            }
        </section>
    )
}