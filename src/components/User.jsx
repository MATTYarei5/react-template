import { useState, useEffect } from "react";

const User = ({ id }) => {
  const [user, setUser] = useState(null);
  const [homePlanet, setHomePlanet] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.result.properties);
      })
      .catch((err) => {
        console.error("Error fetching user data: ", err);
      });
  }, [id]);

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

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Home Planet: {homePlanet}</p>
      <button onClick={showHomePlanet}>Show Home Planet</button>
    </div>
  );
};

export default User;
