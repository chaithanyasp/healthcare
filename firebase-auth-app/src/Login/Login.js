import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async(e)=>{
    e.preventDefault();
    setError("")

    if(!email || !password){
        setError("Email and password are required");
        return
    }
    console.log(email, password);
try{
    setLoading(true)
    await signInWithEmailAndPassword(auth,email,password);
    alert("Login in Successfull")
    navigate("/dashboard");
    
}catch(err){
  if (err.code === "auth/user-not-found") {
        setError("User not found");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else {
        setError(err.message);
      }
}finally{
    setLoading(false)
}
  };
  return(
    <div className="main">
<h1>Login</h1>
<form onSubmit={handleLogin} className="formdetails"> 
<input type="email"
placeholder="Enter email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="inputfield"/>
<input
  type="password"
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
className="inputfield"
/>
{error && <p style={{ color: "red" }}>{error}</p>}
 <button type="submit" disabled={loading} className="btn">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
  Don't have an account? <Link to="/signup">Sign Up</Link>
</p>
    </div>
  )

}
export default Login;