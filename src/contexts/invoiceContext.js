import { createContext , useEffect, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const InvoiceContext = createContext();

export function InvoiceProvider ( {children} ) {

        const [inputFields , setInputFields] = useState(
            {   
                invoiceName: "INVOICES", 
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
                fieldDetails :  [{ id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0 }] ,
            }
        )
        
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
                total = ((inputFields.subTotal - (inputFields.subTotal * (inputFields.discount / 100))) + (+inputFields.tax ))  + (+inputFields.shipping)
            }
            setInputFields({...inputFields , totalValue : total })            
            // setInputFields({...inputFields , balanceDue : inputFields.subTotal - inputFields.amountPaid })            
        },[inputFields.fieldDetails , inputFields.tax , inputFields.discount , inputFields.shipping])

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
                selectChange                                           
            }}>
            { children }
        </InvoiceContext.Provider>
    )
}
