import { useContext } from 'react';
import { InvoiceContext } from "../contexts/InvoiceContext"

function SideBar () {

    const { inputFields , loading } = useContext(InvoiceContext);
    console.log(inputFields.allCountries)

    if(!loading) {
        return (
            <h1> Hello </h1>
        )
    }
    return (
    <div className="sidebar">
        <button type="button" className="btn btn-primary w-100" name=""> Save </button> <br/><br/>
        {/* <button type="button" className="btn btn-warning w-100" name=""> Download </button> */}
        <p> Choose currency : <br/> <span className="text-primary"> { inputFields.currencyName } { inputFields.currencySign } </span></p>        
        <select name="" id="" className="form-control">
            { inputFields.allCountries.map((item , index)=>{
                return (
                    <option value="">  { item.currencies[0]['code'] }  </option>
                )
            }) }
        </select>
    </div>
    )    
}

export default SideBar;