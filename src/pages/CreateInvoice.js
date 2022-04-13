import { InvoiceBlock } from '../Components/index';
import { SideBar } from '../Components/index';
import { Header } from '../Components/index'

const CreateInvoice = () => {
    return (
    <>
        <Header />
        <div className="container-fluid main">
            <div className="container mt-3 row mx-auto p-0">
                <div className="col-md-9 invoice-block p-2">
                    <InvoiceBlock />     
                </div>
                <div className="col-md-3 ">
                    <SideBar />
                </div>
            </div>
        </div>
    </>
    )    
}

export default CreateInvoice