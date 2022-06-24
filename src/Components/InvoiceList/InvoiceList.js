import { useContext , useState , useEffect } from 'react'
import { InvoiceContext } from '../../Contexts/InvoiceContext'
import { Link } from 'react-router-dom'
import axios from "axios"

function InvoiceList () {
    const { userInvoices } = useContext(InvoiceContext);
    
        const [ invoices , setInvoices ] = useState([])
        const [ loading , setLoading ] = useState(true)
        const [ totalUserInvoice , setTotalUserInvoice ] = useState([]);

        function getuserInvoices () {
            setLoading(false)
            axios.get(`http://localhost:1337/api/invoices`).then((response)=>{
                setInvoices(response.data.data)
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

    return (
        <>
        { userInvoices.map((item , index)=>{
            const { dateValue , receiver , currencySign , subTotal} = item.attributes.invoice
            const { uniqkey } = item.attributes
            let { id } = item
            id = String(id)
            let user = localStorage.getItem("username")

            return (
                <div className="col-md-4 mt-4 invoice-list" key={ index }>
                    <Link to={`/invoice/${id}`}>
                        <div className="col-md-12 invoice-item">
                            <h5 className="invoice-list-receiver">  { receiver }   </h5>
                            <p> Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum. </p>
                            <hr />
                            <div className="invoice-date-edit">
                                <div className="invoice-date">
                                    <small> { currencySign } { subTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}  <br/> { dateValue } </small>
                                </div>
                                <div className="invoice-edit">
                                </div>
                            </div>
                        </div>
                    </Link>                    
                </div>
            )
        })}
        </>
    )
}

export default InvoiceList 