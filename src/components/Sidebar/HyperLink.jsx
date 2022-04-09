import React, { useState } from "react";
import { useTextEditor } from "../../contexts/editor-context";
import { FaLink, FaUnlink } from "react-icons/fa";
import { Modal } from "../Modal/Modal";

export const HyperLink = () => {
  const [show, setShow] = useState(false);
  const { editor } = useTextEditor();
  const setLink = (linkInput) => {
    if (linkInput) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkInput })
        .run();
    }
    setShow(false);
  };
  return (
    <>
      <li
        title="Link"
        onClick={() => setShow(true)}
        className={editor.isActive("link") ? "action active" : "action"}
      >
        <FaLink />
      </li>

      {editor.isActive("link") && (
        <li
          className="action active"
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <FaUnlink />
        </li>
      )}
      {show && (
        <Modal
          label="Enter Your Link"
          operations={{ cancel: () => setShow(false), proceed: setLink }}
        />
      )}
    </>
  );
};
