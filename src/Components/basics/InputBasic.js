const InputBasic = ({ type, placeholder, username, onChangeInput }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={username}
      onChange={onChangeInput}
      style={{
        width: "600px",
        height: "50px",
        borderRadius: "5px",
        fontFamily: "roboto",
        fontWeight: "500px",
        fontSize: "20px",
        paddingLeft: "15px",
      }}
    />
  );
};

export default InputBasic;
