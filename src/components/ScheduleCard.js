import React from "react"
import ScheduleCardDetail from "./ScheduleCardDetail"

/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from '@emotion/react'


function ScheduleCard(props) {
    const dataDetails = props.details
    const pStyle = css` margin-left : 10%; margin-right : 10% `
    return (
        <div>
            {/** Rendering Morning Schedules */}
            <p css={pStyle}>Morning</p>
            {
                dataDetails.length !== 0 ? dataDetails.map(item => {
                    if (item.timeCategory === 'morning') {
                        return (
                            <div>
                                <ScheduleCardDetail
                                    class={item.className}
                                    classType={item.classType}
                                    difficulty={item.classDifficulty}
                                    instructor={item.instructor}
                                    timeSchedule={item.timeSchedule}
                                    bgImage={item.backgroundImage}
                                    duration={item.classDuration}
                                />
                            </div>
                        )
                    }
                }) : null
            }

            <hr />

            {/** Rendering Evening Schedules */}
            <div css={pStyle}>Evening</div>
            {
                dataDetails.length !== 0 ? dataDetails.map(item => {
                    if (item.timeCategory === 'evening') {
                        return (
                            <div>
                                <ScheduleCardDetail
                                    class={item.className}
                                    classType={item.classType}
                                    difficulty={item.classDifficulty}
                                    instructor={item.instructor}
                                    timeSchedule={item.timeSchedule}
                                    bgImage={item.backgroundImage}
                                    duration={item.classDuration}
                                />
                            </div>
                        )
                    }
                }) : null
            }

        </div>
    )
}

export default ScheduleCard