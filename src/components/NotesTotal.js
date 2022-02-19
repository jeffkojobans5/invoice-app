import { useState , useContext } from 'react';
import { Inputs , Txtarea } from '../props/index'
import InvoiceTable from './InvoiceTable'
import { InvoiceContext } from "../contexts/InvoiceContext"

function NotesTotal () {

    const { inputFields , updateOtherFields  } = useContext(InvoiceContext);

    return (
        <div className="notes mt-5">
            <div className="row">
                <div className="col-md-6">
                            <Inputs
                                type="text"
                                className="input-placeholders-small"
                                name = "notes"
                                value = { inputFields.notes}
                                onChange = { (e)=>updateOtherFields(e) }
                            />
                            <Txtarea 
                                placeholder = "Who is this invoice to? (required)"
                                className = "textarea-visible w-100"
                                name = "notesValue"
                                value = { inputFields.notesValue}
                                onChange = { (e)=>updateOtherFields(e) }                                
                            ></Txtarea>                       
                            <Inputs
                                type="text"
                                className="input-placeholders-small"
                                name = "terms"
                                value = { inputFields.terms}
                                onChange = { (e)=>updateOtherFields(e) }
                            />
                            <Txtarea 
                                placeholder = "Who is this invoice to? (required)"
                                className = "textarea-visible w-100"
                                name = "termsValue"
                                value = { inputFields.termsValue}
                                onChange = { (e)=>updateOtherFields(e) }                                
                            ></Txtarea>                       
                </div>

                <div className="col-md-6  subtotal"> 
                            <p className="text-end "> <span class="badge bg-secondary">Total</span>  $ { inputFields.subTotal }</p>
                </div>
            </div>
        </div>
    )
}

export default NotesTotal;