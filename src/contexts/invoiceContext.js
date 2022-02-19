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
                dateValue : new Date(),
                paymentTerms : "Payment Terms",
                paymentTermsValue : "",
                dueDate : "Due Date", 
                dueDateValue : new Date (),                 
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
                subTotal : 0,
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

        useEffect(()=>{
            let subTotal = inputFields['fieldDetails'].reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.total
              }, 0)          

              setInputFields({...inputFields , subTotal  })            

        },[ inputFields.fieldDetails ])
    

    return (
        <InvoiceContext.Provider 
        
        value={{ 
            inputFields ,  
            addNewLineField,
            updateInputs,
            removeInput,    
            updateOtherFields                    
            }}>
            { children }
        </InvoiceContext.Provider>
    )
}
