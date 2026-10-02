import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, password, confirmPassword } = formData;
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email.";
    if (password.length < 4) return "Password must be at least 4 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
  };

  const submitRegister = (e) => {
    e.preventDefault();
    setError("");

    // 1. Validate FIRST
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    // 2. Read existing users safely
    const getData = JSON.parse(localStorage.getItem("User") || "[]");
    const users = Array.isArray(getData) ? getData : [];

    // 3. Check duplicate email
    const exists = users.some(
      (u) => u.email?.toLowerCase() === formData.email.toLowerCase()
    );
    if (exists) {
      setError("An account with this email already exists.");
      return;
    }

    // 4. Save only what's needed — note lowercase 'email' to match Login
    const newUser = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      // do NOT store confirmPassword
    };

    localStorage.setItem("User", JSON.stringify([...users, newUser]));

    setLoading(true);

    // TODO: replace with real API call
    setTimeout(() => {
      setLoading(false);
      alert("Sign up successfully");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      navigate("/");
    }, 800);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <header className="register-header">
          <h1>Create Account</h1>
          <p className="register-subtitle">
            Join Foodit and start ordering in seconds
          </p>
        </header>

        <form onSubmit={submitRegister} className="register-form">
          <div className="register-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-group">
            <label htmlFor="email">Email / Contact</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-row">
            <div className="register-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="register-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {error && <p className="register-error">{error}</p>}

          <button
            type="submit"
            className="register-submit"
            disabled={loading}
          >
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <footer className="register-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="register-link">
              Login
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Register;