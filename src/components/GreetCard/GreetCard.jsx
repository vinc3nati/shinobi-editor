import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaLink,
  FaUnlink,
  FaImage,
  FaRegLaughBeam,
} from "react-icons/fa";

export const GreetCard = ({ setShowGreeting }) => {
  return (
    <div className="modal-container active" data-with-header>
      <div className="modal-content with-header">
        <div className="modal-header">
          <div className="greet-heading">Shinobi Editor</div>
        </div>
        <div className="modal-text text-justify">
          <li className="modal-instruction">
            <span>
              {" "}
              To add/remove <b>bold</b> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaBold />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To add/remove <i>Italic</i> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaItalic />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To add/remove <u>underline</u> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaUnderline />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To add/remove <s>strike</s> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaStrikethrough />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To add <b>link</b> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaLink />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To remove <b>link</b> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaUnlink />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To add <b>image</b> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaImage />
            </button>
          </li>
          <li className="modal-instruction">
            <span>
              {" "}
              To remove <b>gif</b> style, click{" "}
            </span>
            <button className="btn tertiary">
              <FaRegLaughBeam />
            </button>
          </li>
        </div>
        <div className="cta-container">
          <button
            className="btn primary"
            onClick={() => setShowGreeting(false)}
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};
