import { useEffect, useState } from "react";

function Child() {
  const [name, setName] = useState("Enter name");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`${name}`);
    }, 1000);

    // cleanup
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <div>
        {name} ----- {age}
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br />
      <div>
        <button onClick={() => setAge((currAge) => currAge + 1)}>+</button>
        <button onClick={() => setAge((currAge) => currAge - 1)}>-</button>
      </div>
    </div>
  );
}

export default Child;
