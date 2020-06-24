import React from 'react';

class App extends React.Component {

  pigLatin = (english) => {
    // https://edstem.org/courses/4230/challenges/15985
    // logic for translating english to pig latin
    // return something
    if(english ===""){
      return ""
    }
    let newArr = [];
    let phraseArr = english.split(" ")
    phraseArr.forEach((word)=>{
      let newWord = word.substring(1,word.length)+word.charAt(0)+"ay"
      newArr.push(newWord);
    })
    return newArr.join(" ")
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const english = event.target[0].value
    const result = this.pigLatin(english)
    this.setState({ pigLatin: result })
  }

  render() {
    const pigLatin = this.state?.pigLatin
    return (
      <div className="container">
        <h1>Convert english to pig latin! 🐷</h1>
        <form onSubmit={this.handleSubmit} >
          <textarea name="pig" id="pig"></textarea>
          <input type="submit" value="Convert"/>
        </form>
        <h1>Output</h1>
        <div className="output">
          <h2>{pigLatin}</h2>
        </div>
      </div>
    );
  }
}

export default App;

// todo

// 1. write the pigLatin function and pass all of the tests
// 2. put the pig latin into the output box