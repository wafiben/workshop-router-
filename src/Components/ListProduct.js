import React from 'react'
import CardProduct from './CardProduct'
const ListProduct = ({products}) => {
    
    return (
        <div style={{display:'flex',justifyContent:'center' ,marginTop:'50px'}}>
            {products.map((elt,index)=><CardProduct product={elt} key={index}/>)}
        </div>
    )
}

export default ListProduct
