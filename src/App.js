import React,{useState} from 'react'

import Header from './component/Header'
import Info from './component/Info'

const App = () => {
     const [temp1, settemp1] = useState({})
     const [check, setcheck] = useState(false)

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
