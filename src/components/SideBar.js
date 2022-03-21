import { useContext } from 'react';
import { InvoiceContext } from "../contexts/InvoiceContext"

function SideBar () {

    const { inputFields , handleCurrency , loading , submit , allCountries } = useContext(InvoiceContext);

    if(!loading) {
        return (
            <h1> Hello </h1>
        )
    }
    
    return (
    <div className="sidebar">
        <button type="button" className="btn btn-primary w-100" name="" onClick={ submit } > Save </button> <br/><br/>
        {/* <button type="button" className="btn btn-warning w-100" name=""> Download </button> */}
        <p> <span className="text-primary">  { inputFields.currencyName } { inputFields.currencySign } { inputFields.countryFlag }   </span></p>        
        <select name="" id="" className="form-control" onChange={ (e)=>handleCurrency(e) }>
            { allCountries.map((item , index)=>{
                for (let property in item.currencies) {
                if (item.currencies.hasOwnProperty(property)) {                        
                return (
                    <option value={item.name['common']} key={ item.flags['png'] } > 
                           { item.name['common'] } ({ item.currencies[property]['symbol']}) 
                    </option>
                        )
                    }
                }         
            }) }
        </select>
    </div>
    )    
}

export default SideBar;