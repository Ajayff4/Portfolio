import React, { Component } from "react";
import SocialProfiles from "./SocialProfiles";
import Projects from "./Projects";
import profile from './assets/profile.jpg';
import './index.css';

class App extends Component {
  // constructor() {
  //   super(); //to invoke the constructor of Component class
  //   this.state = { displayBio: false };
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //   this.toggleDisplayBio = () => {
  //     this.setState({ displayBio: !this.state.displayBio});
  //   }
  // }
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  //replaced with this code.

  render() {
    return (
      <div>
        <img src={profile} alt='profile pic' className='profile' />
        <h1>Hello!</h1>
        <p>I am Ajay. </p>
        <p>I am a Software Intern.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Banglore.</p>
            <p>I love to work in Python.</p>
            <p>Besides coding, I like to listen English songs.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Show more</button>
            </div>
          )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
