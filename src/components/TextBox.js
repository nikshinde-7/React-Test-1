const InputTextBox = ({ value, placeholder, handleChange }) => {
  return (
    <div className="align-text">
      <h3 className="mr-2">Input your text here : </h3>
      <input
        type="text"
        className="mb-2 mt-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default InputTextBox;
