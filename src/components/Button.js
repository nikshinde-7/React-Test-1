const Button = ({ label, handleChange }) => {
  return (
    <div>
      <button className="btn-success mt-2 mb-2" type="submit" onClick={handleChange}>
        {label}
      </button>
    </div>
  );
};

export default Button;
