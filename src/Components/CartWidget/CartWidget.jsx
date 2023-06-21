import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import './CartWidget.css'
import ItemCount from '../ItemCount/ItemCount'
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrderWithStockUpdate } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
export default function CartView() {
    const navigateTo = useNavigate();
    const miContext = useContext(cartContext)
    async function handleConfirm(userData) {
        const order = {
          items: miContext.cart,
          buyer: userData,
          date: new Date(),
          price: miContext.total(),
        };
    
        try {
          const id = await createOrderWithStockUpdate(order);
          navigateTo(`/order-confirmation/${id}`);
          /* 
          1. alert: SweetAlert/toastify -> muestren el id
          2. redirección: React Router -> /confirmation
          3. rendering condicional -> modificando un state
        */
        } catch (error) {
          alert(error);
        }
      }
    let primera = true
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
                let productData = miContext.cart.find((i)=> i.index == item.index)
                let count  = productData.count
                return(<article key={item.index} className="cartItem">
                    
                    <img src={item.img}  alt={item.nombre} />
                    <h2>{item.nombre}</h2>
                    <h3>{item.precio * item.count}$</h3>
                    <h4>{item.count}</h4>
                    <div className="trash">
                    <img src="./src//img/trash.png" alt="" onClick={()=>{miContext.eliminarItem(item)}}/>
                    </div>
                    <ItemCount addItem={miContext.addItem} substractItem={miContext.substractItem} count={count} product={productData} clase="addToCartView"></ItemCount>
                </article>)
            })}
            <h2 className="total">El total de la compra es: {miContext.total()}</h2>
            <CheckoutForm onConfirm={handleConfirm} />
            </>
            }
        </section>
    )
}