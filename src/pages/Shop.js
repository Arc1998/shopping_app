import { useEffect,useState } from 'react'
import CardDisplay from '../components/CardDisplay'
import Load from '../components/Load'
const Shop=(props)=>{
const [products,setProducts]=useState(null)
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(res=>{
        setProducts(res)
    })
},[setProducts])
    return(
        <>
<div style={{margin:"150px 14px 50px",marginTop:"165px",width:"98vw",height:"100vh",display:"flex",flexWrap:"wrap"}}>
{
 products===null? <><Load /></>:
 products.map((val,index)=>{
        props.lenOfItemArr(products.length)
        return(
            <>
            <CardDisplay 
            product={val}
            key={index}
            index={index}
            option="shop"
            />
            </>
        )
    })
}
</div>

        </>
    )
}
export default Shop