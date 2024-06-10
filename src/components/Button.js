


const Button = ( { buttonTitle, color, onClick } ) => {
    return (
        <>
            <button 
                className='btn'
                style={{ backgroundColor: color }}
                onClick={onClick}
                >{ buttonTitle }
            </button>
        </>
    )
}

export default Button
