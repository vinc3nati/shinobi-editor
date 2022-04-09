import { useTextEditor } from "../../contexts/editor-context";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";

export const TextStyles = () => {
  const { editor } = useTextEditor();

  return (
    <>
      <li
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "action active" : "action"}
      >
        <FaBold />
      </li>
      <li
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "action active" : "action"}
      >
        <FaItalic />
      </li>
      <li
        title="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "action active" : "action"}
      >
        <FaUnderline />
      </li>
      <li
        title="Strike Through"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "action active" : "action"}
      >
        <FaStrikethrough />
      </li>
    </>
  );
};
