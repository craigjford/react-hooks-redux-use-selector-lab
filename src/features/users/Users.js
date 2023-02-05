import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users);
  const userNumber = useSelector((state) => state.users.length);
   
  console.log('users = ', users)

  return (
    <div>
      <ul>
        {users.map((user) => <li key={user.username}>Name: {user.username} - Hometown: {user.hometown}</li> )}
      </ul>
      Total Users: {userNumber}
    </div>
  );
}

export default Users;
