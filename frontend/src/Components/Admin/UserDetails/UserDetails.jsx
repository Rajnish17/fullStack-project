import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from 'axios'
import baseUrl from "../../api"


const UserDetails = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                // console.log(token);

                const response = await axios.get(`${baseUrl}/user/findall`, {
                    headers: {
                        token: `bearer ${token}`,
                    },
                });

                // console.log(response.data.users);
                setData(response.data.users);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");

            // Make a delete API call based on the user's ID
            await axios.delete(`${baseUrl}/user/delete/${id}`, {
                headers: {
                    token: `Bearer ${token}`,
                },
            });

            // After successful deletion, update the state
            setData((prevData) => prevData.filter(user => user._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (<>
        {isLoading ? (
          <h3><center>Loading...</center></h3>  
        ) :
            (
                <div className="datatable">
                    <input type="checkbox" id="reverse" />
                    <input type="checkbox" id="type" />
                    <h2>Users</h2>
                    <div className="row head">

                        <div>Name:</div>

                        <div className="reverse">
                            <label htmlFor="reverse">Email</label>
                        </div>
                        <div className="type">
                            <label htmlFor="type">Phone Number</label>
                        </div>
                    </div>

                    <div className="content">


                        {
                            data.map((ele) => {
                                return (
                                    <div key={ele._id} className="row science">
                                        <div>{ele.fullName}</div>
                                        <div>{ele.email}</div>
                                        <div> <p>{ele.phoneNumber}</p></div>
                                        <div><button onClick={() => { handleDelete(ele._id) }}>delete</button></div>

                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            )}
    </>

    )
}

export default UserDetails