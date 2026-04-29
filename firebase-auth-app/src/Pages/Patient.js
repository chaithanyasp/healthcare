import { useState , useEffect} from "react";
import "./Patient.css";
import { useDispatch, useSelector } from "react-redux";
import { addPatient } from "../store/patientSlice";
import { requestPermission, showNotification } from "../utils/notification";

function Patients() {
  const [view, setView] = useState("grid");
//    const [patients, setPatients] = useState([]);
const dispatch = useDispatch();
const patients = useSelector((state) => state.patients);

  const [form, setForm] = useState({
    name: "",
    age: "",
    condition: ""
  });

   useEffect(() => {
    requestPermission(); // ask permission
  }, []);

const handleAddPatient = () => {
    if (!form.name || !form.age) return;

    const newPatient = {
      id: Date.now(),
      ...form
    };

    // setPatients([...patients, newPatient]);
   dispatch(addPatient(newPatient)); 

    showNotification(form.name);

    // reset form
    setForm({ name: "", age: "", condition: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Patient Details</h1>

      <div  className="mainbox">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="inputfield"
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
            className="inputfield"
        />
        <input
          placeholder="Condition"
          value={form.condition}
          onChange={(e) => setForm({ ...form, condition: e.target.value })}
        className="inputfield"
        />
        <button onClick={handleAddPatient} className="bttn">
          Add Patient
        </button>
      </div>
      {/*  Toggle */}
     <h1 >Toggle between views</h1> 
      <div className="togglebox">
        <button onClick={() => setView("grid")} className="toogleview">Grid View</button>
        <button onClick={() => setView("list")}className="toogleview">
          List View
        </button>
      </div>

      {/*  Grid View */}
      {view === "grid" && (
        <div className="gridContainer">
          {patients .map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>Age: {p.age}</p>
              <p>Condition: {p.condition}</p>
            </div>
          ))}
        </div>
      )}

      {/*  List View */}
      {view === "list" && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody  style={{ textAlign: "center" }}>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Patients;