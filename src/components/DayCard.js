import React from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


function DayCard(props) {
    const dataDates = props.dates
    const navStyle = css`
                            color : white;
                            background-color : #F3C622;
                            &:hover {
                                background-color : #F3C622;
                                color : black;
                            }
                            &:active {
                                background-color : #F3C622;
                                text-decoration : none;
                            }
                            &:focus {
                                background-color : #F3C622
                            }
                        `

    return(
        <div>
            <Nav variant="pills" className="justify-content-center" activeClassName="active">
            {dataDates.length !== 0 ? dataDates.map(tanggal => {
                const d = String(new Date(tanggal.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')))
                const daysName =  d.slice(0,3)
                const days = tanggal.slice(6,8)
                const monthYear = tanggal.slice(4,6) +"/" +  tanggal.slice(0,4)
                return(
                    <Link to={tanggal}>
                        <Nav.Item>
                            <Nav.Link css={css`text-decoration :`} href={tanggal}>{daysName} {days} {monthYear}</Nav.Link>
                        </Nav.Item>
                    </Link>
                )
            }) : null}
            </Nav>
        </div>
        
    )
}

export default DayCard

// function DayCard(props) {
//     const dateString = String(props.dates) // --> 20220510

//     // Convert date to strings
//     const d = String( new Date(dateString.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')) ) 
    
//     // Slicing date to get Day Name
//     const daysName = d.slice(0,3)
//     const days = dateString.slice(6,8)
//     const monthYear = dateString.slice(4,6) +"/" +  dateString.slice(0,4)

//     const btnStyle = css` background-color : #F3C622; color : black`

    
//     return(
//         <div>
//             <Link to={dateString}>
//                 <Button css={btnStyle}> {daysName} {days} {monthYear} </Button>
//             </Link>
//         </div>
//     )
// }