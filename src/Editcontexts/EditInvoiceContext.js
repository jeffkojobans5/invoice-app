import { createContext , useContext , useEffect, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { UserContext } from './UserContext';

export const EditInvoiceContext = createContext();

export function EditInvoiceProvider ( {children} ) {

    function updateInputs (id , e , fieldDetails , setInputFields , inputFields)  {
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


    return (
        <EditInvoiceContext.Provider         
        value={{ 
             updateInputs
            }}>
            { children }
        </EditInvoiceContext.Provider>
    )   
}
