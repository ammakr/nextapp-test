import useBeforeUnload from "@/hooks/useBeforeUnload";
import React, { useState } from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onClose, onSaveChanges }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Save Changes Modal"
    >
      <div>
        <p>Do you want to save your changes before leaving?</p>
        <button onClick={onSaveChanges}>Save Changes</button>
        <button onClick={onClose}>Leave Without Saving</button>
      </div>
    </Modal>
  );
};

const YourComponent = () => {
  const [showModal, setShowModal] = useState(true);

  useBeforeUnload(
    () => {
      console.log("it is goinng");
      setShowModal(true);
      return true;
    },
    () => {
      // Your save changes logic goes here
      // After saving changes, you can close the modal and allow navigation
      setShowModal(false);
    },
  );

  return (
    <div>
      {/* Your component content */}
      <CustomModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSaveChanges={() => {
          // Save changes logic goes here
          // After saving changes, you can close the modal
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default YourComponent;
