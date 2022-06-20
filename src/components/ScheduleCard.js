import React from "react"

function ScheduleCard(props) {
    return(
        <div>
            <p>{props.timeCategory}</p>            
            Class : {props.className}<br/>
            Type : {props.classType}<br/>
            Difficulty : {props.classDifficulty}<br/>
            Instructor : {props.instructor}<br/>
            Time Schedule : {props.timeSchedule}
            <br/>
        </div>
    )
}

export default ScheduleCard