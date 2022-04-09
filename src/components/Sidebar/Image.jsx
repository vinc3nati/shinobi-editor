import React, { useState } from "react";
import { useTextEditor } from "../../contexts/editor-context";
import { FaImage } from "react-icons/fa";
import { Modal } from "../Modal/Modal";

export const Image = () => {
  const [show, setShow] = useState(false);
  const { editor } = useTextEditor();
  const setImageLink = (imageLink) => {
    editor.chain().focus().setImage({ src: imageLink }).run();
    setShow(false);
  };
  return (
    <>
      <li
        title="Image"
        onClick={() => setShow(true)}
        className={editor.isActive("image") ? "action active" : "action"}
      >
        <FaImage />
      </li>
      {show && (
        <Modal
          label="Enter Image Link"
          operations={{ cancel: () => setShow(false), proceed: setImageLink }}
        />
      )}
    </>
  );
};
