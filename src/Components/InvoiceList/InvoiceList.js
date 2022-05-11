import { useContext } from 'react'
import { InvoiceContext } from '../../Contexts/InvoiceContext'
import { Link } from 'react-router-dom'


function InvoiceList () {
    const { userInvoices } = useContext(InvoiceContext);
    
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
                    <Link to={`/${user}/invoices/${uniqkey}/${id}`}>
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