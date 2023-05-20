import React, { useState } from "react";
import "./PopUp.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import EditInfoForm from "../editInfoForm/EditInfoForm";

const PopUp = (props) => {
  const handleSubmit = () => {};
  return (
    <div className="popup-modal">
      <div className="popup-modal-content">
        <h4>Are you sure you want to delete the user? </h4>

        <div className="popup-modal-footer">
          <button
            onClick={props.closePopUp}
            className="popup-footer-button secondary"
          >
            No, don't delete.
          </button>
          <button
            onClick={props.handleDelete}
            className="popup-footer-button primary"
          >
            Yes I am sure.
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
