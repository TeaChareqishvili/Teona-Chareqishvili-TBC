import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { inputFields } from "./projectData";
import { ErrorPopUp } from "./ErrorPopUp";
import { SuccessPopUp } from "./SuccessPopUp";

const LogIn = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordsMatch = value.password === value.confirmPassword;
    setError(!passwordsMatch);
    setSuccess(passwordsMatch);
    console.log("input-value", value);
  };

  return (
    <div className="log-in-wrapper">
      <form className="log-in-form" onSubmit={handleSubmit}>
        <FaCircleUser className="user-log" />
        {inputFields.map((field, index) => (
          <label key={index}>
            <input
              value={value[field.name]}
              name={field.name}
              onChange={handleChange}
              className="log-in-input"
              type={field.type}
              placeholder={field.placeholder}
              // pattern={field.pattern}
              // title={field.title}
              required={field.required}
            />
          </label>
        ))}
        {error && <ErrorPopUp setError={setError} />}
        {success && <SuccessPopUp value={value.name} setSuccess={setSuccess} />}
        <button className="log-in-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export { LogIn };
