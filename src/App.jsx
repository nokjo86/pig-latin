import React from 'react';

class App extends React.Component {

  pigLatin = (english) => {

    let translation = english.split(' ').map(word =>{
      word = word.substring(1,word.length) + word.charAt(0) + "ay"
      return word
    })
    return translation.join(" ")

  }

  handleSubmit = (event) => {
    const english = event.target.value
    let result = this.pigLatin(english)
    if(document.getElementById('pig').value===""){
      result=""
      console.log("NOOOOOOOOO")
    }
    this.setState({ pigLatin: result })
  }

  render() {
    const pigLatin = this.state?.pigLatin

    return (
      <div className="container">
        <h1>Convert english to pig latin!</h1>
        <form onSubmit={this.handleSubmit} >
          <textarea onKeyDown={this.handleSubmit} name="pig" id="pig"></textarea>
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