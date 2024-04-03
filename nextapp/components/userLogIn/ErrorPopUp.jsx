import { MdError } from "react-icons/md";

const ErrorPopUp = ({ setError, text = "OK" }) => {
  return (
    <div className="pop-up">
      <MdError className="submit-icon" style={{ color: "red" }} />
      <p style={{ color: "#ff1f1f" }}>Password does not match</p>
      <button
        style={{ background: "#ff1f1f" }}
        className="submit-btn"
        onClick={() => setError(false)}
      >
        {text}
      </button>
    </div>
  );
};

export { ErrorPopUp };
