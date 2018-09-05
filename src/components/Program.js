import React, {Component} from 'react';
import './Program.css';

class Program extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {program} = this.props;
        var time = new Date(Date.parse(program.start));
        time = time.toLocaleTimeString().slice(0, -3);
        return (
            <div className='program-row'>
                <div className='program-time'>
                    {time}
                </div>
                <div>
                    {program.title}
                </div>
            </div>
        )
    }
}

export default Program;