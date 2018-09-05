import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';

import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {options} = this.props;
        let optionElements = options.map((option) =>
            <MenuItem key={option.tid} value={option.tid}>
                <Checkbox checked={option.checked} value={option.tid}/>
                {option.title}
            </MenuItem>
        );
        return (
            <Select
                value={options}
                multiple
                input={<Input id="select-multiple-checkbox" />}
                renderValue={() => 'Жанры передач'}
            >
                {optionElements}
            </Select>

        )
    }
}

export default Filter;