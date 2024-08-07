import { Header } from "./components/Header"
import { useState } from "react"

import { InputDetails } from "./components/InputDetails"
import { Log } from "./components/Log";

function App() {
  const [isClick,setIsClick]=useState(false)
  const [userIp,setUserIp]=useState({
    Initial_Investment:'',
    Annual_Investment:'',
    Expected_Return:'',
    Duration:''


   });
    function handleChange(label,input)
    {
      
       setUserIp(prevIp=>{
            
          return { 
            ...prevIp,
            [label]:+input
           
           }
        })
      

    }

    function handleRestart(){
      setUserIp({
        Initial_Investment:'',
        Annual_Investment:'',
        Expected_Return:'',
        Duration:''});
      setIsClick(false)
    }
  return (
    <>
        <Header/>
        <section id="user-input">
          <InputDetails
                 text1={"Initial_Investment"}
                 text2={"Annual_Investment"} 
                 userIp={userIp}
                 isClick
                 OnSelect={handleChange}/>
   
   
           <InputDetails 
                 text1={"Expected_Return"} 
                 text2={"Duration"} 
                 isClick
                 userIp={userIp}
                 OnSelect={handleChange}/>
         </section>
   
         <section id="btn-container">
         <div id="btn"> 
            <button   className="cal-btn"onClick={()=>setIsClick(true)} >Calculate</button>
            <button   className="cal-btn" onClick={handleRestart} >Reset</button>
    
          </div>
    </section>
    {isClick && <section><Log userIp={userIp}/></section>}
   </>
 
  )
}

export default App
