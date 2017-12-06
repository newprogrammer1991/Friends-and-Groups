import React, {Component} from 'react'
import {getGroups} from '../AC'
import {connect} from 'react-redux'
import Group from './Group'
import Loader from "./Loader";
import {mapToArr} from '../helpers'
class GroupList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleButton = this.handleButton.bind(this)
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {groups, isLoading} = this.props;
        if (isLoading) return <Loader/>;
        const tmp = mapToArr(groups).map(item => <li key={item.get('gid')}><Group name={item.get('name')} url={item.get('photo')}/></li>);
        return <ul>{tmp}</ul>
    }

    handleButton() {
        this.setState({
            isOpen: !this.state.isOpen
        })
        if (!this.props.isLoaded) this.props.getGroups(this.props.userId);
    }

    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <button onClick={this.handleButton}>{isOpen ? 'Hide Groups' : 'Show Groups'}</button>
                {this.getBody()}
            </div>
        )

    }
}
export default connect((state, ownProps) => {
    return {
        groups: state.groups.get('entities'),
        isLoading: state.groups.get('isLoading'),
        isLoaded: state.friends.getIn(['entities', ownProps.userId, 'isLoaded'])
    }
}, {getGroups})(GroupList)