import { FaTrashAlt } from 'react-icons/fa';

function DynamicBlock () {

    return (
        <>
            <div className="dynamicTable row ">
                <div className="col-md-5">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-md-2">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-md-2">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-md-2 ">
                    <input type="text" name="" id="" />
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <FaTrashAlt />
                </div>                
            </div>            
        </>
    )
}

export default DynamicBlock;