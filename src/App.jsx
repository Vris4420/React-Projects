import { useEffect, useState } from "react";
import {User} from './User'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        setLoading(false);
      });
  },[]);


  return (
  <>
    {/* {jsx} */}

    <h1>Users List</h1>
    <ul>
      {loading ? (<h1>Loading...</h1>): (
        users.map((user) => {
          return <User key={user.id} name={user.name}/>
        })
      )}
    </ul>
  </>)
}

export default App;
