import React, {Component} from 'react'

import Score from './Score'
class Student extends Component {
    render() {
        let scores = this.props.student.scores.map(item => {
            return <Score score={item} />
        })
        return (
            <div>
            <p>{this.props.student.name}</p>
            <p>{this.props.student.bio}</p>
            {scores}
            </div>
        )
    }
}

export default Student
