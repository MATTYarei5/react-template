import { Component } from "react";

class Cards extends Component {
  buttonClick = () => {
    console.log(this.props.profile.name);
  };

  render() {
    const { profile } = this.props;

    return (
      <div className="cards">
        <img src={profile.image} />
        <div className="details">
          <h2>{profile.name}</h2>
          <p>Age: {profile.age}</p>
          <div className="discription">
            <p>Discription: {profile.discription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
