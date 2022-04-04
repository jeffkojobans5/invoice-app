import axios from 'axios'
import { useContext , useState , createContext, useEffect} from 'react'
import { InvoiceContext } from './InvoiceContext'

export const FilterContext = createContext();

export function FilterProvider ( {children} ) {
    const { userInvoices , setuserInvoices ,filterHolder } = useContext(InvoiceContext);
    const [ filters , setFilters] = useState({
        search : "",
        date : "asc",
        amount : "low",
        paymentStatus: "all"
    });
    
    function clearFilter(){
      setFilters({
        search : "",
        date : "asc",
        amount : "low",
        paymentStatus : "all"
      })
    }

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

        if(filter == "paymentStatus") {
          filterValue = value;
          setFilters({...filters , [filter] : filterValue})            
        }    
        
        // console.log( userInvoices )
    }

    useEffect(()=>{
        let newInvoice = [...filterHolder]
        const { search , date , paymentStatus , amount } = filters;

        if (search !== "") {
            newInvoice = newInvoice.filter(item => {
            const { receiver } = item.attributes.invoice
              let name = receiver.toLowerCase().trim();
              return name.includes(search) ? item : null;
            });
          }

          if( date == "asc") {
              newInvoice = newInvoice.sort((a , b) => {
                return a.id - b.id
            })              
          }

          if( date == "desc") {
            newInvoice = newInvoice.sort((a , b) => {
              return b.id - a.id
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
          
          if( paymentStatus == "all") {
            newInvoice = newInvoice.filter(item => {
              return item;
            })
          }

          if( paymentStatus == "paid") {
            newInvoice = newInvoice.filter(item => {
              return item.attributes.invoice.balanceDue <= 0 ;
            })
          }             

          if( paymentStatus == "unpaid") {
            newInvoice = newInvoice.filter(item => {
              return item.attributes.invoice.balanceDue > 0 
            })
          }    
                
        console.log(newInvoice)
        setuserInvoices(newInvoice)
    },[filters])
    
    return (
        <FilterContext.Provider 
        value={{ 
            filters ,
            filterChange,
            filterHolder,
            clearFilter            
              }}>
            { children }
        </FilterContext.Provider>
    )
} 
