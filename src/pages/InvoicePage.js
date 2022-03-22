// import { InvoiceBlock } from '../EditComponents/index';
// import { SideBar } from '../EditComponents/index';
import { Header } from '../EditComponents/index'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState , useEffect , useContext} from 'react';
import { InvoiceContext } from '../contexts/InvoiceContext';
import { Inputs , Txtarea } from '../props/index'
// import { InvoiceTable }from '../EditComponents/index'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {  FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const InvoicePage = () => {

    const [inputFields , setInputFields] = useState([])
    const [loading , setLoading] = useState(true)
    function getUserInvoice () {
        axios.get(`http://localhost:1337/api/invoices/${id}`).then((response)=>{
            setInputFields(response.data.data.attributes.invoice)
            setLoading(false)
        }).catch((error)=>{
            console.log(error.response)
        })
    }
    
    // const [inputFields , setInputFields] = useState([findInvoice.attributes.invoice])

    const { id } = useParams();
    const { userInvoice } = useContext(InvoiceContext);
    
    console.log(userInvoice.length)
    const [singleInvoiceLoading , setSingleInvoiceLoading ] = useState(true)
    const [allCountries , setAllCountries ] = useState([]);


    useEffect(()=>{
        getUserInvoice()
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



    function updateInputs (id , e)  {
        const newInputFields = fieldDetails.map(i => {
            if(id === i.id) {
              i[e.target.name] = e.target.value

            //  calculate total for each field
                if(e.target.name === 'quantity' || e.target.name === 'rate') {
                    i.total = (i.rate * i.quantity)                        
                }
            // end
            }
            return i;
          })

          let sum = fieldDetails.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.total
          }, 0)     

          setInputFields({...inputFields , subTotal : sum , fieldDetails : [...newInputFields]   })            
        }

        function addNewLineField () {
            setInputFields({...inputFields , fieldDetails : [ ...fieldDetails , {  id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0  } ]})
        }

        function removeInput (id) {
            const newInputFields = fieldDetails.filter((item)=> item.id !== id)    

            let subTotal = newInputFields.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.total
            }, 0)   

            setInputFields({...inputFields , fieldDetails : [...newInputFields] , subTotal : subTotal  })   
            console.log(subTotal)         
        }        


    function updateOtherFields(e) {        
        setInputFields({...inputFields , [e.target.name] : e.target.value   })    
    }

    function selectChange (e) {
        setInputFields({...inputFields , [e.target.name] : e.target.value })            
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

    const submit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:1337/api/invoices/${id}`, 
                {
                    "data": {
                        // "USERS_PERMISSIONS_USER" : user.username ? user.username : "Default",
                        "invoice" : inputFields
                    }
                }                        
          );
        window.location.href = 'http://localhost:3000/invoices';
        } catch (err) {
          console.log(err);
        }
      }      

      function handleCurrency (e) {
        let val = e.target.value;
        axios.put(`https://restcountries.com/v3.1/name/${val}`).then((response)=>{
            const res = response['data'][0]
            let resCurrency;
            let reSign;
            
            response['data'].map((item , index)=>{
                for (let property in item.currencies) {
                    if (item.currencies.hasOwnProperty(property)) {                        
                        resCurrency = res['currencies'][property]['name']
                        reSign = res['currencies'][property]['symbol']
                    }
                }         
            })           

            setInputFields({...inputFields , countryFlag : res.flag , currencyCountry : res['name']['common'] , currencyName : resCurrency , currencySign : reSign  })
        }).catch((error)=>{
            console.log(error)
        })                 
    }
    

    // useEffect(()=>{
    //     let subTotal = fieldDetails.reduce(function (previousValue, currentValue) {
    //         return previousValue + currentValue.total
    //       }, 0)          

    //       setInputFields({...inputFields , subTotal  })            
    // },[ fieldDetails ])


    useEffect(()=>{
        let total ;

        if(discountCal === "percentage" && taxCal === "percentage"){
            total = ((subTotal - (subTotal * (discount / 100))) * (((+tax + 100) / 100) ))  + (+shipping)
            // total = total.toFixed(2)
        }

        if(discountCal === "percentage" && taxCal === "fixed"){
            total = ((subTotal - (subTotal * (discount / 100)))) + (+shipping) + (+tax)
            // total = total.toFixed(2)            
        }

        if(discountCal === "fixed" && taxCal === "percentage"){
            total = ((subTotal - discount) * (((+tax + 100) / 100) ))  + (+shipping)
            // total = total.toFixed(2)            
        }            

        if(discountCal === "fixed" && taxCal === "fixed"){
            total = (+subTotal) + (+discount) + (+shipping) + (+tax)
            // total = total.toFixed(2)            
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
                <div className="container-fluid w-75">
                <div className="container mt-3 row mx-auto p-0">
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
                            onChange = { (e)=>updateOtherFields(e) }
                        ></Txtarea>
                    </div>
                    <div className="col-md-6">
                        <Inputs 
                            type = "text"
                            name = "invoiceName"
                            className="h3 input-placeholders text-end"
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
                                            className="input-placeholders-small text-end close"
                                            name = "dueDate"
                                            value = { dueDate}
                                            onChange = { (e)=>updateOtherFields(e) }    
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                <DayPickerInput
                                    value={dueDateValue}
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
                                            value = { PNumber}
                                            onChange = { (e)=>updateOtherFields(e) }    
                                        />                            
                            </div>
                            <div className="col-md-5 justify-content-end d-flex"> 
                                    <Inputs
                                        type="text"
                                        className="input-placeholders-small text-end border"
                                        name = "PNumberValue"
                                        value = { PNumberValue}
                                        onChange = { (e)=>updateOtherFields(e) }    
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
                                onChange={(e)=>updateInputs(inputField.id , e)}
                            />
                        </div> 
                        <div className="col-md-2">
                            <Inputs
                                    type="number"                    
                                    name="quantity"
                                    label="quantity"
                                    value={inputField.quantity}
                                    onChange={(e)=>updateInputs(inputField.id , e)}
                            />                
                        </div>
                        <div className="col-md-2">
                            <Inputs
                                        type="number"                    
                                        name="rate"
                                        label="rate"
                                        value={inputField.rate}
                                        onChange={(e)=>updateInputs(inputField.id , e)}
                                />   
                        </div>
                        <div className="col-md-2 ">
                            <Inputs
                                        name="number"
                                        label="total"
                                        className="removeBorder text-end bg-white"
                                        value={inputField.total}
                                        onChange={(e)=>updateInputs(inputField.id , e)}
                                />   
                        </div>
                        <div className="col-md-1 d-flex justify-content-center align-items-center">
                            { inputFields.fieldDetails.length > 1 ?  <FaTrashAlt className="trash" onClick={ (e)=>removeInput(inputField.id) }/> : ""  } 
                        </div>                
                    </div>                  
                
                    )}) }
                    <button type="button" className="btn btn-primary" name="fieldDetails" onClick={ ()=>addNewLineField() }> + Line Item</button>            
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
                                    onChange = { (e)=>updateOtherFields(e) }
                                />
                                <Txtarea 
                                    placeholder = "Notes - any relevant information not already covered"
                                    className = "textarea-visible w-100"
                                    name = "notesValue"
                                    value = { notesValue }
                                    onChange = { (e)=>updateOtherFields(e) }                                
                                ></Txtarea>                       
                                <Inputs
                                    type="text"
                                    className="input-placeholders-small"
                                    name = "terms"
                                    value = { terms}
                                    onChange = { (e)=>updateOtherFields(e) }
                                />
                                <Txtarea 
                                    placeholder = "Terms and conditions - late fees, payment methods, delivery schedule"
                                    className = "textarea-visible w-100"
                                    name = "termsValue"
                                    value = { termsValue}
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
                                        value = { subTotalValue}
                                        onChange = { (e)=>updateOtherFields(e) }
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                    <p className="text-end m-0 me-1"> { currencySign } { subTotal } </p>
                            </div>                                      
                        </div>     

                    {/* DISCOUNT */}
                        <div className="row">
                            <div className="col-md-3">
                                <Inputs
                                        type="text"
                                        className="input-placeholders-small"
                                        name = "discountValue"
                                        value = { discountValue}
                                        onChange = { (e)=>updateOtherFields(e) }
                                    />                            
                            </div>

                            <div className="col-md-3">
                                <select name="discountCal" id="" value={discountCal} onChange={ (e)=> selectChange(e) }>
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
                                        value = { taxValue}
                                        onChange = { (e)=>updateOtherFields(e) }
                                    />                            
                            </div>

                            <div className="col-md-3">
                                <select name="taxCal" id="" value={taxCal} onChange={ (e)=> selectChange(e) }>
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
                                        value = { shippingValue}
                                        onChange = { (e)=>updateOtherFields(e) }
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "shipping"
                                        value = { shipping}
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
                                        value = { total}
                                        onChange = { (e)=>updateOtherFields(e) }
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
                                        onChange = { (e)=>updateOtherFields(e) }
                                    />                            
                            </div>
                            <div className="col-md-6 subtotal">
                                <Inputs
                                        type="number"
                                        className="input-placeholders-small text-end"
                                        name = "amountPaid"
                                        value = { amountPaid}
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
                                        value = { balanceDueValue}
                                        onChange = { (e)=>updateOtherFields(e) }
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
                        <button type="button" className="btn btn-danger w-100" name="" onClick={ submit } > Update </button> <br/><br/>
                        {/* <button type="button" className="btn btn-warning w-100" name=""> Download </button> */}
                        <p> <span className="text-primary">  { inputFields.currencyName } { inputFields.currencySign } { inputFields.countryFlag }   </span></p>        
                        <select name="" id="" className="form-control" onChange={ (e)=>handleCurrency(e) }>
                            { allCountries.map((item , index)=>{
                                for (let property in item.currencies) {
                                if (item.currencies.hasOwnProperty(property)) {                        
                                return (
                                    <option value={item.name['common']} key={ item.flags['png'] } > 
                                        { item.name['common'] } ({ item.currencies[property]['symbol']}) 
                                    </option>
                                        )
                                    }
                                }         
                            }) }
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