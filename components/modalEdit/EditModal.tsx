import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EditModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        className="bg-white p-4 rounded shadow-lg mt-[50px]"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <button
          className="text-red-600 mb-4"
          onClick={onClose} // Close button
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default EditModal;
