import React, { useState } from 'react'

const GetUserSort = () => {
    const APIURL ="https://jsonplaceholder.typicode.com/users";

    const [user, setUser] = useState([]);
    const [sortOrder, setSortOrder] = useState(0);

    async function fetchData(){ 
        const result = await fetch(APIURL);
        const response = await result.json();
        return response;
    }

    function getUser(){
        const  promise = fetchData();
        promise.then((data) => setUser(data));
    }

    function sortList(){
        if (sortOrder === 0 || sortOrder === 2) {
            setUser(user.sort((a, b)=> a.name.length - b.name.length));
            setSortOrder(1);
        }else{
            setUser(user.sort((a, b)=> b.name.length - a.name.length));
            setSortOrder(2);
        }
    }
  return (
    <div>
        <h1>User List</h1>
        <div>
        <button onClick={getUser}>Fetch User</button>
        <br /><br />
        <button onClick={sortList}>Sort List</button>
        </div>
        <ul>
        {
            user.map((data, index) => 
                <li key={index}>{data.name}</li>
            )
        }
        </ul>



    </div>
  )
}

export default GetUserSort