//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import Baseball from "./baseball.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    Baseball,
    clickedBaseball: [],
    score: 0
  };
  //event to click images add .5
  imageClick = event => {
    const currentBaseball = event.target.alt;
    const BaseballAlreadyClicked =
      this.state.clickedBaseball.indexOf(currentBaseball) > -1;
    if (BaseballAlreadyClicked) {
      this.setState({
        Baseball: this.state.Baseball.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedBaseball: [],
        score: 0
      });
      //lose alert
        alert("You lose. Play again?");
    } else {
      this.setState(
        {
          Baseball: this.state.Baseball.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedBaseball: this.state.clickedBaseball.concat(
            currentBaseball
          ),
          score: this.state.score + 1
        },       
        () => {
          if (this.state.score === 10) {
            //win alert
            alert("You won!");
            this.setState({
              Baseball: this.state.Baseball.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedBaseball: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Baseball.map(Baseball => (
            <FriendCard
              imageClick={this.imageClick}
              id={Baseball.id}
              key={Baseball.id}
              image={Baseball.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;