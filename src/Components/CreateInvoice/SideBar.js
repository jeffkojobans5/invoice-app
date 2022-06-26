import { useContext } from 'react';
import { InvoiceContext } from "../../Contexts/InvoiceContext"
import  Loader  from '../../media/giphy.gif'

function SideBar () {

    const { inputFields , handleCurrency , currencyChange , currencyLoading , submit , allCountries , comingSoon} = useContext(InvoiceContext);

    if(!currencyLoading) {
        return (
            <img src={ Loader } />
        )
    }
    
    return (
    <div className="sidebar">
        <button type="button" className="btn btn-primary w-100" name="" onClick={ (e)=>submit(e) } > Save </button> <br/><br/>
        <button type="button" className="btn btn-warning w-100" name="" onClick={ (e)=>comingSoon(e) } > Download </button> <br/><br/>
        <p> <span className="text-primary">  { inputFields.currencyName } { inputFields.currencySign } { inputFields.countryFlag }   </span></p>        
            <select name="currency-select" id="" className="form-control" onChange={ (e)=>currencyChange(e) } value={ inputFields.currencyCountry }>
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