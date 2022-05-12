import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Brand Name" aboutText="About us" />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
      
      </div>
    </>
  );
}

export default App;
