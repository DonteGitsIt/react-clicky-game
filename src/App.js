import React, { Component } from 'react';
import Header from './components/Header'
import Container from './components/Container'
import Card from './components/Card'
import characters from './characters.json'
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    highscore: 0
  }
  gameEnd = () => {
    
    this.state.characters.forEach(character => {
      character.clicked = false;
    });
    alert(`Oops you already Clicked that! \nscore: ${this.state.score}`);

    if(this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score})
      alert('New highscore!')
    }
    this.setState({score: 0});
    return true;
  }
  beenClicked = id => {
    this.state.characters.find((element, location) => {
      if (element.id === id) {
        console.log(element.name + " has been clicked!")
        if(characters[location].clicked === false){
          characters[location].clicked = true;
          this.setState({score: this.state.score + 1})

          this.state.characters.sort(() => 0.5 - Math.random())
          return true; 
        } else {
          this.gameEnd()
        }
      }
    })
  }

  render() {
    return (
      <div>
        
        <Container>
        <Header
        score = {this.state.score}
        highscore = {this.state.highscore}
        >
        
          Anime Clicky Game
        </Header>
          {this.state.characters.map( character => {
            return (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                beenClicked={this.beenClicked}
                />

            )
          })}
          
        </Container>
      </div>


    );
  }
}

export default App;
