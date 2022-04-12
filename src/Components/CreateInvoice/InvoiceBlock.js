import { useContext , useState } from 'react';
import { Inputs , Txtarea } from '../../props/index'
import InvoiceTable from './InvoiceTable'
import { InvoiceContext } from "../../Contexts/InvoiceContext"
import DayPickerInput from "react-day-picker/DayPickerInput";
import { useParams } from 'react-router-dom'
import "react-day-picker/lib/style.css";


const InvoiceBlock = ( props ) => {
    const { userInvoice } = useContext(InvoiceContext);
    const { id } = useParams();
    const findInvoice = [...userInvoice].find(item => item.id === parseInt(id))
    const [inputFields , setInputFields] = useState(findInvoice.attributes.invoice)

    function updateOtherFields(e) {        
        setInputFields({...inputFields , [e.target.name] : e.target.value   })    
    }

    function StartDate (e) {
        let set = e.toString()
        let dueDate = set.slice(3,10) + "," + set.slice(10,15)
        setInputFields({...inputFields , dateValue : dueDate})            
    }

    function DueDate (e) {
        let set = e.toString()
        let dueDate = set.slice(3,10) + "," + set.slice(10,15)
        setInputFields({...inputFields , dueDateValue : dueDate})            
    }  

    const { sender , 
            invoiceName , 
            billTo , 
            receiver , 
            shipTo , 
            optional , 
            date , 
            dueDate , 
            dateValue,            
            dueDateValue , 
            PNumber , 
            PNumberValue , 
            paymentTerms , 
            paymentTermsValue  
        } = inputFields

    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-md-6">
                    <Txtarea 
                        name = "sender"
                        placeholder = "Who is this invoice from? (required)"
                        className = "textarea-visible"
                        value = { sender }
                        onChange = { (e)=>updateOtherFields(e) }
                    ></Txtarea>
                </div>
                <div className="col-md-6">
                    <Inputs 
                        type = "text"
                        name = "invoiceName"
                        className="h3 input-placeholders text-end invoice-name"
                        value = { invoiceName }
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
                                value = { billTo}
                                onChange = { (e)=>updateOtherFields(e) }
                            />
                            <Txtarea 
                                placeholder = "Who is this invoice to? (required)"
                                className = "textarea-visible w-100"
                                name = "receiver"
                                value = { receiver}
                                onChange = { (e)=>updateOtherFields(e) }                                
                            ></Txtarea>
                        </div>
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small "
                                    name = "shipTo"
                                    value = { shipTo}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />
                                <Txtarea 
                                    placeholder = "Optional"
                                    className = "textarea-visible w-100"
                                    name = "optional"
                                    value = { optional}
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
                                        value = { date}
                                        onChange = { (e)=>updateOtherFields(e) }                                          
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                            <DayPickerInput
                                value={dateValue}
                                onDayChange={(e)=>StartDate(e)}
                                placeholder = ""  
                                styles={{
                                    caption: { color: 'red' }
                                }}                                                           
                            />                          
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close"
                                        name = "paymentTerms"
                                        value = { paymentTerms}
                                        onChange = { (e)=>updateOtherFields(e) }                                          
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border"
                                    name = "paymentTermsValue"
                                    value = { paymentTermsValue}
                                    onChange = { (e)=>updateOtherFields(e) }    
                                />                            
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close "
                                        name = "dueDate"
                                        value = { dueDate}
                                        onChange = { (e)=>updateOtherFields(e) }    
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex data"> 
                            <DayPickerInput
                                value={dueDateValue}
                                onDayChange={(e)=>DueDate(e)}
                                placeholder = ""
                                className=""
                            />                                                         
                        </div>
                    </div>

                    <div className="row p-0 mt-1 justify-content-end d-flex">
                        <div className="col-md-7 justify-content-end d-flex">
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end close "
                                        name = "PNumber"
                                        value = { PNumber}
                                        onChange = { (e)=>updateOtherFields(e) }    
                                    />                            
                        </div>
                        <div className="col-md-5 justify-content-end d-flex payment"> 
                                 <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end border "
                                    name = "PNumberValue"
                                    value = { PNumberValue }
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