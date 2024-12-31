function Input({ name, value, onChange}) {
    return (
      <input
        type="text"
        id={name}
        name={name}
        placeholder={name}  
        className="fill"
        value={value}  
        onChange={onChange}  
      />
    );
  }
  
  export default Input;