import { createContext , useContext , useEffect, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { UserContext } from './UserContext';

export const EditInvoiceContext = createContext();

export function EditInvoiceProvider ( {children} ) {

    const [ current , setCurrent ] = useState([])

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
        console.log(subTotal)         
      }      

      //  
      function updateOtherFields(e , setInputFields , inputFields) {        
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
    const submit = async (e , inputFields , id) => {
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


    // fetchcurrency
    function fetchCurrency () {
      axios.get('https://restcountries.com/v3.1/all').then((response)=>{
        console.log(response.data);
        let alphabetical = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        setCurrent(alphabetical);
      }).catch((error)=>{
        console.log(error)
      })
    }

    // 
    useEffect(()=>{
        fetchCurrency()
    },[])

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

    // 
    function getUserInvoice ( setInputFields , setLoading , id ) {
      axios.get(`http://localhost:1337/api/invoices/${id}`).then((response)=>{
          setInputFields(response.data.data.attributes.invoice)
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
             current                                                        
            }}>
            { children }
        </EditInvoiceContext.Provider>
    )   
}
