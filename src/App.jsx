import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import employeeService from "./services/employeeService";
import Information from "./pages/Information";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [employees, setEmployees] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedInformationUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      employeeService.setToken(user.token);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Routes>
        <Route
          path="/"
          element={
            <Information
              user={user}
              employees={employees}
              setEmployees={setEmployees}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginForm
              user={user}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              setUser={setUser}
            />
          }
        />
        <Route path="/register" element={<RegisterForm user={user} />} />
      </Routes>
    </div>
  );
}

export default App;