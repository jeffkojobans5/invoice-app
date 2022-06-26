import { createContext , useContext , useEffect, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { UserContext } from './UserContext';
import Swal from 'sweetalert2'
import { api } from "../api"
// import { InvoiceContext } from './InvoiceContext';

export const EditInvoiceContext = createContext();

export function EditInvoiceProvider ( {children} ) {
  let user = localStorage.getItem("username")

  const Swal = require('sweetalert2')

    const [ current , setCurrent ] = useState([])
    const [ holder , setHolder ] = useState(1)

    function updateInputs (id , e , fieldDetails , setInputFields , inputFields)  {
        const newInputFields = fieldDetails.map(i => {
            if(id === i.id) {
              i[e.target.name] = e.target.value
                if(e.target.name === 'quantity' || e.target.name === 'rate') {
                    i.total = (i.rate * i.quantity)                        
                }
            }
            return i;
          })

          let sum = fieldDetails.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.total
          }, 0)     

          setInputFields({...inputFields , subTotal : sum , fieldDetails : [...newInputFields]   })            
        }

        // 
        function addNewLineField ( setInputFields , inputFields , fieldDetails ) {
          setInputFields({...inputFields , fieldDetails : [ ...fieldDetails , {  id: uuidv4(), description : '' , quantity : 1 , rate : 0 , total : 0  } ]})
        }

      // 
      function removeInput (id , fieldDetails , setInputFields , inputFields) {
        const newInputFields = fieldDetails.filter((item)=> item.id !== id)    

        let subTotal = newInputFields.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.total
        }, 0)   

        setInputFields({...inputFields , fieldDetails : [...newInputFields] , subTotal : subTotal  })   
      }      

      //  
      function updateOtherFields(e , inputFields , setInputFields) {        
        setInputFields({...inputFields , [e.target.name] : e.target.value   })    
      }

    // 
    function selectChange (e , setInputFields , inputFields) {
      setInputFields({...inputFields , [e.target.name] : e.target.value })            
    }   

    // 
    function StartDate (e , setInputFields , inputFields) {
      let set = e.toString()
      let dueDate = set.slice(3,10) + "," + set.slice(10,15)
      setInputFields({...inputFields , dateValue : dueDate})            
    }

  // 
    function DueDate (e , setInputFields , inputFields) {
        let set = e.toString()
        let dueDate = set.slice(3,10) + "," + set.slice(10,15)
        setInputFields({...inputFields , dueDateValue : dueDate})            
    }  

    // 
    const submit = async (e , inputFields , id , uniqkey ) => {
      e.preventDefault();
      setHolder(holder + 1)
      


          try {
            await axios.put(`${api}/invoices/${id}` , { "invoice" : inputFields } );
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Invoice updated successfully',
              showConfirmButton: false,
              timer: 1500
            })        

          } catch (err) {
            console.log(err);
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

    function deleteInvoice  ( uniqkey , id) {
      Swal.fire({
        title: 'Are you sure?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
            axios.delete(`${api}/invoices/${id}`);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deleted Successfully',
                showConfirmButton: false,
                timer: 1500
              })    

            setTimeout(() => {
              window.location.href = `http://localhost:3000/invoices`
            }, 1500);

        } else if (result.isDenied) {
          Swal.fire('Invoice not deleted', '', 'info')
        }
      })
    }



    function currencyChange (e , setInputFields , inputFields) {
      setInputFields({...inputFields , countryCurrency: e.target.value});
      handleCurrency (e , setInputFields , inputFields )
    }

    function handleCurrency (e , setInputFields , inputFields ) {
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
      }).catch((error)=>{
          console.log(error)
      })                 
    }    

    const [loading , setLoading] = useState(true)

    function getUserInvoice ( setInputFields , id , uniqkey , user ) {
      axios.get(`${api}/invoices/find/${id}`).then((response)=>{
          console.log(response)
          setInputFields(response.data.invoice[0])
          setLoading(false)
      }).catch((error)=>{
          console.log(error.response)
      })
    }    


    return (
        <EditInvoiceContext.Provider         
        value={{ 
             updateInputs,
             addNewLineField  ,
             removeInput ,
             updateOtherFields ,
             selectChange ,
             StartDate ,
             DueDate,
             submit,
             handleCurrency,
             getUserInvoice,
             current,
             holder,
             currencyChange,
             loading,
             deleteInvoice ,
             comingSoon                                                                    
            }}>
            { children }
        </EditInvoiceContext.Provider>
    )   
}
