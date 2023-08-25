import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
const Login=(props)=>{
const [usrName,setUsrName]=useState("")
const [passWord,setPass]=useState("")
const history=useHistory()
const handleChange=(e)=>{
if(e.target.name==="usrName")
setUsrName(e.target.value)
else
setPass(e.target.value)
}

const submitHandler=(e)=>{
e.preventDefault()
props.setLoginStatus(true,usrName[0].toUpperCase())
history.push(`/shop`)
}
    return(
        <>
<div style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
<div style={{width:"26%",height:"40%",boxShadow:"2px 2px 9px black",borderRadius:"4px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<div>
    <h1 style={{textDecoration:"underline",marginBottom:"20px"}}>LogIn</h1>
</div>
<div>
<form style={{display:"flex",flexDirection:"column"}} onSubmit={submitHandler}>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<PersonIcon style={{fontSize:"45px",marginTop:"10px"}}/>
    <TextField
  id="outlined-name"
  label="Username"
  name="usrName"
  value={usrName}
  onChange={handleChange}
style={{marginBottom:"12px"}}
/>
</div>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<LockIcon style={{fontSize:"45px",marginTop:"10px"}}/>
<TextField
  id="outlined-name"
  label="Password"
  name="passWord"
  value={passWord}
  onChange={handleChange}
type="password"
/>
</div>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"30px"}}>
<Button  type="submit" variant="contained">Login</Button>
</div>
    </form>
</div>
</div>
 </div>
        </>
    )
}
export default Login