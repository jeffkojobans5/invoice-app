import { useState , useEffect , useContext} from 'react';
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

// components
import { Header } from '../EditComponents/index'

// context
import { InvoiceContext } from '../Editcontexts/InvoiceContext';
import { EditInvoiceContext } from '../Editcontexts/EditInvoiceContext';

// props
import { Inputs , Txtarea } from '../props/index'

// media
import {  FaTrashAlt } from 'react-icons/fa';


const InvoicePage = () => {
    // const { userInvoices } = useContext(InvoiceContext);
    const [inputFields , setInputFields] = useState([])
    const [loading , setLoading] = useState(true)
    const { id } = useParams();

    const [allCountries , setAllCountries ] = useState([]);

    useEffect(()=>{
        getUserInvoice(  setInputFields , setLoading , id  )
    },[])
    
    const { 
        user,
        invoiceName,
        sender ,
        billTo ,
        receiver ,
        shipTo ,
        optional ,
        date ,
        dateValue ,
        paymentTerms ,
        paymentTermsValue ,
        dueDate ,
        dueDateValue ,
        PNumber ,
        PNumberValue ,
        name ,
        description ,
        quantity ,
        rate ,
        amount ,
        notes ,
        noteValue ,
        terms ,
        termsValue ,
        subTotalValue ,
        subTotal ,
        taxValue ,
        tax ,
        taxCal ,
        discountValue ,
        discount ,
        discountCal ,
        amountPaidValue ,
        amountPaid ,
        shippingValue ,
        shipping ,
        total ,
        totalValue ,
        balanceDueValue ,
        balanceDue ,
        currencySign ,
        currencyName ,
        currencyCountry ,
        countryFlag ,
        fieldDetails ,
        notesValue,        
    } = inputFields

    const { 
        updateInputs , 
        addNewLineField , 
        removeInput , 
        updateOtherFields , 
        selectChange , 
        StartDate , 
        DueDate , 
        submit ,
        handleCurrency,
        getUserInvoice,
        current
    } = useContext(EditInvoiceContext);


    useEffect(()=>{
        let total ;

        if(discountCal === "percentage" && taxCal === "percentage"){
            total = ((subTotal - (subTotal * (discount / 100))) * (((+tax + 100) / 100) ))  + (+shipping)
        }

        if(discountCal === "percentage" && taxCal === "fixed"){
            total = ((subTotal - (subTotal * (discount / 100)))) + (+shipping) + (+tax)            
        }   

        if(discountCal === "fixed" && taxCal === "percentage"){
            total = ((subTotal - discount) * (((+tax + 100) / 100) ))  + (+shipping)            
        }            

        if(discountCal === "fixed" && taxCal === "fixed"){
            total = (+subTotal) + (+discount) + (+shipping) + (+tax)            
        }                   

        setInputFields({...inputFields , totalValue : total}) 

    },[ fieldDetails , tax , discount , shipping , taxCal , discountCal ])


    useEffect(()=>{
        let total = totalValue - amountPaid ;
        setInputFields({...inputFields , balanceDue : total})       
    },[ totalValue , amountPaid ])          
    

    if(loading) {
        return (
            <h1></h1> 
        )
    }
        return (
                <>
                    <Header/>  
                <div className="container-fluid main">
                <div className="container mt-3 mb-5 row mx-auto p-0">
                    <div className="col-md-9 invoice-block p-2">
                        {/* INVOICE BLOCK START */}
                <div className="container p-2">
                <div className="row">
                    <div className="col-md-6">
                        <Txtarea 
                            name = "sender"
                            placeholder = "Who is this invoice from? (required)"
                            className = "textarea-visible"
                            value = { sender }
                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                        ></Txtarea>
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                            type = "text"
                            name = "invoiceName"
                            className="h3 input-placeholders text-end"
                            value = { invoiceName }
                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
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
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                />
                                <Txtarea 
                                    placeholder = "Who is this invoice to? (required)"
                                    className = "textarea-visible w-100"
                                    name = "receiver"
                                    value = { receiver}
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                
                                ></Txtarea>
                            </div>
                            <div className="col-md-6">
                                <Inputs
                                        type="text"
                                        className="input-placeholders-small "
                                        name = "shipTo"
                                        value = { shipTo}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />
                                    <Txtarea 
                                        placeholder = "Optional"
                                        className = "textarea-visible w-100"
                                        name = "optional"
                                        value = { optional}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                    
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
                                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                          
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                <DayPickerInput
                                    value={dateValue}
                                    onDayChange={(e)=>StartDate(e , setInputFields , inputFields )}
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
                                            value = { paymentTerms}
                                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                          
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end border"
                                        name = "paymentTermsValue"
                                        value = { paymentTermsValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}    
                                    />                            
                            </div>
                        </div>

                        <div className="row p-0 mt-1 justify-content-end d-flex">
                            <div className="col-md-7 justify-content-end d-flex">
                                        <Inputs
                                            type="text"
                                            className="input-placeholders-small text-end close"
                                            name = "dueDate"
                                            value = { dueDate}
                                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}    
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                <DayPickerInput
                                    value={dueDateValue}
                                    onDayChange={(e)=>DueDate(e , setInputFields , inputFields)}
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
                                            value = { PNumber}
                                            onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}    
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end border"
                                        name = "PNumberValue"
                                        value = { PNumberValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}    
                                    />                            
                            </div>
                        </div>                   
                    </div>
                </div>            
                        {/* START OF INVOICE TABLE */}
                        <div className="header invoicing row desc mt-5">
                    <div className="col-md-5">
                        <input 
                            type="text"
                            name="description"
                            className="text-white"
                            value={description}
                            onChange={(e)=>updateOtherFields(e)}                                        
                        />
                    </div>
                    <div className="col-md-2 ">
                        <input 
                            type="text"
                            name="quantity"
                            className="text-white"
                            value={quantity}
                            onChange={(e)=>updateOtherFields(e)}                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <input 
                            type="text"
                            name="rate"
                            className="text-white"
                            value={rate}
                            onChange={(e)=>updateOtherFields(e)}                
                        />
                    </div>
                    <div className="col-md-2 ">
                        <input 
                            type="text"
                            name="amount"
                            className="text-white text-end"
                            value={amount}
                            onChange={(e)=>updateOtherFields(e)}                
                        />
                    </div>
                    <div className="col-md-1">
                        
                    </div>
                </div>

                {/*  START OF DYNAMIC BLOCK */}
                { fieldDetails.map((inputField , i )=> {             
                return (                         
                    <div className="dynamicTable row " key={ inputField.id }>
                        <div className="col-md-5">
                            <Inputs
                                type="text"
                                name="description"
                                label="description"
                                value={ inputField.description}
                                onChange={(e)=>updateInputs(inputField.id , e , fieldDetails , setInputFields , inputFields)}
                            />
                        </div> 
                        <div className="col-md-2">
                            <Inputs
                                    type="number"                    
                                    name="quantity"
                                    label="quantity"
                                    value={inputField.quantity}
                                    onChange={(e)=>updateInputs(inputField.id , e , fieldDetails , setInputFields , inputFields)}
                            />                
                        </div>
                        <div className="col-md-2">
                            <Inputs
                                        type="number"                    
                                        name="rate"
                                        label="rate"
                                        value={inputField.rate}
                                        onChange={(e)=>updateInputs(inputField.id , e , fieldDetails , setInputFields , inputFields)}
                                />   
                        </div>
                        <div className="col-md-2 ">
                            <Inputs
                                        name="number"
                                        label="total"
                                        className="removeBorder text-end bg-white"
                                        value={inputField.total}
                                        onChange={(e)=>updateInputs(inputField.id , e , fieldDetails , setInputFields , inputFields)}
                                />   
                        </div>
                        <div className="col-md-1 d-flex justify-content-center align-items-center">
                            { inputFields.fieldDetails.length > 1 ?  <FaTrashAlt className="trash" onClick={ (e)=>removeInput(inputField.id , fieldDetails , setInputFields , inputFields) }/> : ""  } 
                        </div>                
                    </div>                  
                
                    )}) }
                    <button type="button" className="btn btn-primary" name="fieldDetails" onClick={ ()=>addNewLineField( setInputFields , inputFields , fieldDetails ) }> + Line Item</button>            
                {/*  END OF DYNAMIC BLOCK */}

                {/* START OF NOTES TOTAL */}
                <div className="notes mt-5">
                <div className="row">
                    <div className="col-md-6">
                                <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "notes"
                                    value = { notes}
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                />
                                <Txtarea 
                                    placeholder = "Notes - any relevant information not already covered"
                                    className = "textarea-visible w-100"
                                    name = "notesValue"
                                    value = { notesValue }
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                
                                ></Txtarea>                       
                                <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "terms"
                                    value = { terms}
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                />
                                <Txtarea 
                                    placeholder = "Terms and conditions - late fees, payment methods, delivery schedule"
                                    className = "textarea-visible w-100"
                                    name = "termsValue"
                                    value = { termsValue}
                                    onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}                                
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
                                        value = { subTotalValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                    <p className="text-end m-0 me-1 "> { currencySign } { subTotal } </p>
                            </div>                                      
                        </div>     

                    {/* DISCOUNT */}
                        <div className="row discount">
                            <div className="col-md-3">
                                <Inputs
                                        type="text"
                                        className="input-placeholders-small"
                                        name = "discountValue"
                                        value = { discountValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>

                            <div className="col-md-3">
                                <select name="discountCal" id="" value={discountCal} onChange={ (e)=> selectChange( e , setInputFields , inputFields ) }>
                                    <option value="percentage">  Per (%) </option>
                                    <option value="fixed"> Fixed ({ currencySign }) </option>
                                </select>                        
                            </div>


                            <div className="col-md-6 subtotal">
                                    <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "discount"
                                        value = { discount}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />  
                            </div>                                      
                        </div>   

                        {/* TAX */}
                        <div className="row discount">
                            <div className="col-md-3">
                                <Inputs
                                        type="text"
                                        className="input-placeholders-small"
                                        name = "taxValue"
                                        value = { taxValue}
                                        onChange = { (e)=>updateOtherFields(e , taxValue) }
                                    />                            
                            </div>

                            <div className="col-md-3">
                                <select name="taxCal" id="" value={taxCal} onChange={ (e)=> selectChange(e , setInputFields , inputFields) }>
                                    <option value="percentage">  Per (%) </option>
                                    <option value="fixed"> Fixed ({ currencySign }) </option>
                                </select>                        
                            </div>


                            <div className="col-md-6 subtotal">
                                    <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "tax"
                                        value = { tax}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
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
                                        value = { shippingValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "shipping"
                                        value = { shipping}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
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
                                        value = { total}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <p className="text-end m-0 me-1"> { currencySign } { totalValue } </p>                                 
                            </div>                                      
                        </div>               
                            

                    {/* SHIP */}
                    <div className="row">
                            <div className="col-md-6">
                                <Inputs
                                        type="text"
                                        className="input-placeholders-small"
                                        name = "amountPaidValue"
                                        value = { amountPaidValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "amountPaid"
                                        value = { amountPaid}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
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
                                        value = { balanceDueValue}
                                        onChange = { (e)=> updateOtherFields(e , inputFields , setInputFields)}
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <p className="text-end h6 me-1"> { currencySign } { balanceDue } </p>                          
                            </div>                                      
                        </div>                                       
                    </div>
                </div>
                </div>
                {/* END OF NOTES TOTAL */}            
                {/* END OF INVOICE TABLE */}
                </div>
                        {/* INVOICE BLOCK END */}
                    </div>
                    <div className="col-md-3 ">
                    {/* START OF SIDE BAR */}
                    <div className="sidebar">
                        <button type="button" className="btn btn-danger w-100" name="" onClick={ (e)=>submit( e , inputFields , id) } > Update </button> <br/><br/>
                        <p> <span className="text-primary">  { inputFields.currencyName } { inputFields.currencySign } { inputFields.countryFlag }   </span></p>        
                        <select name="" id="" className="form-control" onChange={ (e)=>handleCurrency(e , setInputFields , inputFields) }>
                            {
                                current.map((item , index)=>{
                                    for (let property in item.currencies) {
                                        if (item.currencies.hasOwnProperty(property)) {                        
                                        return (
                                            <option value={item.name['common']} key={ item.flags['png'] } > 
                                                { item.name['common'] } ({ item.currencies[property]['symbol']}) 
                                            </option>
                                                )
                                            }
                                    } 
                                })
                            }
                        </select>
                    </div>                
                    {/* END OF SIDE BAR */}
                    </div>
                </div>
                </div>                              
                </>  
        )
    }  


export default InvoicePage