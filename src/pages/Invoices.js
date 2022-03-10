import { GiReceiveMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'
import { InvoiceList } from '../components/index'

function Invoices () {
    return (
    <>
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
                    <label htmlfor="search"> Search </label> <br/>
                    <input 
                        type="text"
                        name="search"
                        value="search"                        
                    />
                </div>
                <div className="col-md-3 ">
                    <label htmlfor="date"> Date </label> <br/>
                    <select name="" id="">
                        <option value=""> Ascending Dates</option>
                        <option value=""> Descending Dates</option>
                    </select>
                </div>
                <div className="col-md-3 ">
                    <label htmlfor="amount"> Amount </label> <br/>
                    <select name="" id="">
                        <option value=""> Lowest Amount </option>
                        <option value=""> Highest Amount </option>
                    </select>
                </div>
                <div className="col-md-3 ">
                    <label htmlfor="payment-status" className="payment-status"> Payment Status </label> <br/>
                    <div className="d-flex justify-content-start">                        
                        <input 
                            type="checkbox" 
                            name="payment-status" 
                            value="Bike" 
                            className="mt-1"
                            />
                        <label hmtlfor="paid" className="px-2"> Paid </label>
                        </div>
                    </div>
                </div>
                <div className="container mt-2 row mx-auto p-0 ">
                    <InvoiceList />
                </div>                
            </div>
    </>
    )
}

export default Invoices;