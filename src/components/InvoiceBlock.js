import React from 'react';
import { Inputs , Txtarea } from '../props/index'
import InvoiceTable from './InvoiceTable'

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

            <div className="row mt-2">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                type="text"
                                className="input-placeholders-small"
                                value="Bill To"
                            />
                            <Txtarea 
                                placeholder = "Who is this invoice to? (required)"
                                className = "textarea-visible w-100"
                            ></Txtarea>
                        </div>
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small "
                                    value="Ship To"
                                />
                                <Txtarea 
                                    placeholder = "Optional"
                                    className = "textarea-visible w-100"
                                ></Txtarea>                            
                        </div>
                    </div>
                </div>

                <div className="col-md-6 pr-5">
                    <div className="row p-0 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        value="Ship To"
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    value="Ship To"
                                />                            
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        value="Ship To"
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    value="Ship To"
                                />                            
                        </div>
                    </div>


                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        value="Ship To"
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    value="Ship To"
                                />                            
                        </div>
                    </div>


                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        value="Ship To"
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    value="Ship To"
                                />                            
                        </div>
                    </div>                    

                </div>
            </div>            
                    <InvoiceTable />
        </div>
    )
}

export default InvoiceBlock