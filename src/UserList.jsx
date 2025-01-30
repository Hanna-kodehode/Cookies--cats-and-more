import { useState, useEffect } from "react";
import styles from "./assets/Module/styles.module.css";

function Users() {
  const defaultUsers = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : defaultUsers;
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = () => {
    if (username && email) {
      const newUser = { username, email };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setUsername("");
      setEmail("");
    }
  };

  const handleRemoveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleResetList = () => {
    setUsers(defaultUsers);
  };

  return (
    <div className={styles.userbg}>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <p key={index}>
            {user.username} - {user.email}
            <button
              className={styles.smallButton}
              id="smallButton"
              onClick={() => handleRemoveUser(index)}
            >
              Remove
            </button>
          </p>
        ))}
      </ul>

      <h3>Add a New User</h3>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <button onClick={handleResetList}>Reset List</button>
    </div>
  );
}

export default Users;
