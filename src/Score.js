import React, { Component } from 'react'

class Score extends Component {
    render() {
        return(
            <div>
            <p>{this.props.score.date}</p>
            <p>{this.props.score.score}</p>
            </div>
        )
    }
}
export default Score
