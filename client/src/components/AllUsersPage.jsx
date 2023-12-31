import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showAllUsers } from '../api/usersUtils';
import UserInfo from './UserInfo';
export default function AllUsersPage({ users, setUsers }) {
  //const nav = useNavigate();

  async function displayUsers() {
    const usersDisplay = await showAllUsers();
    setUsers(usersDisplay);
    // console.log(usersDisplay);
  }

  useEffect(() => {
    displayUsers();
  }, []);

  /*const list = ({ _id, username }) => (
    <div key={_id}>
      <h2>{username}</h2>
      <button onClick={() => nav(`/users/${_id}`)}>See Details</button>
    </div>
  );*/

  // console.log(users);
  /*return (
    <>
      <h1>All Users Page</h1>
      {users.map((i) => {
        return list(i);
      })}
    </>
  );*/
  return (
    <>
      <h1>All Users Page</h1>
      {users.map((i) => {
        return (
          <UserInfo key={i._id} _id={i._id} username={i.username}></UserInfo>
        );
      })}
    </>
  );
}
