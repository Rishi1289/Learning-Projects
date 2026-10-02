import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);

    const stored = localStorage.getItem("User");
    const getDetails = stored ? JSON.parse(stored) : [];

    // Ensure it's an array
    const users = Array.isArray(getDetails) ? getDetails : [getDetails];

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      alert("Login Successfully");
      navigate("/Home");
    } else {
      alert("Password or Email is Incorrect");
    }
  };

  return (
    <div className="loginpage">
      <div className="loginbox">
        <h1>Foodit Login</h1>

        <form onSubmit={submitLogin}>
          <div className="InputGroup">
            <label htmlFor="email">Email/Contact</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="InputGroup">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="bottom">
            <button type="submit">Login</button>
            <p>
              Don't have an account? <Link to="/Register">Register/Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;