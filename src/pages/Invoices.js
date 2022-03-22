import { useContext } from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'
import { InvoiceList } from '../EditComponents/index'
import { Header } from '../EditComponents/index'
import {FilterContext} from '../Editcontexts/FilterContext'

function Invoices () {

    const { filters : { search , date , hasPaid , amount } , filterChange } = useContext(FilterContext);

    return (
    <>
        <Header />    
        <div className="container-fluid w-75">
            <div className="container mt-2 row mx-auto p-0 ">
                <div className="row invoice-block pt-3">
                    <div className="invoices-page-box col-md-4 total-amount">
                        <BsCashCoin className="icon"/>
                        <h5> Total Amount </h5>
                        <p> $300,000.00</p>
                    </div>
                    <div className="invoices-page-box box col-md-4 total-paid">
                        <GiReceiveMoney className="icon"/>
                        <h5> Total Received </h5>
                        <p> $300,000.00</p>
                    </div>
                    <div className="invoices-page-box col-md-4 total-unpaid">
                        <MdMoneyOff className="icon"/>
                        <h5> Total unpaid </h5>
                        <p> $300,000.00</p>
                    </div>
                </div>
            </div>
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
                <div className="col-md-3 ">
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
                <div className="col-md-3 ">
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
                <div className="col-md-3 ">
                    <label htmlFor="payment-status" className="payment-status"> Payment Status </label> <br/>
                    <div className="d-flex justify-content-start">                        
                        <input 
                            type="checkbox" 
                            name="hasPaid" 
                            checked={ hasPaid }
                            className="mt-1"
                            onChange={ (e)=>filterChange(e) }                 
                            />
                        <label hmtlfor="paid" className="px-2"> Paid </label>
                        </div>
                    </div>
                </div>
                <div className="container mt-2 row mx-auto p-0 ">
                    <div className="row justify-content-start p-0 mt-4">
                    <InvoiceList />
                    </div>
                </div>                
            </div>
    </>
    )
}

export default Invoices;