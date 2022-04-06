import { useContext } from 'react'

// contexts
import { FilterContext } from '../Editcontexts/FilterContext'

function Filter () {
    const { filters : { search , date , paymentStatus , amount } , filterChange , clearFilter } = useContext(FilterContext);
    return (
        <div className="container mt-2 row mx-auto p-0 filter">
        <div className="col-md-3">
            <label htmlFor="search"> Search </label> <br/>
            <input 
                type="text"
                name="search"
                placeholder = "Search"
                value={ search }      
                onChange={ (e)=>filterChange(e) }                 
            />
        </div>
        <div className="col-md-2 ">
            <label htmlFor="date"> Date </label> <br/>
            <select 
                name="date" 
                id="" 
                value={date}
                onChange={ (e)=>filterChange(e) }                                         
                >
                <option value="asc"> Ascending Dates</option>
                <option value="desc"> Descending Dates</option>
            </select>
        </div>
        <div className="col-md-2 ">
            <label htmlFor="amount"> Amount </label> <br/>
            <select 
                name="amount" 
                id="" 
                value={amount}
                onChange={ (e)=>filterChange(e) }                                                             
                >
                <option value="low"> Lowest Amount </option>
                <option value="high"> Highest Amount </option>
            </select>
        </div>
        <div className="col-md-2 ">
            <label htmlFor="payment-status" className="payment-status"> Payment Status </label> <br/>
            <div className="d-flex justify-content-start">                        
                <select 
                    name="paymentStatus" 
                    id="" 
                    value={paymentStatus}
                    onChange={ (e)=>filterChange(e) }                                                             
                    >
                    <option value="all"> All </option>
                    <option value="paid"> Paid </option>
                    <option value="unpaid"> Unpaid </option>
                </select>
            </div>
        </div>
        <div className="col-md-3">
            <label htmlFor="payment-status" className="payment-status text-end"> </label> <br/>
            <div className="d-flex justify-content-end">                        
                <button type="button" className="b-0 clear-filter rounded mt-2 btn-danger inline" onClick = { ()=>clearFilter()} > Clear Filter </button>
            </div>
        </div>        
    </div>
    )
}

export default Filter