import Button from "./Button"
import { SiCheckmarx } from "react-icons/si";


const Main = ( { mainTitle, addButton, buttonStyle } ) => {

    return (
        <section className='header'>
            <div className="header-contanier">
                <SiCheckmarx className="header-icon"/>
                <h2>{ mainTitle }</h2>
            </div>
            <Button 
                buttonTitle={buttonStyle ? 'Review' : 'Add'} 
                color={buttonStyle ? '#cc7ed1' : '#412176' }
                onClick={addButton}
            />
        </section>
    )
}

export default Main
