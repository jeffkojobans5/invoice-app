import { useState , useContext } from 'react';
import { Inputs , Txtarea } from '../props/index'
import InvoiceTable from './InvoiceTable'
import { InvoiceContext } from "../contexts/InvoiceContext"

function NotesTotal () {

    const { inputFields , updateOtherFields , selectChange  } = useContext(InvoiceContext);

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

                <div className="col-md-6 subs"> 
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
                                <p className="text-end m-0 me-1"> { inputFields.currencySign } { inputFields.subTotal } </p>
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
                            <select name="discountCal" id="" value={inputFields.discountCal} onChange={ (e)=> selectChange(e) }>
                                <option value="percentage">  Per (%) </option>
                                <option value="fixed"> Fixed ({ inputFields.currencySign }) </option>
                            </select>                        
                        </div>


                        <div className="col-md-6 subtotal">
                                <Inputs
                                    type="number"
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
                            <select name="taxCal" id="" value={inputFields.taxCal} onChange={ (e)=> selectChange(e) }>
                                <option value="percentage">  Per (%) </option>
                                <option value="fixed"> Fixed ({ inputFields.currencySign }) </option>
                            </select>                        
                        </div>


                        <div className="col-md-6 subtotal">
                                <Inputs
                                    type="number"
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
                                    type="number"
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
                            <p className="text-end m-0 me-1"> { inputFields.currencySign } { inputFields.totalValue } </p>                                 
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
                                    type="number"
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
                            <p className="text-end h6 me-1"> { inputFields.currencySign } { inputFields.balanceDue } </p>                          
                        </div>                                      
                    </div>                                       
                            {/* <p className="text-end "> <span className="badge bg-primary">Total</span>  { inputFields.currencySign } { inputFields.subTotal }</p>
                            <div className="discount">
                                <p className="text-end "> <span className="badge bg-primary">Discount</span>  { inputFields.currencySign } { inputFields.subTotal }</p>
                            </div> */}
                </div>
            </div>
        </div>
    )
}

export default NotesTotal;