function txtArea ( props ) {
    const {  name , value , placeholder ,onChange , className} = props
    return (
        <textarea 
            name = { name }
            value = { value }
            placeholder = { placeholder}
            className = {className}
            onChange = {onChange}            
        >
        </textarea>
    )
}

export default txtArea