import { GiReceiveMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'

function Invoices () {
    return (
        <div className="container-fluid w-75">
            <div className="container mt-2 row mx-auto p-0">
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
        </div>
    )
}

export default Invoices;