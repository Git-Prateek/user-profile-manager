import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import EditInfoForm from "../editInfoForm/EditInfoForm";

const Modal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.temp(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
    props.closeModal();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Basic Modal </h4>
          <IconButton onClick={props.closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <EditInfoForm
          handleSubmit={handleSubmit}
          user={props.user}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          //   index={props.index}
        />
        <div className="modal-footer">
          <button
            onClick={props.closeModal}
            className="footer-button secondary"
          >
            Cancel
          </button>
          <button onClick={handleSubmit} className="footer-button primary">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
