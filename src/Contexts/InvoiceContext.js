import { createContext , useContext , useEffect, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { EditInvoiceContext } from './EditInvoiceContext';
import { api } from "../api"

export const InvoiceContext = createContext();

export function InvoiceProvider ( {children} ) {
        const { holder } = useContext(EditInvoiceContext); 
        const Swal = require('sweetalert2')
        const [ loading , setLoading] = useState(false);
        const [ currencyLoading , setCurrencyLoading ] = useState(false) 
        const [ filterHolder , setFilterHolder] = useState([]);
        const [ allCountries , setAllCountries ] = useState([]);
        const [ userInvoices , setuserInvoices] = useState([])
        const [ totalUserInvoice , setTotalUserInvoice ] = useState([]);
        const [ invoices , setInvoices ] = useState([]);
        const user = localStorage.getItem("username")

        const [ inputFields , setInputFields] = useState(
            {   
                invoiceName: "INVOICE", 
                sender : "",
                billTo: "Bill To",
                receiver : "",
                shipTo : "Ship to",
                optional : "",
                date : "Date",
                dateValue : "",
                paymentTerms : "Payment Terms",
                paymentTermsValue : "",
                dueDate : "Due Date", 
                dueDateValue : "",                 
                PNumber : "P.O Number",
                PNumberValue : "",
                name : 'Bansah',
                description: "Description",
                quantity : "Quantity",
                rate : "Rate",
                amount : "Amount",
                notes: "Notes",
                noteValue : "",
                terms : "Terms",
                termsValue : "",
                subTotalValue : "Sub Total",
                subTotal : 0,
                taxValue : "Tax",
                tax : 0,
                taxCal : 'percentage',
                discountValue : "Discount",
                discount: 0,
                discountCal : 'percentage',
                amountPaidValue : "Amount Paid",       
                amountPaid : 0,
                shippingValue: "Shipping",
                shipping : 0,                                          
                total: "Total",
                totalValue : 0,      
                balanceDueValue: "Balance Due",
                balanceDue: 0,       
                currencySign : "₵",
                currencyName: "Ghanaian Cedi",     
                currencyCountry: "Ghana",     
                countryFlag : "🇬🇭 ",
                time: Math.round(Date.now() / 1000),
                fieldDetails :  [{ id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0 }] ,
            }
        )

        function currencyChange (e) {
            setInputFields({...inputFields , countryCurrency: e.target.value});
            handleCurrency (e)
          }        
        
        function getuserInvoicesFilter () {
            setLoading(false)
            axios.get(`${api}/invoices`).then((response)=>{
                setInvoices(response.data)
                setFilterHolder(response.data)

                setTotalUserInvoice(response.data)
                setLoading(true)
            }).catch((error)=>{
                console.log(error)
                setLoading(true)
            })
        }   

        function getuserInvoices () {
            axios.get(`${api}/invoices`).then((response)=>{
                const invoiceAscending = response.data.sort((a, b) => b.invoice[0].time  -  a.invoice[0].time  )       
                setuserInvoices(response.data)
                setFilterHolder(response.data)
                setTotalUserInvoice(response.data)
                setLoading(true)
            }).catch((error)=>{
                setLoading(true)
                console.log(error.response)
            })
        }

        useEffect(()=>{
            getuserInvoices()
        },[ holder ])
        

        function handleCurrency (e) {
            let val = e.target.value;
            axios.get(`https://restcountries.com/v3.1/name/${val}`).then((response)=>{
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
            }).catch((error)=>{ console.log(error)
            })               
        }

        function addNewLineField () {
            setInputFields({...inputFields , fieldDetails : [ ...inputFields['fieldDetails'] , {  id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0  } ]})
        }
    
        function subTotal () {
            let sum = inputFields['fieldDetails'].reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.total
              }, 0)                  
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

        function updateInputs (id , e)  {
            const newInputFields = inputFields['fieldDetails'].map(i => {
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

              let sum = inputFields['fieldDetails'].reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.total
              }, 0)     

              setInputFields({...inputFields , subTotal : sum , fieldDetails : [...newInputFields]   })            
            }
            
        function updateOtherFields (e) {
            setInputFields({...inputFields , [e.target.name] : e.target.value   })            
        }

        function removeInput (id) {
            const newInputFields = inputFields['fieldDetails'].filter((item)=> item.id !== id)      
            setInputFields({...inputFields , fieldDetails : [...newInputFields]   })            
        }

        function selectChange (e) {
            setInputFields({...inputFields , [e.target.name] : e.target.value })            
        }

        useEffect(()=>{
            let subTotal = inputFields['fieldDetails'].reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.total
              }, 0)          

              setInputFields({...inputFields , subTotal  })            
        },[ inputFields.fieldDetails ])
    

        useEffect(()=>{

            let total ;

            if(inputFields.discountCal === "percentage" && inputFields.taxCal === "percentage"){
                total = ((inputFields.subTotal - (inputFields.subTotal * (inputFields.discount / 100))) * (((+inputFields.tax + 100) / 100) ))  + (+inputFields.shipping)
                // total = total.toFixed(2)
            }

            if(inputFields.discountCal === "percentage" && inputFields.taxCal === "fixed"){
                total = ((inputFields.subTotal - (inputFields.subTotal * (inputFields.discount / 100)))) + (+inputFields.tax)  + (+inputFields.shipping)
                // total = total.toFixed(2)            
            }

            if(inputFields.discountCal === "fixed" && inputFields.taxCal === "percentage"){
                total = ((inputFields.subTotal - inputFields.discount) * (((+inputFields.tax + 100) / 100) ))  + (+inputFields.shipping)
                // total = total.toFixed(2)            
            }            

            if(inputFields.discountCal === "fixed" && inputFields.taxCal === "fixed"){
                total = (+inputFields.subTotal) + (+inputFields.discount) + (+inputFields.shipping)
                // total = total.toFixed(2)            
            }                   

            setInputFields({...inputFields , totalValue : total}) 

        },[ inputFields.fieldDetails , inputFields.tax , inputFields.discount , inputFields.shipping , inputFields.taxCal , inputFields.discountCal ])


        useEffect(()=>{
            let total = inputFields.totalValue - inputFields.amountPaid ;

            setInputFields({...inputFields , balanceDue : total})       

        },[ inputFields.totalValue , inputFields.amountPaid ])

        function getCurrency () {
            axios.get(`https://restcountries.com/v3.1/all`).then((response)=>{
                const filterCountry = response.data.sort((a, b) => a.name['common'] > b.name['common'] ? 1 : -1)
                // setLoading(true)
                setAllCountries(filterCountry)
                setCurrencyLoading(true);
            }).catch((error)=>{
                // console.log(error)
            })            
        }

        const submit = async (e) => {
            e.preventDefault();
            if(!inputFields.receiver && !inputFields.dateValue){
                      Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: "'Invoice to' and 'Date' can't be empty",
                            showConfirmButton: false,
                            timer: 2000
                          })  
                          setTimeout(() => {
                              // window.location.href = `http://localhost:3000/${user}/invoices`;                           
                          }, 1500);
            }

            if(inputFields.receiver && inputFields.dateValue ) {
                try {
                  await axios.post(`${api}/invoices`,  { "invoice" : inputFields } );
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Invoice has been Created',
                            showConfirmButton: false,
                            timer: 1000
                          })  
                          setTimeout(() => {
                              window.location.href = `https://smart-invoicings.vercel.app/invoices`;                           
                          }, 1500);

                } catch (err) {
                  console.log(err);
                }                
            }

          }    

        function comingSoon () {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'This feature together with Authentication is coming soon',
                            showConfirmButton: false,
                            timer: 3000
                          })              
        } 
          
        useEffect(()=>{
            getCurrency();
        },[])

    return (
        <InvoiceContext.Provider         
        value={{ 
                inputFields ,  
                addNewLineField,
                updateInputs,
                removeInput,    
                updateOtherFields,
                StartDate,
                DueDate,
                selectChange,
                handleCurrency,
                loading,
                submit,
                allCountries,
                userInvoices,
                filterHolder,
                setuserInvoices,
                totalUserInvoice,
                currencyChange,
                currencyLoading,
                comingSoon
            }}>
            { children }
        </InvoiceContext.Provider>
    )   
}
