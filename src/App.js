import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
    constructor() {
    super();
    this.state = {
      indexTable: {},
      letters: 'abcdefghijklmnopqrstuvwxyz',
      cipherText: "",
      plainText: "hello"
    };
  }

  
  createWordIndex = () => {
      const { letters } = this.state;
      let table = {}
      for (let index = 0; index < letters.length; index++) {
          const element = letters[index];
          table[element] = index + 1;
      }
      this.setState({ indexTable: table });
  };

  componentDidMount(){
    // create index for easy and faster mapping
    this.createWordIndex();
  }

  findLetterInIndex = (value) => {
    const { indexTable } = this.state;
    return Object.keys(indexTable).find(key => indexTable[key] === value);
  };

  encrypt = (word = "", shift = 1) => {
    const { indexTable } = this.state;
    let result = word.split('').map( letter => {
        let currIndex = indexTable[letter];
        if(currIndex) return this.findLetterInIndex(currIndex + shift)
        else return letter
    });
    return result.join('');
  };

  handleShiftChange = (shift) => {
    console.log("Working")
    let { plainText } = this.state;
    let cipherText = this.encrypt(plainText, shift);
    console.log({ cipherText })
    this.setState({ cipherText, shift })
  };

  handlePlainTextInput = (text) => {
    let { shift } = this.state;
    let cipherText = this.encrypt(text, shift);
    this.setState({ cipherText, shift })
  };

    render() {
      return (
        <div className="container">
            <center><h1>Caesar's Cipher</h1></center>
            <Shift onChange={this.handleShiftChange}></Shift>
            <Paper elevation={10} className="child-container">
                  <Plaintext onChange={this.handlePlainTextInput}></Plaintext>
                  <Ciphertext cipherText={this.state.cipherText}></Ciphertext>
            </Paper>
        </div>
      );
    }
}

export default Main;