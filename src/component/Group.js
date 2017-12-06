import React from 'react'

const Group = (props) => {

    return (
        <div>
            <h5>{props.name}</h5>
            <img src={props.url}></img>
        </div>)
}

export default Group