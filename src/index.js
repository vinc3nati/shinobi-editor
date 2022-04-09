import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TextEditorProvider } from "./contexts/editor-context";

ReactDOM.render(
  <React.StrictMode>
    <TextEditorProvider>
      <App />
    </TextEditorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
