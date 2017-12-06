import React, {Component} from 'react'
import {connect} from 'react-redux'
import FriendList from './FriendList'
import {handleLogin} from '../AC'

class User extends Component {
    constructor(props) {
        super(props)
        this.handleButton = this.handleButton.bind(this)
    }
    handleButton() {
        const {handleLogin} = this.props;
        handleLogin();
    }
    render() {
        const {user} = this.props;
        let template = null;
        if (user) {
            template =
                <div>
                    <h1>Hello {user}</h1>
                    <button onClick={this.handleButton}>Выйти</button>
                    <FriendList/>
                </div>
        }
        else {
            template =
                <div>
                    <button onClick={this.handleButton}>Войти</button>
                </div>
        }
        return (
            <div>{template}</div>
        )
    }
}

export default connect((state) => {
    return {
        user: state.user.get('username'),
        error:state.user.get('error')
    }
}, {handleLogin})(User)