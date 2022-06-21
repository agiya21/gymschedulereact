import React from "react"

/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from '@emotion/react'

function ScheduleCardDetail(props) {
    const style = css`
                        background-image : url(${props.bgImage});
                        border-radius : 15px;
                        padding : 15px;
                        align-content : center;
                    `
    return (
        <div css={css`
                        margin-left : 10%;
                        margin-right : 10%;
                    `}>
            <br />
            <div css={style}>
                <div css={css`font-size : 150%; font-weight : bold `}> {props.class} </div>
                <p>{props.classType}</p>
                <div css={css` font-variant : small-caps`}>{props.difficulty}</div>
                By {props.instructor}<br />
                <div css={css` font-weight : bold;`}>{props.timeSchedule}</div>
                <div>{props.duration} min</div>
            </div>
        </div>
    )
}

export default ScheduleCardDetail