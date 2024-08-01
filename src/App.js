import "./App.css";
import "./styles/main.scss";

import MainContent from "./components/MainContent";
import SocialIcons from "./components/SocialIcons";
import Copyright from "./components/Copyright";
import Subheader from "./components/Subheader";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="main-container">
        <Image />
        <Header />
        <Subheader />
        <MainContent />
        <div className="grid-section">
          <MainContent />
          <Image />
          <Image />
          <MainContent />
        </div>
        <MainContent />
        <Button />
      </div>
      <div className="footer-container">
        <SocialIcons />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
