import React, { useEffect } from 'react'
import {  FaTrashAlt } from 'react-icons/fa';
import Inputs from '../props/Inputs'
import { v4 as uuidv4 } from 'uuid';

function DynamicBlock () {

    const [inputFields , setInputFields] = React.useState(
        {   
            invoiceName: "INVOICE", 
            sender : "",
            billTo: "Bill To",
            receiver : "",
            shipTo : "",
            optional : "",
            date : "Date",
            dateValue : new Date(),
            paymentTerms : "Payment Terms",
            dueDate : new Date(), 
            PNumber : "P.O Number",
            name : 'Bansah',
            description: "Description",
            quantity : "Quantity",
            rate : "Rate",
            amount : "Amount",
            notes: "Notes",
            noteValue : "",
            terms : "Terms",
            termsValue : "",
            fieldDetails :  [{ id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0 }] ,
        }
    )
    
    function doThis () {
        setInputFields({...inputFields , fieldDetails : [ ...inputFields['fieldDetails'] , {  id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0  } ]})
    }

    function updateInputs (id , e)  {
        e.preventDefault();
        const newInputFields = inputFields['fieldDetails'].map(i => {
            if(id === i.id) {
              i[e.target.name] = e.target.value

                if(e.target.name === 'quantity' || e.target.name === 'rate') {
                    i.total = (i.rate * i.quantity) / 100
                }
            }
            return i;
          })
          setInputFields({...inputFields , fieldDetails : [...newInputFields]   })            
        }

    function removeInput (id) {
        const newInputFields = inputFields['fieldDetails'].filter((item)=> item.id !== id)      
        setInputFields({...inputFields , fieldDetails : [...newInputFields]   })            
    }

    useEffect(()=> {
        
    },[])

    return (
        <>
         { inputFields['fieldDetails'].map((inputField , i )=> { 
            
        return (
        <>                
            <div className="dynamicTable row " key={ i }>
                <div className="col-md-5">
                    <Inputs
                        type="text"
                        name="description"
                        label="description"
                        value={inputField['description']}
                        onChange={(e)=>updateInputs(inputField.id , e)}
                    />
                </div> 
                <div className="col-md-2">
                    <Inputs
                            type="number"                    
                            name="quantity"
                            label="quantity"
                            value={inputField['quantity']}
                            onChange={(e)=>updateInputs(inputField.id , e)}
                    />                
                </div>
                <div className="col-md-2">
                    <Inputs
                                type="number"                    
                                name="rate"
                                label="rate"
                                value={inputField['rate']}
                                onChange={(e)=>updateInputs(inputField.id , e)}
                        />   
                </div>
                <div className="col-md-2 ">
                    <Inputs
                                name="number"
                                label="total"
                                value={inputField['total']}
                                onChange={(e)=>updateInputs(inputField.id , e)}
                        />   
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    { inputFields.fieldDetails.length > 1 ?  <FaTrashAlt className="trash" onClick={ (e)=>removeInput(inputField.id) }/> : ""  } 
                </div>                
            </div>                  
            </>            
            )}) }
            <button type="button" className="btn btn-primary" name="fieldDetails" onClick={ ()=>doThis() }> + Line Item</button>
        </>
    )
}

export default DynamicBlock;