import { useContext} from "react"
import { ProdContext} from "../context/CartProd"
import CardDisplay from "../components/CardDisplay"
const Cart=()=>{
const obj=useContext(ProdContext)
    return(
        <>
<div style={{margin:"50px",marginTop:"165px",width:"98vw",height:"100vh",display:"flex",flexWrap:"wrap"}}>
{
    obj.products.map((val,index)=>{   
    return(
        <>
        <CardDisplay 
        product={val}
        key={index}
        option="cart"
        />
        </>
    )
    })
}
</div>
        </>
    )
}
export default Cart