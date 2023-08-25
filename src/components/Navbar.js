import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const Navbar=(props)=>{
    return(
        <>
    <div style={{background:"white",width:"100vw",height:"10vh",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"2px 2px 10px black",position:"fixed",zIndex:"1",top:"0"}}>
    <div style={{marginLeft:"50px"}}>
    <h1 style={{}}>ShopMe</h1>
    </div>
    <div style={{marginRight:"50px",display:"flex",flexDirection:"row"}}>
{props.loginStatus===false?
<>
  <Link to="/login"><Button style={{height:"45px",width:"124px",fontSize:"20px",marginRight:"50px"}} variant="contained">LogIn</Button></Link>  
  <Link to="/signUp"><Button style={{height:"45px",width:"124px",fontSize:"20px"}} variant="contained">SignUp</Button></Link> 
</>
    :
    <>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>{props.profile}</Avatar>
    </>
}
    </div>
    </div>
        </>
    )
}
export default Navbar