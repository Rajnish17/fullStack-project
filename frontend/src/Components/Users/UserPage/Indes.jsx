import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import baseUrl from "../../api";
import "./index.css"

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        // console.log(userId)

        if (!token) {
          navigate("/login")
        }

        const response = await axios.get(`${baseUrl}/user/findone/${userId}`, {
          headers: {
            token: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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

      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };




  return (
    <div className='container'>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>

          {/* Update User Form */}
          <h3>Update User Details</h3>
          <form className='container'>
            <label>
              Full Name:
              <input
                type="text"
                value={updatedUser.fullName}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, fullName: e.target.value })
                }
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
              />
            </label>
            <br />

            <label>
              Phone Number:
              <input
                type="tel"
                value={updatedUser.phoneNumber}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, phoneNumber: e.target.value })
                }
              />
            </label>
            <br />

            <button type="button" onClick={handleUpdateUser}>
              Update User
            </button>
          </form>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
