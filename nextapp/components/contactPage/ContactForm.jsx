const ContactForm = () => {
  return (
    <form className="contact-form">
      <div>
        <label>
          <input className="form-input" type="text" placeholder="Name" />
        </label>
        <label>
          <input className="form-input" type="text" placeholder="Last Name" />
        </label>
      </div>
      <div>
        <label>
          <input
            className="form-input"
            type="number"
            placeholder="Phone Number"
          />
        </label>
        <label>
          <input
            className="form-input"
            type="Email"
            placeholder="Email Address"
          />
        </label>
      </div>
      <button className="form-btn">SEND</button>
    </form>
  );
};
export { ContactForm };
