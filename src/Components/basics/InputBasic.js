const InputBasic = ({ type, placeholder, username, eventOnChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={username}
      onChange={eventOnChange}
    />
  );
};

export default InputBasic;
