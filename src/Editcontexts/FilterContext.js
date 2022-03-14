import axios from 'axios'
import { useContext , useState , createContext, useEffect} from 'react'
import { InvoiceContext } from '../contexts/InvoiceContext'

export const FilterContext = createContext();

export function FilterProvider ( {children} ) {
    const { userInvoice , setUserInvoice ,filterHolder } = useContext(InvoiceContext);
    const [ filters , setFilters] = useState({
        search : "",
        date : "asc",
        amount : "low",
        hasPaid: false
    });
 
    function filterChange (e) {
        const filter = e.target.name
        const value = e.target.value        
        let filterValue;

        if(filter == "search"){
            filterValue = value;
            setFilters({...filters , [filter] : filterValue})
        }   
        if(filter == "date"){
            filterValue = value;
            setFilters({...filters , [filter] : filterValue})
        }   
        if(filter == "amount"){
            filterValue = value;
            setFilters({...filters , [filter] : filterValue})
        }   
        if( filter === "hasPaid" ) {
            filterValue = e.target.checked;
            setFilters({ ...filters, [filter]: filterValue });
        }

        console.log( userInvoice )
    }

    useEffect(()=>{
        let newInvoice = [...filterHolder]
        const { search , date , hasPaid , amount } = filters;

        if (search !== "") {
            newInvoice = newInvoice.filter(item => {
            const { receiver } = item.attributes.invoice
              let name = receiver.toLowerCase().trim();
              return name.includes(search) ? item : null;
            });
          }

          if( date == "asc") {
              newInvoice = newInvoice.sort(( a , b) => {                  
                return a.attributes.publishedAt - b.attributes.publishedAt
              })
          }

          if( date == "desc") {
            newInvoice = newInvoice.sort(( a , b) => {                  
              return b.attributes.publishedAt - a.attributes.publishedAt
            })
        }          

          if( amount == "low") {      
            newInvoice = newInvoice.sort((a , b) => {
                return a.attributes.invoice.subTotal - b.attributes.invoice.subTotal
            })      
          }

          if( amount == "high") {      
            newInvoice = newInvoice.sort((a , b) => {
                return b.attributes.invoice.subTotal - a.attributes.invoice.subTotal
            })      
          }         
          
          if( hasPaid == true) {      
            newInvoice = newInvoice.filter(item => {
                const { totalValue , amountPaid } = item.attributes.invoice
                  return totalValue != amountPaid
                });  
          }    

        setUserInvoice(newInvoice)
    },[filters])
    
    return (
        <FilterContext.Provider 
        value={ { 
            filters ,
            filterChange,
            filterHolder
            
            
            
            } }>
            { children }
        </FilterContext.Provider>
    )
} 
