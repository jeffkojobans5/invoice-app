function Inputs ( props ) {
    const {  type , name , value , placeholder , onChange , className } = props
    return (
        <input
            type = {type} 
            name = { name }
            value = { value }
            placeholder = { placeholder}
            className = {className}
            onChange = {onChange}            
        />
        
    )
}

export default Inputs