import React, { useState } from "react";
import "./EditInfoForm.css";
const EditInfoForm = (props) => {
 

  return (
    <div>
      <form onSubmit={props.handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="name">
            <span className="required">*</span>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={props.formData.name}
            onChange={props.handleChange}
            placeholder={`${props.user.name}`}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <span className="required">*</span>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={props.formData.email}
            onChange={props.handleChange}
            placeholder={`${props.user.email}`}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">
            <span className="required">*</span>
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={props.formData.phone}
            onChange={props.handleChange}
            placeholder={`${props.user.phone}`}
          />
        </div>
        <div className="form-field">
          <label htmlFor="website">
            <span className="required">*</span>
            Website:
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={props.formData.website}
            onChange={props.handleChange}
            placeholder={`${props.user.website}`}
          />
        </div>
      </form>
    </div>
  );
};

export default EditInfoForm;
