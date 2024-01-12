import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from "../../api"
import "./index.css"
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [editField, setEditField] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (!token) {
          navigate("/user-login");
          return;
        }

        const response = await axios.get(`${baseUrl}/user/findone/${userId}`, {
          headers: {
            token: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 403) {
          // Unauthorized access, token is not valid
          navigate("/user-login");
        }
      }
    };

    fetchData();
  }, [navigate]);

  const handleUpdateUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${baseUrl}/user/update/${userId}`,
        updatedUser,
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data.user);
      setUpdatedUser({
        fullName: "",
        email: "",
        phoneNumber: "",
      });
      setEditField(null);
      setIsEditing(false);

      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleEditClick = (field) => {
    setEditField(field);
    setUpdatedUser({ ...updatedUser, [field]: user[field] });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleUpdateUser();
  };

  return (
    <div className='user-container'>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>
            <strong>Full Name:</strong>{' '}
            {isEditing && editField === 'fullName' ? (
              <input
                type="text"
                value={updatedUser.fullName}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, fullName: e.target.value })
                }
              />
            ) : (
              <span>{user.fullName}</span>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={() => handleEditClick('fullName')}>Edit</button>
            )}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            {isEditing && editField === 'email' ? (
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
              />
            ) : (
              <span>{user.email}</span>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={() => handleEditClick('email')}>Edit</button>
            )}
          </p>
          <p>
            <strong>Phone Number:</strong>{' '}
            {isEditing && editField === 'phoneNumber' ? (
              <input
                type="tel"
                value={updatedUser.phoneNumber}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, phoneNumber: e.target.value })
                }
              />
            ) : (
              <span>{user.phoneNumber}</span>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={() => handleEditClick('phoneNumber')}>Edit</button>
            )}
          </p>

          {/* <form className='container'>
            {isEditing && (
              <button type="button" onClick={handleUpdateUser}>
                Update User
              </button>
            )}
          </form> */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
