import React, { Component } from 'react';
import './App.css';
import InputWindow from "./components/InputWindow";
import marked from 'marked'
import { debounce } from "debounce";

class App extends Component {
    state = {
        markdownInput:"",
    };

    addMarkdown = (str) => {
        str=marked(str);
        this.setState({ markdownInput:(str), });
        console.log(1)
    };
    createMarkup=() => {
        return {__html: this.state.markdownInput};
    };

  render() {
    return (
      <div className="App">
        <h1>Markdown Preview</h1>
        <InputWindow
         addMarkdown={this.addMarkdown}/>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}

export default App;
