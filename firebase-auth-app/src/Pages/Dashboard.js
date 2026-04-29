import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Pages.css"; 
function Dashboard() {

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div >
      <h1 className="dashboard" >Welcome to Dashboard</h1>
      <p className="pretext">
  Empowering smarter healthcare decisions.
</p>  
<div className="container">
    <div className="section">
        <p>Securely log out from your account.</p>
  <button  onClick={handleLogout} className="button">Logout</button>
    </div>
<div  className="section">
      <p>View insights and track system performance in Analytics.</p>
  <button onClick={() => window.location.href = "/analytics"} className="button">Go to Analytics
</button>
</div>
    <div  className="section">
           <p>Manage patient records and details efficiently.</p>
 <button onClick={() => window.location.href = "/patientDetails"} className="button">
  Go to Patient
</button>
    </div>

</div>
    
    </div>
  );
}

export default Dashboard;