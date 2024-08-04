import "./styles/main.scss";
import Data from "./components/Data";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        {Data.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
