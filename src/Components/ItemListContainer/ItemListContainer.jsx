import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getData, exportDataWithBatch, getCategoryData } from "../../services/firebase.js";
import ItemList from '../ItemList/ItemList.jsx'
export default function ItemListContainer() {
    const {category} = useParams()
    const functionUsed = category === undefined ? getData : getCategoryData
    let [products, setProducts] = useState([])
    useEffect(()=> {
        getData(category).then((respuesta)=> setProducts(respuesta))
    },[category])
    console.log(products)
    if (products.length ==0) {
        return (<><h2>Cargando...</h2></>)
    } else {
        return (<ItemList products={products}></ItemList>)
    }
}