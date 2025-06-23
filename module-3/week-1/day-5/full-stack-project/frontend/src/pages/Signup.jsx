import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const nav = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    const userToSignup = { username, email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/signup",
        userToSignup
      );
      console.log(data);
      nav("/login");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.errorMessage);
    }
  }
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Signup</button>
      </form>
      <p>
        Already a member? <Link to="/login">Login</Link>
      </p>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};
