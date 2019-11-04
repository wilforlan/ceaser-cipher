import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Plaintext extends Component {

    constructor(props) {
      super(props);
    }


    render() {
        return (
      <div className="left">
        <center>
          <h2>Plaintext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter plaintext"
            onChange={this.onChange}
          />
        </center>
      </div>);
    }
}
export default Plaintext;
