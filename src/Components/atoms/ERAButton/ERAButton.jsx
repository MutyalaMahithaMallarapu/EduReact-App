import './ERAButton.css'

const ERAButton = (props) => {

    const handleOnClick = () => {
        if (props.Name === 'LOGIN') {
            alert("Loged in Successfully")
           window.location = '/home'
        }
     else if(props.Name === 'SIGNUP'){
            alert("Sucessfully Registered")
            window.location = '/login'
        }
    }

    return <div>
    <button className="buttonStyle" onClick={handleOnClick}> { props.Name } </button>
    </div>
}
export default ERAButton