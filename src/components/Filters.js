import React, {Component} from 'react';
import axios from 'axios';
import Filter from './Filter';

import 'bootstrap/dist/css/bootstrap.css';


class Filters extends Component {
    state = {
        options: []
    };

    componentDidMount() {
        axios.get('http://epg.domru.ru/programgenre/mainlist').then((response) => {
            // let options = response.data.map((genre) =>
            //     <option key={genre.tid} value={genre.tid}>
            //         <Checkbox checked={genre.checked} value={genre.tid} />
            //         {genre.title}
            //     </option>
            // );
            this.setState({
                options: response.data
            })
        })
    };

    render() {
        return (
            <div className='row'>
                <div className='col-xs-12 col-sm-4'>
                   <Filter options={this.state.options} />
                </div>

                <div className='col-xs-12 col-sm-1'>
                    5
                </div>
            </div>
        )
    }
}

export default Filters;