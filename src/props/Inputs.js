function Inputs ( props ) {
    const {  type , name , value , placeholder , onChange , className , disabled } = props
    return (
        <input
            type = {type} 
            name = { name }
            value = { value }
            placeholder = { placeholder}
            className = {className}
            onChange = {onChange}        
            disabled = { disabled }
        />
        
    )
}

export default Inputs