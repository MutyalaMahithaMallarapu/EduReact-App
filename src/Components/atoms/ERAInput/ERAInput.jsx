import "./ERAInput.css";

const ERAInput = (props) => {
  return (
    <div>
      <input
        placeholder={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="inputStyle"
      />
    </div>
  );
};
export default ERAInput;
