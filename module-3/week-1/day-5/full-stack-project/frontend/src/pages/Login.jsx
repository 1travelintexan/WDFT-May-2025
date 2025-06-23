import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const nav = useNavigate();

  //to grab data from the context
  const { storeToken, authenticateUser } = useContext(AuthContext);
  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = { email, password };
    try {
      const res = await axios.post(
        "http://localhost:5005/auth/login",
        userToLogin
      );
      console.log(res);
      //call the function from the auth context
      storeToken(res.data.authToken);
      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.errorMessage);
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
      <p>
        New Here? <Link to="/">Signup</Link>
      </p>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};
