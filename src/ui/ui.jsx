import "./ui.css";

export const ButtonOutline = ({ children, isDisabled }) => {
  return (
    <button className="outline-btn" disabled={isDisabled}>
      {children}
    </button>
  );
};

export const PrimaryButton = ({ children, isDisabled, setState, value }) => {
  return (
    <button
      onClick={() => setState(value)}
      className="primary-button"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export const InputForText = ({ htmlFor, setState, label }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type="text"
        id={htmlFor}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};
