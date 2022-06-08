
import React, { Component } from 'react';
import Student from './Student'

class Roster extends Component {
    render(){
        let allStudents = this.props.students.map(item=>{
            return <Student student={item}/>
        })
        return(
            <div>
                {allStudents}
            </div>
        )
    }
}

export default Roster
