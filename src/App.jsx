import { useState } from "react";
import Cookie from "./Cookie.jsx";
import CatFacts from "./CatFacts.jsx";
import UserList from "./UserList.jsx";

function App() {
  const [count, setCount] = useState(0);

  const resetCount = () => setCount(0);

  return (
    <div id="root">
      <div className="card">
        <Cookie count={count} setCount={setCount} resetCount={resetCount} />
      </div>

      <div className="card">
        <CatFacts />
      </div>

      <div className="card">
        <UserList />
      </div>
    </div>
  );
}

export default App;
