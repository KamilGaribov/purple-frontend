function Checkbox(props) {
  const change = () => {
    props.checkboxHandler();
    // var input = e.target;
    // props.checkboxHandler(input);
    // props.changeCheckbox(input);
  };
  return (
    <div className="checkbox-comp" id={props.input == true ? "checkbox" : null}>
      {props.error && props.input == false ? <i className="fa fa-exclamation-circle"></i> : null}
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={change}
        checked={props.input == true ? true : false}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export default Checkbox;
