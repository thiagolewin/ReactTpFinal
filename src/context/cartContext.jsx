import { createContext, useState } from "react";
export const cartContext = createContext({cart: []})

export function CartContextProvider({children}) {
    const [cart,setCart] = useState([])

    function addItem(product) {
        const newCart = [...cart]
        let indice = newCart.findIndex((item)=> item.index == product.index)
        if (indice != -1) {
            newCart[indice].count++
        } else {
            newCart.push({...product, count: 1})
        }
        setCart(newCart)
    }
    function substractItem(product) {
        const newCart = [...cart]
        let indice = newCart.findIndex((item)=> item.index == product.index)
        if (indice != -1) {
            if (newCart[indice].count > 0) {
                newCart[indice].count--
                setCart(newCart)
            }
            if (newCart[indice].count == 0) {
                eliminarItem(product)
            }
        }
    }
    function total() {
        let total = 0;
        cart.map((item)=> {
            total+=item.precio * item.count
        })
        return total
    }
    function eliminarItem(product) {
        let newCart = [...cart]
        newCart = newCart.filter((item)=> item.index != product.index)
        setCart(newCart)
    }

    return (
    <cartContext.Provider value={{cart,addItem,substractItem,eliminarItem,total}}>
        {children}
    </cartContext.Provider>
        )
}