import React from "react"

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


function DayCard(props) {
    return(
        <div css={css`color : hotpink`}>
            Ini hari {props.dayname}, Tanggal {props.tanggal}
        </div>
    )
}

export default DayCard