import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ChevronDownIcon, ChevronUpIcon} from 'mdi-react';
import Program from './Program'

import './ChannelCard.css';

class ChannelCard extends Component {
    state = {
        isCollapsed: true
    };

    constructor(props) {
        super(props);
    }

    handleClick = event => {
        this.setState({isCollapsed: !this.state.isCollapsed});
    };

    render() {
        const {schedule, channel} = this.props;
        var programs = [];
        if (schedule && schedule.length > 0) {
            var nearestProgramIndex = schedule.findIndex(function (prog) {
                var now = new Date();
                var time = new Date(Date.parse(prog.start));
                return time > now;
            });
            schedule.splice(0, nearestProgramIndex - 1);
            programs = schedule ? schedule.map(function (program) {
                return <Program program={program}/>
            }) : [];
        }

        var link;
        var cardClasses = "channel-card";
        var programListClasses = "";
        var programList;
        if (this.state.isCollapsed) {
            link = <a className='text-dotted' onClick={this.handleClick}>
                Развернуть
                <ChevronDownIcon/>
            </a>;
            programListClasses = "program-list-collapsed";
        } else {
            link = <a className='text-underline' onClick={this.handleClick}>
                Свернуть
                <ChevronUpIcon/>
            </a>;
            cardClasses += ' channel-card-full';
            programListClasses = "program-list-full";
        }
        return (
            <div className={cardClasses}>
                <div className='padding-bottom-15'>
                    <img src={'http://epg.domru.ru' + channel.logo}/>
                    <a href=''>{channel.title}</a>
                </div>
                <div className={programListClasses}>
                    {programs}
                </div>
                <div className='text-center'>
                    {link}
                </div>
            </div>
        )
    }
}

export default ChannelCard;