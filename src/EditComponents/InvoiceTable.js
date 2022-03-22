import { useContext } from 'react';
import DynamicBlock from './DynamicBlock';
import NotesTotal from './NotesTotal';
import { InvoiceContext } from "../Editcontexts/InvoiceContext"

function InvoiceTable () {
    const { inputFields , updateOtherFields } = useContext(InvoiceContext);

    return (
        <>
            <div className="header invoicing row desc mt-5">
                <div className="col-md-5">
                    <input 
                        type="text"
                        name="description"
                        className="text-white"
                        value={inputFields.description}
                        onChange={(e)=>updateOtherFields(e)}                                        
                    />
                </div>
                <div className="col-md-2 ">
                    <input 
                        type="text"
                        name="quantity"
                        className="text-white"
                        value={inputFields.quantity}
                        onChange={(e)=>updateOtherFields(e)}                
                    />
                </div>
                <div className="col-md-2 ">
                    <input 
                        type="text"
                        name="rate"
                        className="text-white"
                        value={inputFields.rate}
                        onChange={(e)=>updateOtherFields(e)}                
                    />
                </div>
                <div className="col-md-2 ">
                    <input 
                        type="text"
                        name="amount"
                        className="text-white text-end"
                        value={inputFields.amount}
                        onChange={(e)=>updateOtherFields(e)}                
                    />
                </div>
                <div className="col-md-1">
                    
                </div>
            </div>

            <DynamicBlock />
            <NotesTotal />
        </>                
    )
}



export default InvoiceTable