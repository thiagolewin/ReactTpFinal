import Item from "../Item/Item"
import './ItemList.css'
export default function ItemList({products}) {
    console.log(products)
    return (<article className="productos">{products.map((item)=> {
        return <Item key={item.index} {...item}></Item>
    })}</article>
    )
}