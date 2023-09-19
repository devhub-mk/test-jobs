import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <h2>Click on the button below to open modal</h2>
      <button onClick={openModal}>Click Me</button>
      <Modal
        showModal={showModal}
        title={"Hello I'm title"}
        body={
          "Lorem ipsum dolor sit amet consectetur. accusamus, ea eos nemo maiores rerum nobis?"
        }
        actionBtnTitle="Delete"
        action={() => {
          console.log("item deleted");
          closeModal();
        }}
        dismiss={() => {
          closeModal();
        }}
      />
    </div>
  );
}

export default App;
