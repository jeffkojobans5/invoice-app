import { InvoiceBlock } from '../EditComponents/index';
import { SideBar } from '../EditComponents/index';
import { Header } from '../EditComponents/index'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState , useEffect , useContext} from 'react';
import { InvoiceContext } from '../contexts/InvoiceContext';
import { Inputs , Txtarea } from '../props/index'
import { InvoiceTable }from '../EditComponents/index'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {  FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const InvoicePage = () => {
    
    const { id } = useParams();
    const { userInvoice } = useContext(InvoiceContext);
    const findInvoice = [...userInvoice].find(item => item.id === parseInt(id))

    console.log(id);
    // const [inputFields , setInputFields] = useState(findInvoice.attributes.invoice)
    // const [singleInvoiceLoading , setSingleInvoiceLoading ] = useState(true)
    // const [allCountries , setAllCountries ] = useState([]);

    // const { 
    //     user,
    //     invoiceName,
    //     sender ,
    //     billTo ,
    //     receiver ,
    //     shipTo ,
    //     optional ,
    //     date ,
    //     dateValue ,
    //     paymentTerms ,
    //     paymentTermsValue ,
    //     dueDate ,
    //     dueDateValue ,
    //     PNumber ,
    //     PNumberValue ,
    //     name ,
    //     description ,
    //     quantity ,
    //     rate ,
    //     amount ,
    //     notes ,
    //     noteValue ,
    //     terms ,
    //     termsValue ,
    //     subTotalValue ,
    //     subTotal ,
    //     taxValue ,
    //     tax ,
    //     taxCal ,
    //     discountValue ,
    //     discount ,
    //     discountCal ,
    //     amountPaidValue ,
    //     amountPaid ,
    //     shippingValue ,
    //     shipping ,
    //     total ,
    //     totalValue ,
    //     balanceDueValue ,
    //     balanceDue ,
    //     currencySign ,
    //     currencyName ,
    //     currencyCountry ,
    //     countryFlag ,
    //     fieldDetails ,
    //     notesValue,        
    // } = inputFields

    // function updateInputs (id , e)  {
    //     const newInputFields = fieldDetails.map(i => {
    //         if(id === i.id) {
    //           i[e.target.name] = e.target.value

    //         //  calculate total for each field
    //             if(e.target.name === 'quantity' || e.target.name === 'rate') {
    //                 i.total = (i.rate * i.quantity)                        
    //             }
    //         // end
    //         }
    //         return i;
    //       })

    //       let sum = fieldDetails.reduce(function (previousValue, currentValue) {
    //         return previousValue + currentValue.total
    //       }, 0)     

    //       setInputFields({...inputFields , subTotal : sum , fieldDetails : [...newInputFields]   })            
    //     }

    //     function addNewLineField () {
    //         setInputFields({...inputFields , fieldDetails : [ ...fieldDetails , {  id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0  } ]})
    //     }

    //     function removeInput (id) {
    //         const newInputFields = fieldDetails.filter((item)=> item.id !== id)      
    //         setInputFields({...inputFields , fieldDetails : [...newInputFields]   })            
    //     }        

    // function updateOtherFields(e) {        
    //     setInputFields({...inputFields , [e.target.name] : e.target.value   })    
    // }

    // function selectChange (e) {
    //     setInputFields({...inputFields , [e.target.name] : e.target.value })            
    // }    

    // function StartDate (e) {
    //     let set = e.toString()
    //     let dueDate = set.slice(3,10) + "," + set.slice(10,15)
    //     setInputFields({...inputFields , dateValue : dueDate})            
    // }

    // function DueDate (e) {
    //     let set = e.toString()
    //     let dueDate = set.slice(3,10) + "," + set.slice(10,15)
    //     setInputFields({...inputFields , dueDateValue : dueDate})            
    // }  

    // const submit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await axios.put(`http://localhost:1337/api/invoices/${id}`, 
    //             {
    //                 "data": {
    //                     // "USERS_PERMISSIONS_USER" : user.username ? user.username : "Default",
    //                     "invoice" : inputFields
    //                 }
    //             }                        
    //       );
    //     window.location.href = 'http://localhost:3000/invoices';
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }      

    //   function handleCurrency (e) {
    //     let val = e.target.value;
    //     axios.put(`https://restcountries.com/v3.1/name/${val}`).then((response)=>{
    //         const res = response['data'][0]
    //         let resCurrency;
    //         let reSign;
            
    //         response['data'].map((item , index)=>{
    //             for (let property in item.currencies) {
    //                 if (item.currencies.hasOwnProperty(property)) {                        
    //                     resCurrency = res['currencies'][property]['name']
    //                     reSign = res['currencies'][property]['symbol']
    //                 }
    //             }         
    //         })           

    //         setInputFields({...inputFields , countryFlag : res.flag , currencyCountry : res['name']['common'] , currencyName : resCurrency , currencySign : reSign  })
    //     }).catch((error)=>{
    //         console.log(error)
    //     })                 
    // }
    

    // useEffect(()=>{
    //     let subTotal = fieldDetails.reduce(function (previousValue, currentValue) {
    //         return previousValue + currentValue.total
    //       }, 0)          

    //       setInputFields({...inputFields , subTotal  })            
    // },[ fieldDetails ])


    // useEffect(()=>{
    //     let total ;

    //     if(discountCal === "percentage" && taxCal === "percentage"){
    //         total = ((subTotal - (subTotal * (discount / 100))) * (((+tax + 100) / 100) ))  + (+shipping)
    //         // total = total.toFixed(2)
    //     }

    //     if(discountCal === "percentage" && taxCal === "fixed"){
    //         total = ((subTotal - (subTotal * (discount / 100)))) + (+tax)  + (+shipping)
    //         // total = total.toFixed(2)            
    //     }

    //     if(discountCal === "fixed" && taxCal === "percentage"){
    //         total = ((subTotal - discount) * (((+tax + 100) / 100) ))  + (+shipping)
    //         // total = total.toFixed(2)            
    //     }            

    //     if(discountCal === "fixed" && taxCal === "fixed"){
    //         total = (+subTotal) + (+discount) + (+shipping)
    //         // total = total.toFixed(2)            
    //     }                   

    //     setInputFields({...inputFields , totalValue : total}) 

    // },[ fieldDetails , tax , discount , shipping , taxCal , discountCal ])


    // useEffect(()=>{
    //     let total = totalValue - amountPaid ;
    //     setInputFields({...inputFields , balanceDue : total})       
    // },[ totalValue , amountPaid ])          
    

    return (
    <>
        <Header/>

    </>    
    )    
}

export default InvoicePage