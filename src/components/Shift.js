import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Shift extends Component {

  render() {
    return (
      <div className="shift">
        <center>
          <Select
            autoWidth={true}
            displayEmpty>
            <MenuItem value="" disabled>Enter shift amount</MenuItem>
          </Select>
        </center>
      </div>
    );
  }
  
};


export default Shift;