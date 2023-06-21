import './ItemCount.css'
export default function ItemCount({clase,addItem,substractItem,count,product}) {
    console.log(clase)
    return (
        <>
                    <div className={clase}>
                    <div className='addSubstract' onClick={()=>{substractItem(product)}}>-</div>
                    <h3>{count}</h3>
                    <div className='addSubstract' onClick={()=>{addItem(product)}}>+</div>
                    </div>
        </>
    )
}