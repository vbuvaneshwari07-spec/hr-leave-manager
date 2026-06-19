import { useState } from "react";
import LeaveCard from "./LeaveCard";

function LeaveList({ leaves, updateLeaveStatus, deleteLeave }) {
  const [filter, setFilter] = useState("All");

  const filteredLeaves = leaves.filter((leave) => {
    if (filter === "All") return true;
    return leave.status === filter;
  });

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2>Leave Requests</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      {filteredLeaves.length === 0 ? (
        <p>No {filter.toLowerCase()} requests</p>
      ) : (
        filteredLeaves.map((leave) => (
          <LeaveCard
            key={leave.id}
            leave={leave}
            updateLeaveStatus={updateLeaveStatus}
            deleteLeave={deleteLeave}
          />
        ))
      )}
    </div>
  );
}

export default LeaveList;
