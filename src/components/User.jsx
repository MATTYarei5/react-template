import { useState, useEffect } from "react";

const User = ({ id }) => {
  const [user, setUser] = useState(null);
  const [homePlanet, setHomePlanet] = useState(null);

  const showHomePlanet = () => {
    fetch(user.homeworld)
      .then((res) => res.json())
      .then((data) => {
        setHomePlanet(data.result.properties.name);
      })
      .catch((err) => {
        console.error("Home Planet Error: ", err);
      });
  };

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.result.properties);
      })
      .catch((err) => {
        console.error("Error fetching user data: ", err);
      });
  }, [id]);

  return (
    <div>
      {!user ? (
        <p>Loading user data...</p>
      ) : (
        <>
          <h1>{user.name}</h1>
          <p>Home Planet: {homePlanet}</p>
          <button onClick={showHomePlanet}>Show Home Planet</button>
        </>
      )}
    </div>
  );
};

export default User;
