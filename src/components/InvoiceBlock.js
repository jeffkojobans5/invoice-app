import React from 'react';
import { Inputs , Txtarea } from '../props/index'

const InvoiceBlock = () => {
    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-md-6">
                    <Txtarea 
                        placeholder = "Who is this invoice from? (required)"
                        className = "textarea-visible"
                    ></Txtarea>
                </div>
                <div className="col-md-6">
                    <Inputs 
                        type = "text"
                        name = ""
                        className="h3 input-placeholders text-end"
                        value = "INVOICE"
                    />
                </div>
            </div>
        </div>
    )
}

export default InvoiceBlock