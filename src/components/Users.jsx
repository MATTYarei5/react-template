import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  }, []);

  return (
    <div>
      <h1>StarWars Characters</h1>
      <ul>
        {users.map((character) => (
          <li key={character.uid}>
            <Link to={`/user/${character.uid}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
