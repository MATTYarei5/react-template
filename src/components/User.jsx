import { useState, useEffect } from "react";

const User = (props) => {
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
    console.log(props.match.params.id);
    fetch(`https://www.swapi.tech/api/people/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.result.properties);
      })
      .catch((err) => {
        console.error("Error fetching user data: ", err);
      });
  }, []);

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
