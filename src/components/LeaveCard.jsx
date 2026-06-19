function LeaveCard({ leave, updateLeaveStatus, deleteLeave }) {
  const getStatusColor = () => {
    if (leave.status === "Approved") return "#4caf50";
    if (leave.status === "Rejected") return "#f44336";
    return "#ff9800";
  };

  return (
    <div
      className="leave-card"
      style={{ borderLeft: `5px solid ${getStatusColor()}` }}
    >
      <div className="card-header">
        <h3>{leave.employeeName}</h3>
        <span className="status" style={{ backgroundColor: getStatusColor() }}>
          {leave.status}
        </span>
      </div>

      <p>
        <strong>Leave Type:</strong> {leave.leaveType}
      </p>
      <p>
        <strong>From:</strong> {leave.startDate} <strong>To:</strong>{" "}
        {leave.endDate}
      </p>
      <p>
        <strong>Reason:</strong> {leave.reason}
      </p>

      <div className="actions">
        {leave.status === "Pending" && (
          <>
            <button
              className="approve-btn"
              onClick={() => updateLeaveStatus(leave.id, "Approved")}
            >
              Approve
            </button>
            <button
              className="reject-btn"
              onClick={() => updateLeaveStatus(leave.id, "Rejected")}
            >
              Reject
            </button>
          </>
        )}
        <button className="delete-btn" onClick={() => deleteLeave(leave.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default LeaveCard;
