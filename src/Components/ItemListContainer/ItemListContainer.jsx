import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../../services/firebase.js";
import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
function withSearch(OrigComponent) {
    function wrappedComponent() {
        const [searchWord,setSearchWord] = useState("")
        
        function handleChange(evt) {
            const valor = evt.target.value
            setSearchWord(valor)
        }
        function filterList(products) {
            if(searchWord == "") {
                return products
            } else {
                return products.filter((item)=> {
                    let textTitle = item.nombre.toLowerCase()
                    let word = searchWord.toLowerCase()
                    return textTitle.includes(word)
                })
            }
        }
        
        return (
            <div className="InputProductos">
            <input type="text" onChange={handleChange} placeholder="Buscar productos"/>
            <OrigComponent filterList={filterList}></OrigComponent>
            </div>
        )
    }
    return wrappedComponent
}
function ItemListContainer( {filterList} ) {
    const {category} = useParams()
    const functionUsed = category === undefined ? getData : getCategoryData
    let [products, setProducts] = useState([])
    useEffect(()=> {
        functionUsed(category).then((respuesta)=> setProducts(respuesta))
    },[category])
    if (products.length ==0) {
        return (<><h2>Cargando...</h2></>)
    } else {
        return <ItemList products={filterList(products)}></ItemList>
    }
}
const WrappedItemListContainerSearch = withSearch(ItemListContainer)
export default WrappedItemListContainerSearch