import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MagnifyIcon} from 'mdi-react';
import {withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import 'bootstrap/dist/css/bootstrap.css';
import './Search.css';

const styles = theme => ({
    root: {
        'margin-top': -5
    },
    switchBase: {
        '&$checked': {
            color: theme.palette.common.white,
            '& + $bar': {
                backgroundColor: '#00993B',
                'box-shadow': 'inset 0 1px 3px 0 rgba(0,0,0,0.50)'
            },
        },
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.sharp,
        }),
    },
    checked: {
        transform: 'translateX(15px)',
        '& + $bar': {
            opacity: 1,
            border: 'none',
        },
    },
    bar: {
        borderRadius: 100,
        width: 40,
        height: 24,
        marginTop: -12,
        marginLeft: -20,
        border: 'solid 1px',
        borderColor: theme.palette.grey[400],
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    icon: {
        width: 22,
        height: 22
    },
    iconChecked: {
        boxShadow: '2px 0 2px 0 rgba(0,0,0,0.12)'
    },
});

class Search extends Component {
    state = {
        hdChecked: true
    };

    handleChange = event => {
        this.setState({hdChecked: event.target.checked});
    };

    render() {
        const {classes} = this.props;
        const hdSwitch = <Switch
            checked={this.state.hdChecked}
            onChange={this.handleChange}
            value='hdChecked'
            classes={classes}
            disableRipple
        />;
        return (
            <div className='row'>
                <div className='col-xs-12 col-sm-8'>
                    <div className='search-container'>
                        <MagnifyIcon className='search-icon'/>
                        <input className='search-control' placeholder='Поиск по телепрограмме'/>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-4'>
                    <FormControlLabel control={hdSwitch} label="Только HD-каналы"/>
                </div>
            </div>
        );
    }
}
Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);