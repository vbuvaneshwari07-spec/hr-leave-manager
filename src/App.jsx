import { useState, useEffect } from "react";
import LeaveForm from "./components/LeaveForm";
import LeaveList from "./components/LeaveList";
import "./App.css";

function App() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("leaves");
    if (stored) {
      setLeaves(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("leaves", JSON.stringify(leaves));
  }, [leaves]);

  const addLeave = (leave) => {
    setLeaves([...leaves, leave]);
  };

  const updateLeaveStatus = (id, status) => {
    setLeaves(
      leaves.map((leave) => (leave.id === id ? { ...leave, status } : leave)),
    );
  };
  const deleteLeave = (id) => {
    setLeaves(leaves.filter((leave) => leave.id !== id));
  };
  return (
    <div className="container">
      <h1>HR Employee Leave Management</h1>
      <LeaveForm addLeave={addLeave} />
      <LeaveList leaves={leaves} updateLeaveStatus={updateLeaveStatus} />
    </div>
  );
}

export default App;
