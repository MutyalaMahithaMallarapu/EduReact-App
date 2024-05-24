import './ERAButton.css'

const ERAButton = (props) => {

    const handleOnClick = () => {
        switch (props.Name) {
            case 'LOGIN': {
                alert("Loged in Successfully")
                window.location = '/home'
                break
            }
            case 'SIGNUP': {
                alert("Sucessfully Registered")
                window.location = '/login'
                break
            }
            case 'What is React?': {
                props.handleOnReactDefClick(true)
                break
            }
        }
    }

    return <div>
        <button className={props.isButtonWhite ? "whiteButtonStyle" : "buttonStyle"} onClick={handleOnClick}> <b>{props.Name} </b></button>
    </div>

}
export default ERAButton