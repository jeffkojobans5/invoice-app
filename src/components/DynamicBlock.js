import React from 'react'
import {  FaTrashAlt } from 'react-icons/fa';
import Inputs from '../props/Inputs'
import { v4 as uuidv4 } from 'uuid';

function DynamicBlock () {

    const [inputFields , setInputField] = React.useState([
        { 
            fieldDetails : [ { id: uuidv4(), description : '' , quantity : 2 , rate : 2 , total : 4 }  ]
        }
    ])

      
    return (
        <>
        { inputFields.map((inputField , index)=> { 

            return (
            <div className="dynamicTable row " key={inputField.fieldDetails[index]['id']}>
                <div className="col-md-5">
                    <Inputs
                        name="firstName"
                        label="First Name"
                        value={inputField.fieldDetails[index]['description']}
                        // onChange={event => (inputField.id, event)}
                    />
                </div>
                <div className="col-md-2">
                    <Inputs
                            name="firstName"
                            label="First Name"
                            value={inputField.fieldDetails[index]['quantity']}
                            // onChange={event => (inputField.id, event)}
                    />                
                </div>
                <div className="col-md-2">
                    <Inputs
                                name="firstName"
                                label="First Name"
                                value={inputField.fieldDetails[index]['rate']}
                                // onChange={event => (inputField.id, event)}
                        />   
                </div>
                <div className="col-md-2 ">
                    <Inputs
                                name="firstName"
                                label="First Name"
                                value={inputField.fieldDetails[index]['amount']}
                                // onChange={event => (inputField.id, event)}
                        />   
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <FaTrashAlt />
                </div>                
            </div>      
            
            )}) }
        </>
    )
}

export default DynamicBlock;