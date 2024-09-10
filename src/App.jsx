import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShoModal] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShoModal(true)}>Open modal</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Modal mode={showModal} onClose={() => setShoModal(false)}>
        <h1>This is modal window</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          distinctio soluta aliquam ipsum totam odio quaerat? Asperiores
          nesciunt aliquam iusto?
        </p>

      </Modal>
    </>
  );
}

export default App;
