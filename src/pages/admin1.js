import { useState } from "react";
import AdminUpload from "@/components/AdminUpload";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      setLoggedIn(true);
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="login">
          <h1>Admin Login</h1>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <AdminUpload />
      )}
    </div>
  );
}
