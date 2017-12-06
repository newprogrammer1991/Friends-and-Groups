import React, {Component} from 'react'
import GroupList from './GroupList'


class Friend extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {friend} = this.props;

        return (
            <li>
                <img style={{width: 100 + 'px'}} src={friend.get('photo_100')}></img>
                <h2>{friend.get('first_name')} {friend.get('last_name')}</h2>
                <GroupList userId={friend.get('user_id')}/>
            </li>
        )
    }

};

export default Friend