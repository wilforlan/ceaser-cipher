import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


class Ciphertext extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter ciphertext"
            value={this.props.cipherText}
          />
        </center>
      </div>);
    }
}

export default Ciphertext;
