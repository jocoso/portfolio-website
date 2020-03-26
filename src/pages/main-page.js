import React from "react";

import ProfileImage from "../components/profile-image";
import Header from "../components/header";

class MainPage extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Header title="I am Josh, Nice meeting you" size={16} />
        <ProfileImage src="https://i.pinimg.com/originals/25/63/d6/2563d6cecdd594dcbe9ad4db385319e3.jpg" shape="circle"/>
      </div>
    );
  }
}

export default MainPage;
