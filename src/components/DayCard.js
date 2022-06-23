import React from "react"
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import './Nav.css'


/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'


function DayCard(props) {
    const dataDates = props.dates
    const navStyle = css`
                            text-align : center;
                            font-weight : bold;
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

    return (
        <div>
            <Nav variant="pills" className="justify-content-center" activeClassName="active">
                {dataDates.length !== 0 ? dataDates.map(tanggal => {
                    const d = String(new Date(tanggal.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'))) // Converting Date Format --> Tue 20 Mar 2022
                    const daysName = d.slice(0, 3)
                    const days = tanggal.slice(6, 8)
                    const monthYear = tanggal.slice(4, 6) + "/" + tanggal.slice(0, 4)
                    return (
                        <Link to={tanggal}>
                            <Nav.Item>
                                <Nav.Link css={navStyle} href={tanggal}>
                                    {daysName}<br/>
                                    <p css={css` font-size : 30px;`}>{days}</p>
                                    {monthYear}
                                </Nav.Link>
                            </Nav.Item>
                        </Link>
                    )
                }) : null}
            </Nav>
        </div>

    )
}

export default DayCard
