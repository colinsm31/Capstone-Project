import { useState, useEffect } from "react"
import { createUser, showAllUsers } from "../api/usersUtils";
import { useNavigate } from "react-router-dom";

export default function Register () {
  const nav = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUsers = async () => {
    const usersArr = await showAllUsers();
    setUsers(usersArr);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUser(username, password);
      console.log(newUser);

      const newUsersArr = [...users, newUser];
      setUsers(newUsersArr);

      setUsername('');
      setPassword('');
      nav('/users');
    } catch (error) {
      console.error('Error creating user: ', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return(
    <div className="auth-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input type = "text" value = {username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label >Password: 
          <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type ="submit">Create Account</button>
      </form>
    </div>
  )
}