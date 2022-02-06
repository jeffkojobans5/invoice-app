import React from 'react';
import { InvoiceBlock } from '../components/index';

const CreateInvoice = () => {
    return (
    <div className="container-fluid w-75">
        <div className="container mt-3 row mx-auto p-0">
            <div className="col-md-9 invoice-block p-2">
                <InvoiceBlock />     
            </div>
            <div className="col-md-3 ">
                <p> heelo </p>
            </div>
        </div>
    </div>
    )    
}

export default CreateInvoice