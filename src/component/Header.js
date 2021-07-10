import React,{useState} from 'react';
import axios from 'axios'
import { Button ,Form,FormControl,Navbar} from 'react-bootstrap'
const Header = (props) =>{
  const [state, setstate] = useState('')
  const params = {
    access_key:'9b63235707cbf69f788dbc2d49c5cfb6',
    query: state
  }
  
 const hero=()=>{
   
    setstate('')
    props.setcheck(false)
    axios.get('http://api.weatherstack.com/current',{params})
    .then((res)=>{
      props.settemp1(res.data)
      if(res.data.success==false)
      {
        props.setcheck(false)
      }
      else{
        props.setcheck(true)
      }
     
    }).catch((err)=>{
     alert("PLAESE ENTER VALID NAME..")
    })
    
  }
    return (
    <>
  <Navbar  bg="dark" variant="dark" >
    <Navbar.Brand><strong>Weather</strong></Navbar.Brand>
     <Form className="d-flex ">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={state} onChange={(e)=>{setstate(e.target.value)}}/>
      <Button variant="outline-info"  onClick={()=>{hero()}}>Search</Button>
    </Form>
  </Navbar>
</>
    )
}

export default Header
