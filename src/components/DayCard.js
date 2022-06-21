import React from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


function DayCard(props) {
    const date = props.dates

    // Convert date to strings
    const d = String( new Date(date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')) ) 
    
    // Slicing date to get Day Name
    const daysName = d.slice(0,3)

    const btnStyle = css` background-color : #F3C622; color : black`
    return(
        <div>
            <Link to={date}>
                <Button css={btnStyle}> {daysName} {date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')} </Button>
            </Link>
        </div>
    )
}

export default DayCard