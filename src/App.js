import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';

class Main extends Component {

    render() {
        return (
      <div className="container">
          <center><h1>Caesar's Cipher</h1></center>
                  <Shift></Shift>
          <Paper elevation={10} className="child-container">
                      <Plaintext></Plaintext>
                      <Ciphertext></Ciphertext>
               </Paper>
      </div>);
    }
}

export default Main;