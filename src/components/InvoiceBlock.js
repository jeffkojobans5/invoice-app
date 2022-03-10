import { useContext , useState } from 'react';
import { Inputs , Txtarea } from '../props/index'
import InvoiceTable from './InvoiceTable'
import { InvoiceContext } from "../contexts/InvoiceContext"
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";


const InvoiceBlock = () => {
    const { inputFields , updateOtherFields , StartDate , DueDate } = useContext(InvoiceContext);

    return (
        <div className="container p-2">
          
            <div className="row">
                <div className="col-md-6">
                    <Txtarea 
                        name = "sender"
                        placeholder = "Who is this invoice from? (required)"
                        className = "textarea-visible"
                        value = { inputFields.sender }
                        onChange = { (e)=>updateOtherFields(e) }
                    ></Txtarea>
                </div>
                <div className="col-md-6">
                    <Inputs 
                        type = "text"
                        name = "invoiceName"
                        className="h3 input-placeholders text-end"
                        value = { inputFields.invoiceName}
                        onChange = { (e)=>updateOtherFields(e) }
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
                                name = "billTo"
                                value = { inputFields.billTo}
                                onChange = { (e)=>updateOtherFields(e) }
                            />
                            <Txtarea 
                                placeholder = "Who is this invoice to? (required)"
                                className = "textarea-visible w-100"
                                name = "receiver"
                                value = { inputFields.receiver}
                                onChange = { (e)=>updateOtherFields(e) }                                
                            ></Txtarea>
                        </div>
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small "
                                    name = "shipTo"
                                    value = { inputFields.shipTo}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />
                                <Txtarea 
                                    placeholder = "Optional"
                                    className = "textarea-visible w-100"
                                    name = "optional"
                                    value = { inputFields.optional}
                                    onChange = { (e)=>updateOtherFields(e) }                                    
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
                                        name = "date"
                                        value = { inputFields.date}
                                        onChange = { (e)=>updateOtherFields(e) }                                          
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                            <DayPickerInput
                                value={inputFields.dateValue}
                                onDayChange={(e)=>StartDate(e)}
                                placeholder = ""  
                                                              
                            />                          
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        name = "paymentTerms"
                                        value = { inputFields.paymentTerms}
                                        onChange = { (e)=>updateOtherFields(e) }                                          
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    name = "paymentTermsValue"
                                    value = { inputFields.paymentTermsValue}
                                    onChange = { (e)=>updateOtherFields(e) }    
                                />                            
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        name = "dueDate"
                                        value = { inputFields.dueDate}
                                        onChange = { (e)=>updateOtherFields(e) }    
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                            <DayPickerInput
                                value={inputFields.dueDateValue}
                                onDayChange={(e)=>DueDate(e)}
                                placeholder = ""
                                className="dates"
                            />                                                         
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        name = "PNumber"
                                        value = { inputFields.PNumber}
                                        onChange = { (e)=>updateOtherFields(e) }    
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    name = "PNumberValue"
                                    value = { inputFields.PNumberValue}
                                    onChange = { (e)=>updateOtherFields(e) }    
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