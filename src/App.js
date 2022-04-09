import { useEffect, useState } from "react";
import "./App.css";
import { GreetCard } from "./components/GreetCard/GreetCard";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TextEditor } from "./components/TextEditor/TextEditor";

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  useEffect(() => {
    setShowGreeting(true);
  }, []);
  return (
    <>
      {showGreeting && <GreetCard setShowGreeting={setShowGreeting} />}
      <Sidebar />
      <TextEditor />
    </>
  );
}

export default App;
