import { useContext } from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'
import { InvoiceList } from '../EditComponents/index'
import { Header } from '../EditComponents/index'
import { FilterContext } from '../Editcontexts/FilterContext'
import { InvoiceContext } from '../Editcontexts/InvoiceContext'
import { UserContext } from '../Editcontexts/UserContext'
import { ReactComponent as MySvg }from '../media/no-msg.svg'
import { ReactComponent as Search }from '../media/no-search.svg'


function Filter () {
    const { filters : { search , date , paymentStatus , amount } , filterChange , clearFilter } = useContext(FilterContext);

    console.log(localStorage.getItem("user"))

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


function Invoices () {

    const { userInvoices , totalUserInvoice } = useContext(InvoiceContext);
    console.log(userInvoices)

    let fullyPaid = userInvoices.filter((item)=> item.attributes.invoice.balanceDue <= 0);
    let unPaid = userInvoices.filter((item)=> item.attributes.invoice.balanceDue > 0);

    if(totalUserInvoice.length === 0) {
        return (
            <>
                <Header />    
                <div className="container-fluid w-75">
                    <div className="container mt-2 row mx-auto p-0 ">
                        <div className="row invoice-block pt-3">
                            <div className="invoices-page-box col-md-4 total-amount">
                                <BsCashCoin className="icon"/>
                                <h5> Total Invoice </h5>
                                <p> 0 </p>
                            </div>
                            <div className="invoices-page-box box col-md-4 total-paid">
                                <GiReceiveMoney className="icon"/>
                                <h5> Fully Paid </h5>
                                <p> 0 </p>
                            </div>
                            <div className="invoices-page-box col-md-4 total-unpaid">
                                <MdMoneyOff className="icon"/>
                                <h5> Unpaid </h5>
                                <p> 0 </p>
                            </div>
                        </div>
                    </div>

                    <div className="new-invoice">
                        <div className="pt-5 pb-5">
                        <h3 className="text-center text-secondary mb-5"> No Invoices here </h3>
                        <MySvg/><br/>
                        <button type="button" className="btn btn-danger mt-4 inline"> Create One </button>
                            </div>
                        </div> 
                    </div> 
            </>
        )
    }



    return (
    <>
        <Header />    
        <div className="container-fluid w-75">
            <div className="container mt-2 row mx-auto p-0 ">
                <div className="row invoice-block pt-3">
                    <div className="invoices-page-box col-md-4 total-amount">
                        <BsCashCoin className="icon"/>
                        <h5> Total Invoice </h5>
                        <p> { totalUserInvoice.length } </p>
                    </div>
                    <div className="invoices-page-box box col-md-4 total-paid">
                        <GiReceiveMoney className="icon"/>
                        <h5> Total Paid </h5>
                        <p> { fullyPaid.length }  </p>
                    </div>
                    <div className="invoices-page-box col-md-4 total-unpaid">
                        <MdMoneyOff className="icon"/>
                        <h5> Total unpaid </h5>
                        <p> { unPaid.length }  </p>
                    </div>
                </div>
            </div>
            <Filter/> 
                <div className="container mt-2 row mx-auto p-0 ">
                        <div className="row justify-content-start p-0 mt-2">
                        <InvoiceList /> 
                    </div>
                </div>                
            </div>
            {
            userInvoices.length === 0 ?
            <div className="new-invoice">
                <div className="pt-5 pb-5">
                    <h3 className="text-center mb-4 text-secondary"> Search couldn’t find any notes </h3>
                    <Search/><br/>
                </div>
            </div> 
            : ""
            }
    </>
    )
}

export default Invoices;