import { BsFillPencilFill } from 'react-icons/bs'

function InvoiceList () {
    return (
        <div className="row justify-content-between p-0 mt-4">
            <div className="col-md-4 ">
                <div className="col-md-12 invoice-item">
                    <h5> 14 things to work on </h5>
                    <p> Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum. </p>
                    <hr />
                    <div className="invoice-date-edit">
                        <div className="invoice-date">
                            <small>Science and Maths <br/> March 28, 2020</small>
                        </div>
                        <div className="invoice-edit">
                            <BsFillPencilFill />
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default InvoiceList 