import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      {name.firstname} - {name.lastname}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
        <button onClick={handleClick}>送出</button>
      </form>
    </div>
  );
}
