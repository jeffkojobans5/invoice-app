export function LandingpageBlocksLeft ( { logoclassName , textclassName, title , para , textLogo} ) {
    return (
    <div className="row ">
        <div className= { textclassName } >
            <h3 className="text-justify"> { title } </h3>
            <p className="text-justify"> { para } </p>
        </div>
        <div className={ logoclassName }>
            <img src={ textLogo } alt="" />
        </div>
    </div>        
    )
}


export function LandingpageBlocksRight ( { logoclassName , textclassName, title , para , textLogo , } ) {
    return (
    <div className="row ">
        <div className={ logoclassName }>
            <img src={ textLogo } alt="" />
        </div>
        <div className={ textclassName }>
            <h3 className="text-justify"> { title } </h3>
            <p className="text-justify"> { para } </p>
        </div>
    </div>        
    )
}
