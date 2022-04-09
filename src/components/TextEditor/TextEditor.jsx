import React from "react";
import { EditorContent } from "@tiptap/react";
import { useTextEditor } from "../../contexts/editor-context";

export const TextEditor = () => {
  const { editor } = useTextEditor();
  return <EditorContent editor={editor} />;
};
