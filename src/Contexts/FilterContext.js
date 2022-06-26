import { useContext , useState , createContext, useEffect} from 'react'
import { InvoiceContext } from './InvoiceContext'
import axios from "axios"

export const FilterContext = createContext();

export function FilterProvider ( {children} ) {
    const { setuserInvoices ,filterHolder } = useContext(InvoiceContext);

    const jeff = "name"
    
    
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
    }

    useEffect(()=>{
        let newInvoice = [...filterHolder]
        const { search , date , paymentStatus , amount } = filters;

        if (search !== "") {
            newInvoice = newInvoice.filter(item => {
            const { receiver } = item.invoice[0]
              let name = receiver.toLowerCase().trim();
              return name.includes(search) ? item : null;
            });
          }


          if( date == "asc") {      
            newInvoice = newInvoice.sort((a , b) => {
                return Date.parse(a.createdAt) - Date.parse(b.createdAt)
            })      
          }

          if( date == "desc") {
            newInvoice = newInvoice.sort((a , b) => {
                console.log(typeof Date.parse(b.createdAt))
                return Date.parse(b.createdAt) - Date.parse(a.createdAt)
            })      
          }          

          if( amount == "low") {      
            newInvoice = newInvoice.sort((a , b) => {
                return a.invoice[0].subTotal - b.invoice[0].subTotal
            })      
          }

          if( amount == "high") {      
            newInvoice = newInvoice.sort((a , b) => {
                return b.invoice[0].subTotal - a.invoice[0].subTotal
            })      
          }   
          
          if( paymentStatus == "all") {
            newInvoice = newInvoice.filter(item => {
              return item;
            })
          }

          if( paymentStatus == "paid") {
            newInvoice = newInvoice.filter(item => {
              return item.invoice[0].balanceDue <= 0 ;
            })
          }             

          if( paymentStatus == "unpaid") {
            newInvoice = newInvoice.filter(item => {
              return item.invoice[0].balanceDue > 0 
            })

          }   

           
                
        setuserInvoices(newInvoice)
    },[filters])
    
    return (
        <FilterContext.Provider 
        value={{ 
            filters ,
            filterChange,
            filterHolder,
            clearFilter,
              }}>
            { children }
        </FilterContext.Provider>
    )
} 
