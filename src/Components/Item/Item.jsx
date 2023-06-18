import './Item.css'
import { Link } from "react-router-dom";
export default function Item({index,nombre,precio,sexo,tipo,colores,talles,img}) {
    
    console.log(talles.split(" "))
    return (
        <Link to ={`product/${index}`}>
        <div className="item">
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <h4>{precio} ARS</h4>
        <h5 className={sexo}>{sexo}</h5>
        <div className='talles'>
        {talles.split(" ").map((talle)=> {
            return <h6 key={talle} className='talle'>{talle}</h6>
        })}
        </div>
    </div>
    </Link>)
}