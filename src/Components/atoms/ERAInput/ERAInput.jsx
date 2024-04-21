import './ERAInput.css'

const ERAInput = (props) => {
  return <div>
    <input placeholder={props.name} type={props.type} className='inputStyle'/>
  </div>
};
export default ERAInput