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
                                placeholder = "Notes - any relevant information not already covered"
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
                                placeholder = "Terms and conditions - late fees, payment methods, delivery schedule"
                                className = "textarea-visible w-100"
                                name = "termsValue"
                                value = { inputFields.termsValue}
                                onChange = { (e)=>updateOtherFields(e) }                                
                            ></Txtarea>                       
                </div>

                <div className="col-md-6 "> 
                {/* SUBTOTAL */}
                    <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "subTotalValue"
                                    value = { inputFields.subTotalValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>
                        <div className="col-md-6 subtotal">
                                <p className="text-end"> $ { inputFields.subTotal } </p>
                        </div>                                      
                    </div>     

                {/* DISCOUNT */}
                    <div className="row">
                        <div className="col-md-3">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "discountValue"
                                    value = { inputFields.discountValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>

                        <div className="col-md-3">
                            <select name="" id="">
                                <option value="">  Per (%) </option>
                                <option value=""> Fixed ($) </option>
                            </select>                        
                        </div>


                        <div className="col-md-6 subtotal">
                                <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end"
                                    name = "discount"
                                    value = { inputFields.discount}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />  
                        </div>                                      
                    </div>   

                    {/* TAX */}
                    <div className="row">
                        <div className="col-md-3">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "taxValue"
                                    value = { inputFields.taxValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>

                        <div className="col-md-3">
                            <select name="" id="">
                                <option value="">  Per (%) </option>
                                <option value=""> Fixed ($) </option>
                            </select>                        
                        </div>


                        <div className="col-md-6 subtotal">
                                <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end"
                                    name = "tax"
                                    value = { inputFields.tax}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />  
                        </div>                                      
                    </div>   

                {/* SHIP */}
                <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "shippingValue"
                                    value = { inputFields.shippingValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>
                        <div className="col-md-6 subtotal">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end"
                                    name = "shipping"
                                    value = { inputFields.shipping}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                                   
                        </div>                                      
                    </div>               
                          

                {/* SHIP */}
                <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "total"
                                    value = { inputFields.total}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>
                        <div className="col-md-6 subtotal">
                            <p className="text-end"> $ { inputFields.totalValue } </p>                                 
                        </div>                                      
                    </div>               
                          

                {/* SHIP */}
                <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "amountPaidValue"
                                    value = { inputFields.amountPaidValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>
                        <div className="col-md-6 subtotal">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small text-end"
                                    name = "amountPaid"
                                    value = { inputFields.amountPaid}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                                   
                        </div>                                      
                    </div>               
                          

                {/* SHIP */}
                <div className="row">
                        <div className="col-md-6">
                            <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "balanceDueValue"
                                    value = { inputFields.balanceDueValue}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />                            
                        </div>
                        <div className="col-md-6 subtotal">
                            <p className="text-end"> $ { inputFields.balanceDue } </p>                          
                        </div>                                      
                    </div>               
                          

                            {/* <p className="text-end "> <span className="badge bg-primary">Total</span>  $ { inputFields.subTotal }</p>
                            <div className="discount">
                                <p className="text-end "> <span className="badge bg-primary">Discount</span>  $ { inputFields.subTotal }</p>
                            </div> */}
                </div>
            </div>
        </div>
    )
}

export default NotesTotal;