import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Registration Successfull");

    
      navigate("/");

    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already registered");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        className="inputfield"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         className="inputfield"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading} className="btn">
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;