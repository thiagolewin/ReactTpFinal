import './ItemCount.css'
export default function ItemCount({addItem,substractItem,count,product}) {
    

    return (
        <>
                    <div className='addToCart'>
                    <div className='addSubstract' onClick={()=>{substractItem(product)}}>-</div>
                    <h3>{count}</h3>
                    <div className='addSubstract' onClick={()=>{addItem(product)}}>+</div>
                    </div>
        </>
    )
}