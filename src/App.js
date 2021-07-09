import React,{useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Info from './component/Info'

const App = () => {
     const [temp1, settemp1] = useState({})
     const [check, setcheck] = useState(false)
     
     console.log(temp1,"heelo")
     console.log(check)
    
     return (
          <>
               <div>
               <Header  temp1={temp1} settemp1={settemp1} setcheck={setcheck}/>
               {check?<Info output={temp1} />:''}
              
               </div>
          </>
     )
}

export default App
