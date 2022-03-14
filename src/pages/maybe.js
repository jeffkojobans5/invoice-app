<div className="container-fluid w-75">
<div className="container mt-3 row mx-auto p-0">
    <div className="col-md-9 invoice-block p-2">
           {/* INVOICE BLOCK START */}
<div className="container p-2">
<div className="row">
    <div className="col-md-6">
        <Txtarea 
            name = "sender"
            placeholder = "Who is this invoice from? (required)"
            className = "textarea-visible"
            value = { sender }
            onChange = { (e)=>updateOtherFields(e) }
        ></Txtarea>
    </div>
    <div className="col-md-6">
        <Inputs 
            type = "text"
            name = "invoiceName"
            className="h3 input-placeholders text-end"
            value = { invoiceName }
            onChange = { (e)=>updateOtherFields(e) }
        />
    </div>
</div>

<div className="row mt-2">
    <div className="col-md-6">
        <div className="row">
            <div className="col-md-6">
                <Inputs
                    type="text"
                    className="input-placeholders-small"
                    name = "billTo"
                    value = { billTo}
                    onChange = { (e)=>updateOtherFields(e) }
                />
                <Txtarea 
                    placeholder = "Who is this invoice to? (required)"
                    className = "textarea-visible w-100"
                    name = "receiver"
                    value = { receiver}
                    onChange = { (e)=>updateOtherFields(e) }                                
                ></Txtarea>
            </div>
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small "
                        name = "shipTo"
                        value = { shipTo}
                        onChange = { (e)=>updateOtherFields(e) }
                    />
                    <Txtarea 
                        placeholder = "Optional"
                        className = "textarea-visible w-100"
                        name = "optional"
                        value = { optional}
                        onChange = { (e)=>updateOtherFields(e) }                                    
                    ></Txtarea>                            
            </div>
        </div>
    </div>

    <div className="col-md-6 pr-5">
        <div className="row p-0 justify-content-end d-flex">
            <div className="col-md-7 justify-content-end d-flex">
                        <Inputs
                            type="text"
                            className="input-placeholders-small text-end close"
                            name = "date"
                            value = { date}
                            onChange = { (e)=>updateOtherFields(e) }                                          
                        />                            
            </div>
            <div className="col-md-5 justify-content-end d-flex"> 
                <DayPickerInput
                    value={dateValue}
                    onDayChange={(e)=>StartDate(e)}
                    placeholder = ""  
                                                  
                />                          
            </div>
        </div>

        <div className="row p-0 mt-1 justify-content-end d-flex">
            <div className="col-md-7 justify-content-end d-flex">
                        <Inputs
                            type="text"
                            className="input-placeholders-small text-end close"
                            name = "paymentTerms"
                            value = { paymentTerms}
                            onChange = { (e)=>updateOtherFields(e) }                                          
                        />                            
            </div>
            <div className="col-md-5 justify-content-end d-flex"> 
                     <Inputs
                        type="text"
                        className="input-placeholders-small text-end border"
                        name = "paymentTermsValue"
                        value = { paymentTermsValue}
                        onChange = { (e)=>updateOtherFields(e) }    
                    />                            
            </div>
        </div>

        <div className="row p-0 mt-1 justify-content-end d-flex">
            <div className="col-md-7 justify-content-end d-flex">
                        <Inputs
                            type="text"
                            className="input-placeholders-small text-end close"
                            name = "dueDate"
                            value = { dueDate}
                            onChange = { (e)=>updateOtherFields(e) }    
                        />                            
            </div>
            <div className="col-md-5 justify-content-end d-flex"> 
                <DayPickerInput
                    value={dueDateValue}
                    onDayChange={(e)=>DueDate(e)}
                    placeholder = ""
                    className="dates"
                />                                                         
            </div>
        </div>

        <div className="row p-0 mt-1 justify-content-end d-flex">
            <div className="col-md-7 justify-content-end d-flex">
                        <Inputs
                            type="text"
                            className="input-placeholders-small text-end close"
                            name = "PNumber"
                            value = { PNumber}
                            onChange = { (e)=>updateOtherFields(e) }    
                        />                            
            </div>
            <div className="col-md-5 justify-content-end d-flex"> 
                     <Inputs
                        type="text"
                        className="input-placeholders-small text-end border"
                        name = "PNumberValue"
                        value = { PNumberValue}
                        onChange = { (e)=>updateOtherFields(e) }    
                    />                            
            </div>
        </div>                   
    </div>
</div>            
        {/* START OF INVOICE TABLE */}
        <div className="header invoicing row desc mt-5">
    <div className="col-md-5">
        <input 
            type="text"
            name="description"
            className="text-white"
            value={description}
            onChange={(e)=>updateOtherFields(e)}                                        
        />
    </div>
    <div className="col-md-2 ">
        <input 
            type="text"
            name="quantity"
            className="text-white"
            value={quantity}
            onChange={(e)=>updateOtherFields(e)}                
        />
    </div>
    <div className="col-md-2 ">
        <input 
            type="text"
            name="rate"
            className="text-white"
            value={rate}
            onChange={(e)=>updateOtherFields(e)}                
        />
    </div>
    <div className="col-md-2 ">
        <input 
            type="text"
            name="amount"
            className="text-white text-end"
            value={amount}
            onChange={(e)=>updateOtherFields(e)}                
        />
    </div>
    <div className="col-md-1">
        
    </div>
</div>

{/*  START OF DYNAMIC BLOCK */}
{ fieldDetails.map((inputField , i )=> {             
return (                         
    <div className="dynamicTable row " key={ inputField.id }>
        <div className="col-md-5">
            <Inputs
                type="text"
                name="description"
                label="description"
                value={ inputField.description}
                onChange={(e)=>updateInputs(inputField.id , e)}
            />
        </div> 
        <div className="col-md-2">
            <Inputs
                    type="number"                    
                    name="quantity"
                    label="quantity"
                    value={inputField.quantity}
                    onChange={(e)=>updateInputs(inputField.id , e)}
            />                
        </div>
        <div className="col-md-2">
            <Inputs
                        type="number"                    
                        name="rate"
                        label="rate"
                        value={inputField.rate}
                        onChange={(e)=>updateInputs(inputField.id , e)}
                />   
        </div>
        <div className="col-md-2 ">
            <Inputs
                        name="number"
                        label="total"
                        className="removeBorder text-end bg-white"
                        value={inputField.total}
                        onChange={(e)=>updateInputs(inputField.id , e)}
                />   
        </div>
        <div className="col-md-1 d-flex justify-content-center align-items-center">
            { inputFields.fieldDetails.length > 1 ?  <FaTrashAlt className="trash" onClick={ (e)=>removeInput(inputField.id) }/> : ""  } 
        </div>                
    </div>                  
   
    )}) }
    <button type="button" className="btn btn-primary" name="fieldDetails" onClick={ ()=>addNewLineField() }> + Line Item</button>            
{/*  END OF DYNAMIC BLOCK */}

{/* START OF NOTES TOTAL */}
<div className="notes mt-5">
<div className="row">
    <div className="col-md-6">
                <Inputs
                    type="text"
                    className="input-placeholders-small"
                    name = "notes"
                    value = { notes}
                    onChange = { (e)=>updateOtherFields(e) }
                />
                <Txtarea 
                    placeholder = "Notes - any relevant information not already covered"
                    className = "textarea-visible w-100"
                    name = "notesValue"
                    value = { notesValue }
                    onChange = { (e)=>updateOtherFields(e) }                                
                ></Txtarea>                       
                <Inputs
                    type="text"
                    className="input-placeholders-small"
                    name = "terms"
                    value = { terms}
                    onChange = { (e)=>updateOtherFields(e) }
                />
                <Txtarea 
                    placeholder = "Terms and conditions - late fees, payment methods, delivery schedule"
                    className = "textarea-visible w-100"
                    name = "termsValue"
                    value = { termsValue}
                    onChange = { (e)=>updateOtherFields(e) }                                
                ></Txtarea>                       
    </div>

    <div className="col-md-6 subs"> 
    {/* SUBTOTAL */}
        <div className="row">
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "subTotalValue"
                        value = { subTotalValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>
            <div className="col-md-6 subtotal">
                    <p className="text-end m-0 me-1"> { currencySign } { subTotal } </p>
            </div>                                      
        </div>     

    {/* DISCOUNT */}
        <div className="row">
            <div className="col-md-3">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "discountValue"
                        value = { discountValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>

            <div className="col-md-3">
                <select name="discountCal" id="" value={discountCal} onChange={ (e)=> selectChange(e) }>
                    <option value="percentage">  Per (%) </option>
                    <option value="fixed"> Fixed ({ currencySign }) </option>
                </select>                        
            </div>


            <div className="col-md-6 subtotal">
                    <Inputs
                        type="number"
                        className="input-placeholders-small text-end"
                        name = "discount"
                        value = { discount}
                        onChange = { (e)=>updateOtherFields(e) }
                    />  
            </div>                                      
        </div>   

        {/* TAX */}
        <div className="row">
            <div className="col-md-3">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "taxValue"
                        value = { taxValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>

            <div className="col-md-3">
                <select name="taxCal" id="" value={taxCal} onChange={ (e)=> selectChange(e) }>
                    <option value="percentage">  Per (%) </option>
                    <option value="fixed"> Fixed ({ currencySign }) </option>
                </select>                        
            </div>


            <div className="col-md-6 subtotal">
                    <Inputs
                        type="number"
                        className="input-placeholders-small text-end"
                        name = "tax"
                        value = { tax}
                        onChange = { (e)=>updateOtherFields(e) }
                    />  
            </div>                                      
        </div>   

    {/* SHIP */}
    <div className="row">
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "shippingValue"
                        value = { shippingValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>
            <div className="col-md-6 subtotal">
                <Inputs
                        type="number"
                        className="input-placeholders-small text-end"
                        name = "shipping"
                        value = { shipping}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                                   
            </div>                                      
        </div>               
              

    {/* SHIP */}
    <div className="row">
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "total"
                        value = { total}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>
            <div className="col-md-6 subtotal">
                <p className="text-end m-0 me-1"> { currencySign } { totalValue } </p>                                 
            </div>                                      
        </div>               
              

    {/* SHIP */}
    <div className="row">
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "amountPaidValue"
                        value = { amountPaidValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>
            <div className="col-md-6 subtotal">
                <Inputs
                        type="number"
                        className="input-placeholders-small text-end"
                        name = "amountPaid"
                        value = { amountPaid}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                                   
            </div>                                      
        </div>               
              

    {/* SHIP */}
    <div className="row">
            <div className="col-md-6">
                <Inputs
                        type="text"
                        className="input-placeholders-small"
                        name = "balanceDueValue"
                        value = { balanceDueValue}
                        onChange = { (e)=>updateOtherFields(e) }
                    />                            
            </div>
            <div className="col-md-6 subtotal">
                <p className="text-end h6 me-1"> { currencySign } { balanceDue } </p>                          
            </div>                                      
        </div>                                       
    </div>
</div>
</div>
{/* END OF NOTES TOTAL */}            
{/* END OF INVOICE TABLE */}
</div>
           {/* INVOICE BLOCK END */}
    </div>
    <div className="col-md-3 ">
    {/* START OF SIDE BAR */}
    <div className="sidebar">
        <button type="button" className="btn btn-primary w-100" name="" onClick={ submit } > Save </button> <br/><br/>
        {/* <button type="button" className="btn btn-warning w-100" name=""> Download </button> */}
        <p> <span className="text-primary">  { inputFields.currencyName } { inputFields.currencySign } { inputFields.countryFlag }   </span></p>        
        <select name="" id="" className="form-control" onChange={ (e)=>handleCurrency(e) }>
            { allCountries.map((item , index)=>{
                for (let property in item.currencies) {
                if (item.currencies.hasOwnProperty(property)) {                        
                return (
                    <option value={item.name['common']} key={ item.flags['png'] } > 
                        { item.name['common'] } ({ item.currencies[property]['symbol']}) 
                    </option>
                        )
                    }
                }         
            }) }
        </select>
    </div>                
    {/* END OF SIDE BAR */}
    </div>
</div>
</div>