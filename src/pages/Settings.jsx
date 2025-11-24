import { useState } from "react";
import Navbar from "../components/Navbar";


function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    setMessage("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Navbar />

      <div className="settings-container">
        <h1 className="settings-title">System Settings</h1>

        {/* Password Change Section */}
        <div className="settings-card">
          <h2 className="settings-subtitle">Change Admin Password</h2>

          <div className="settings-form">
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="input-field"
            />
          </div>

          <button className="btn-update" onClick={handleChangePassword}>
            Update Password
          </button>

          {message && <p className="message">{message}</p>}
        </div>

        {/* System Info Section */}
        <div className="settings-card mt-6">
          <h2 className="settings-subtitle">System Information</h2>
          <div className="system-info">
            <p><span className="info-label">Version:</span> 1.0.0</p>
            <p><span className="info-label">Number of Books:</span> 4</p>
            <p><span className="info-label">Admin User:</span> ADMIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
