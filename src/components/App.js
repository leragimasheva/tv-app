import React, {Component} from 'react';
import Search from './Search';
import ChannelCard from './ChannelCard';
import axios from 'axios';

import './App.css';


const chid = 3163;
const domain = 'perm';

class App extends Component {
    state = {
        channel: {},
        program: []
    };

    componentDidMount() {
        //канал
        var self = this;
        axios.get('http://epg.domru.ru/channel/info', {
            params: {
                domain: domain,
                chid: chid
            }
        }).then(function (channelResponse) {
            self.setState({
                channel: channelResponse.data
            });
            let dateFrom = new Date();
            //местное время
            dateFrom.setMinutes(dateFrom.getMinutes() - dateFrom.getTimezoneOffset());
            //чтоб получить программу, которая уже началась, но не закончилась
            dateFrom.setHours(dateFrom.getHours() - 5);
            var dateFromString = dateFrom.toJSON();
            //телепрограмма на сутки
            dateFrom.setDate(dateFrom.getDate() + 1);
            var dateToString = dateFrom.toJSON();
            //программа передач этого канала
            axios.get('http://epg.domru.ru/program/list', {
                params: {
                    domain: domain,
                    date_from: dateFromString,
                    date_to:dateToString,
                    xvid: [channelResponse.data.xvid]
                }
            }).then((programResponse) => {
                self.setState({
                    program: programResponse.data[channelResponse.data.xvid]
                })
            })
        });
    };

    render() {
        return (
            <div>
                <h3 className='tv-header'>Телепрограмма</h3>
                <Search/>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-lg-4'>
                        <ChannelCard schedule={this.state.program} channel={this.state.channel}/>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-4'>
                        <ChannelCard schedule={this.state.program} channel={this.state.channel}/>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-4'>
                        <ChannelCard schedule={this.state.program} channel={this.state.channel}/>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-4'>
                        <ChannelCard schedule={this.state.program} channel={this.state.channel}/>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-4'>
                        <ChannelCard schedule={this.state.program} channel={this.state.channel}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
