import { VscPassFilled } from "react-icons/vsc";

const SuccessPopUp = ({ value, text = "CLOSE", setSuccess }) => {
  return (
    <div className="pop-up">
      <VscPassFilled className="submit-icon" style={{ color: "green" }} />
      <p style={{ color: "green" }}> Hello {value} ! </p>
      <button
        style={{ background: "green" }}
        className="submit-btn"
        onClick={() => setSuccess(false)}
      >
        {text}
      </button>
    </div>
  );
};

export { SuccessPopUp };
