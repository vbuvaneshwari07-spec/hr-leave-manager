import { useState } from "react";

function LeaveForm({ addLeave }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    leaveType: "Sick Leave",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.employeeName ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.reason
    ) {
      alert("Fill all required fields");
      return;
    }

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      alert("End Date must be after Start Date");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(formData.startDate) < today) {
      alert("Cannot apply leave for past dates");
      return;
    }

    const newLeave = {
      id: Date.now(),
      ...formData,
      status: "Pending",
    };

    addLeave(newLeave);

    setFormData({
      employeeName: "",
      leaveType: "Sick Leave",
      startDate: "",
      endDate: "",
      reason: "",
    });
  };

  return (
    <div className="card">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />

        <select
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
        >
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Emergency Leave</option>
          <option>Vacation</option>
        </select>

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason for leave"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Leave</button>
      </form>
    </div>
  );
}

export default LeaveForm;
