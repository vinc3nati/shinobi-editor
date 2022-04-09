import { createContext, useContext } from "react";
import { useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Strike from "@tiptap/extension-strike";
import Iframe from "../components/Iframe/Iframe.ts";

const TextEditorContext = createContext();

const TextEditorProvider = ({ children }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Underline,
      Strike,
      Image,
      Placeholder,
      Iframe,
    ],
    autofocus: "end",
  });

  if (!editor) return null;

  return (
    <TextEditorContext.Provider value={{ editor }}>
      {children}
    </TextEditorContext.Provider>
  );
};

const useTextEditor = () => {
  const context = useContext(TextEditorContext);
  if (!context) throw new Error("Text Editor context was not created");

  return context;
};

export { useTextEditor, TextEditorProvider };
