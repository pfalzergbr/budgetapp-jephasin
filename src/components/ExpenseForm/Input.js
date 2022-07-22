// Input component is duplicated. This is a nice way to re-use

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="col-sm">
      <label form={name}>{label}</label>
      <input
        required
        type="text"
        className="form-control"
        id={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
