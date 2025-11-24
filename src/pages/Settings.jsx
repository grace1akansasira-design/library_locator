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
      setMessage("NEW PASSWORD AND CONFIRM PASSWORD DO NOT MATCH.");
      return;
    }

    setMessage("PASSWORD CHANGED SUCCESSFULLY!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 uppercase">
          SYSTEM SETTINGS
        </h1>

        {/* Password Change Section */}
        <div className="bg-gray-50 p-6 rounded shadow-md space-y-4 border">
          <h2 className="text-2xl font-semibold text-gray-700 uppercase">
            Change Admin Password
          </h2>

          <div className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="border w-full p-2 rounded"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              className="border w-full p-2 rounded"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="border w-full p-2 rounded"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-green-600 text-white w-full p-2 rounded font-semibold"
            onClick={handleChangePassword}
          >
            UPDATE PASSWORD
          </button>

          {message && (
            <p className="text-center text-blue-700 font-bold mt-2">
              {message}
            </p>
          )}
        </div>

        {/* System Info Section */}
        <div className="mt-8 bg-white p-6 rounded shadow border">
          <h2 className="text-2xl font-semibold text-gray-700 uppercase mb-4">
            SYSTEM INFORMATION
          </h2>

          <div className="space-y-2 text-gray-800">
            <p><span className="font-semibold">VERSION:</span> 1.0.0</p>
            <p><span className="font-semibold">NUMBER OF BOOKS:</span> 4</p>
            <p><span className="font-semibold">ADMIN USER:</span> ADMIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
