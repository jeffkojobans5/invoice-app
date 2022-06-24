import { useContext , useEffect , useState } from 'react'
import  axios  from "axios"
// react router
import { Link } from "react-router-dom";

// media
import { GiReceiveMoney } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs'
import { MdMoneyOff } from 'react-icons/md'
import { ReactComponent as MySvg }from '../media/no-msg.svg'
import { ReactComponent as Search }from '../media/no-search.svg'

// components
import { InvoiceList , Header , Filter } from '../Components/index'

// contexts
import { InvoiceContext } from '../Contexts/InvoiceContext'


function Invoices () {
        const { userInvoices } = useContext(InvoiceContext);

        const [ invoices , setInvoices ] = useState([])
        const [ loading , setLoading ] = useState(true)
        const [ totalUserInvoice , setTotalUserInvoice ] = useState([]);

        function getuserInvoices () {
            setLoading(false)
            axios.get(`http://localhost:1337/api/invoices`).then((response)=>{
                // setInvoices(response.data.data)
                setTotalUserInvoice(response.data.data)
                setLoading(true)
            }).catch((error)=>{
                console.log(error)
                setLoading(true)

            })
        }    


        useEffect(()=>{
            getuserInvoices()
        },[])


    let fullyPaid = totalUserInvoice.filter((item)=> item.attributes.invoice.balanceDue <= 0);
    let unPaid = totalUserInvoice.filter((item)=> item.attributes.invoice.balanceDue > 0);




    if(!loading) {
        return (
            <p> </p>
        )
    }





    if(totalUserInvoice.length === 0) {
        let user = localStorage.getItem("username")

        return (
            <>
                <Header />    
                <div className="container-fluid main">
                    <div className="container mt-2 row mx-auto p-0 ">
                        <div className="row invoice-block pt-3">
                            <div className="invoices-page-box col-md-4 total-amount">
                                <BsCashCoin className="icon"/>
                                <h5> Total Invoice </h5>
                                <p> { userInvoices.length } </p>
                            </div>
                            <div className="invoices-page-box box col-md-4 total-paid">
                                <GiReceiveMoney className="icon"/>
                                <h5> Fully Paid </h5>
                                <p> { fullyPaid.length } </p>
                            </div>
                            <div className="invoices-page-box col-md-4 total-unpaid">
                                <MdMoneyOff className="icon"/>
                                <h5> Unpaid </h5>
                                <p> { unPaid.length } </p>
                            </div>
                        </div>
                    </div>

                    <div className="new-invoice">
                        <div className="pt-5 pb-5">
                        <h3 className="text-center text-secondary mb-5 display-6"> No Invoices yet ?</h3>
                        <MySvg/><br/>
                        <Link to= { `/new` }  className="create-one"> <button type="button" className="btn btn-danger mt-4 inline text-white">    Create One </button>  </Link>
                            </div>
                        </div> 
                    </div> 
            </>
        )
    }



    return (
    <>
        <Header />    
        <div className="container-fluid main">
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