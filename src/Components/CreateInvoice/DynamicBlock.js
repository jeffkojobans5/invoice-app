import React, { useEffect , useContext } from 'react'
import {  FaTrashAlt } from 'react-icons/fa';
import Inputs from '../../props/Inputs'
import { InvoiceContext } from "../../Contexts/InvoiceContext"

function DynamicBlock () {
    const { inputFields , addNewLineField , updateInputs , removeInput } = useContext(InvoiceContext);
    

    return (
        <>
         { inputFields['fieldDetails'].map((inputField , i )=> { 
            
        return (
                     
            <div className="dynamicTable row " key={ inputField.id }>
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
                                className="removeBorder text-end bg-white"
                                value={inputField['total'].toLocaleString('en-US', {minimumFractionDigits: 2})}
                                onChange={(e)=>updateInputs(inputField.id , e)}
                        />   
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    { inputFields.fieldDetails.length > 1 ?  <FaTrashAlt className="trash" onClick={ (e)=>removeInput(inputField.id) }/> : ""  } 
                </div>                
            </div>                  
           
            )}) }
            <button type="button" className="btn btn-primary" name="fieldDetails" onClick={ ()=>addNewLineField() }> + Line Item</button>
        </>
    )
}

export default DynamicBlock;