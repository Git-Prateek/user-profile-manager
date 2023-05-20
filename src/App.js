import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { IconButton } from "@mui/material";
import Modal from "./components/modal/Modal";
import PopUp from "./components/popUp/PopUp";
import Loader from "./components/loader/Loader";
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setselectedUser] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setIsLoading(false);
  }, []);

  function handleDeleteClick(user) {
    setselectedUser(user);
    setIsPopUpOpen(true);
  }
  function handleDelete(userId) {
    setIsPopUpOpen(!isPopUpOpen);
    setUsers(users.filter((user) => user.id !== userId));
  }
  function handleEditClick(user) {
    setselectedUser(user);
    setIsModalOpen(true);
  }

  function handleFavoriteClick(newFavorite, index) {
    setChecked(!checked);
    const existingFavorite = favorite.find((obj) => obj.id === newFavorite.id);
    if (!existingFavorite) {
      newFavorite.checked = true;
      setFavorite([...favorite, newFavorite]);
    } else {
      newFavorite.checked = !newFavorite.checked;
      if (!newFavorite.checked) {
        const objWithIdIndex = favorite.findIndex(
          (obj) => obj.id === newFavorite.id
        );
        if (objWithIdIndex > -1) {
          favorite.splice(objWithIdIndex, 1);
        }
      }
    }
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };
  const temp = (formData) => {
    let selectedIndex = 0;
    users.find((user, index) => {
      if (selectedUser.id == user.id) {
        selectedIndex = index;
      }
      return user.id === selectedUser.id;
    });
    let tempUsers = JSON.parse(JSON.stringify(users));
    tempUsers[selectedIndex] = {...selectedUser,...formData};
    setUsers(tempUsers);
    console.log(tempUsers);
  };
  return (
    <div className="root">
      {isLoading && <Loader />}
      {isModalOpen && selectedUser && (
        <Modal closeModal={closeModal} user={selectedUser} temp={temp} />
      )}
      {isPopUpOpen && (
        <PopUp
          closePopUp={closePopUp}
          user={selectedUser}
          handleDelete={() => handleDelete(selectedUser?.id)}
        />
      )}
      {users &&
        users.map((user, index) => {
          return (
              <div className="card" key={`${user.id}-${user.username}`}>
                <div className="img-container">
                  <img
                    src={`https://avatars.dicebear.com/v2/avataaars/{${user.username}}.svg?options[mood][]=happy`}
                    alt="Avatar"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="container">
                  <h3>
                    <b>{user.name}</b>
                  </h3>
                  <div className="field">
                    <EmailOutlinedIcon style={{ marginRight: "10px" }} />
                    {user.email}
                  </div>
                  <div className="field">
                    <PhoneEnabledOutlinedIcon style={{ marginRight: "10px" }} />
                    {user.phone}
                  </div>
                  <div className="field">
                    <LanguageOutlinedIcon style={{ marginRight: "10px" }} />
                    {user.website}
                  </div>
                </div>
                <div className="icons-container">
                  <div className="icon-div">
                    <IconButton
                      onClick={() => {
                        handleFavoriteClick(user, index);
                      }}
                    >
                      <FavoriteBorderOutlinedIcon
                        style={{ color: user.checked ? "red" : "black" }}
                      />
                    </IconButton>
                  </div>
                  <div className="icon-div center">
                    <IconButton onClick={() => handleEditClick(user)}>
                      <BorderColorOutlinedIcon />
                    </IconButton>
                  </div>
                  <div className="icon-div">
                    <IconButton onClick={() => handleDeleteClick(user)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
          );
        })}
    </div>
  );
}

export default App;
