import React, {Component} from 'react'
import Friend from './Friend'
import {connect} from 'react-redux'
import {getFriends} from '../AC'
import Loader from './Loader'
import {mapToArr} from '../helpers'
import user from "../reducer/user";

class FriendList extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        const {friends, isLoading} = this.props;
        if (isLoading) return <Loader/>
        const listItems = mapToArr(friends).map((friend) => {
            return <Friend key={friend.get('uid')} friend={friend}/>
        })
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default connect((state) => {
        return {
            friends: state.friends.get('entities'),
            isLoading: state.friends.get('isLoading')
        }
    }, {getFriends}
)(FriendList)
