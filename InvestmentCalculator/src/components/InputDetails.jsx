

export function InputDetails({text1,text2,OnSelect,userIp}){
  
  
    return(
       
            <div className="input-group">
                
               <p>
                    <label>{text1}</label>
                    <input  type="number" 
                            required
                            value={userIp[text1]}
                            onChange={(e)=>OnSelect(text1,(e.target.value))
                    
                    }></input>
                </p>
                <p>
                    <label>{text2}</label>
                    <input  type="number" 
                            required
                            value={userIp[text2]}
                            onChange={(e)=>OnSelect(text2,(e.target.value))
                    
                    }></input>
                </p>
                
            </div>
            
       
       
    )

}