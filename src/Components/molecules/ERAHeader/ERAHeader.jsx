import image from '../../../assets/ReactLogo.png'
import ERAButton from '../../atoms/ERAButton/ERAButton'
import './ERAHeader.css'

const ERAHeader = () => {
    return <div className='headerContainer'>
        <div className='logoContainer'>
            <img src={image} className='logo'></img>
            <div><h3 className='title'> Edu  </h3>
                <h3 className='title'>React</h3></div>
        </div>

       <div className='linksContainer'>
           <select className='selectStyle'> 
            <option value='0'> Topics </option>
            <option value='1'> React Basics </option>
            <option value='2'> React State and Lifecycle </option>
            <option value='3'> React Hooks</option>
           </select>  
        <a href="#" className='links'>About Us</a> 
        <a href="#" className='links'>Contact Us</a>
       </div>

        <div className='buttonContainer'>
       <button className='LoginBtn' onClick={()=>{ window.location = '/login'}}> <b>LOGIN</b></button>
       <button className='SignupBtn' onClick={()=>{ window.location = '/signup'}}> <b>SIGNUP</b> </button>
       </div>
    </div>
}
export default ERAHeader