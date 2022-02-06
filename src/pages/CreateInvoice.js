import React from 'react';
import { InvoiceBlock } from '../components/index';

const CreateInvoice = () => {
    return (
    <div className="container-fluid ">
        <div className="container mt-3 row  mx-auto p-0">
            <div className="col-md-8 ">
                <InvoiceBlock />     
            </div>
            <div className="col-md-4 ">
                <p> heelo </p>
            </div>
        </div>
    </div>
    )    
}

export default CreateInvoice