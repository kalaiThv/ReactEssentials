import { calculateInvestmentResults ,formatter} from "../util/investment"

export function Log({userIp}){
    
const res=calculateInvestmentResults(userIp)
const intialIn=res[0].valueEndOfYear-
                res[0].interest-
                res[0].Annual_Investment;


console.log(res)
    return(
        <p>
        {
           
                

            <table id="result">
                <thead>
                    <th>YEAR</th>
                    <th>INVESTMENT</th>
                    <th>INTEREST</th>
                    <th>TOTAL INTEREST</th>
                    <th>INVESTED CAPTIAL</th>
                </thead>
                <tbody>
                      { res.map((c)=>
                    {
                        const total=c.valueEndOfYear-c.Annual_Investment*c.year-intialIn;
                        const totalAmount=c.valueEndOfYear-total;
                       
                       return <tr key={c.year}>
                            <td>{(c.year)}</td>
                            <td>{formatter.format(c.valueEndOfYear)}</td>
                            <td>{formatter.format(c.interest)} </td>
                            <td>{formatter.format(total)} </td>
                            <td>{formatter.format(totalAmount)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            



        // <div class="input-group">
            
        //        <span> {(c.year)} </span>
        //        <span> {formatter.format(c.interest)}</span>
        //        <span> {formatter.format(c.Annual_Investment)}</span>       
        //        <span> {formatter.format(c.valueEndOfYear)}</span>       
        //  </div>)
        
    }
            
            
            
            </p>
    )
}