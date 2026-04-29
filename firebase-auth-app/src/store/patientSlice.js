import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "John Doe", age: 32, condition: "Diabetes" },
  { id: 2, name: "Jane Smith", age: 28, condition: "Hypertension" },
  { id: 3, name: "Rahul Kumar", age: 45, condition: "Asthma" },
  { id: 4, name: "Priya Sharma", age: 36, condition: "Thyroid" }
];

const patientSlice = createSlice({
    name:"patients",
    initialState,
    reducers:{
        addPatient:(state,action)=>{
            state.push(action.payload);
        }
    }
});
export const {addPatient} = patientSlice.actions;
export default patientSlice.reducer;