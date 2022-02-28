// import { useState } from 'react';

function SideBar () {
    return (
    <div className="sidebar">
        <button type="button" className="btn btn-primary w-100" name=""> Save </button> <br/><br/>
        {/* <button type="button" className="btn btn-warning w-100" name=""> Download </button> */}
        <p> Choose currency : <br/> <span className="text-primary"> Ghana Cedis </span></p>
        <select name="" id="" className="form-control">
            <option value=""></option>
        </select>
    </div>
    )    
}

export default SideBar;