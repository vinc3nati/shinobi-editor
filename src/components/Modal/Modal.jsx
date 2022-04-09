import React, { useState } from "react";

export const Modal = ({ label, operations }) => {
  const { cancel, proceed } = operations;
  const [input, setInput] = useState("");
  const handleCancel = () => {
    setInput("");
    cancel();
  };
  return (
    <div className="modal-container active">
      <div className="modal-content">
        <div className="modal-text text-center">
          <label htmlFor="modal-input" className="h6 text-primary">
            {label}
          </label>
          <div classNameName="input-grp">
            <input
              id="modal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="cta-container">
          <div className="btn tertiary" onClick={handleCancel}>
            cancel
          </div>
          <div className="btn primary" onClick={() => proceed(input)}>
            proceed
          </div>
        </div>
      </div>
    </div>
  );
};
