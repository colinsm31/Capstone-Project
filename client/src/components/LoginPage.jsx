import { useState,useEffect } from "react"

const LoginPage = () => {
  const [email, setEmail] = usestate('');
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
  }

  return(
    <>
    <form>
      <label for="email">email</label>
      <input type = "email" placeholder="youremail@gmail.com" id="email" name="email"/>
      <label for="password">password</label>
      <input type="password" placeholder="youremail@gmail.com" id="password" name="password"/>
    </form>
    <button>Don't have an account? Register here.</button>
    </>
  )
}

export default LoginPage;
