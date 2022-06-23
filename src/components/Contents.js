import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import ScheduleCard from "./ScheduleCard"
import DayCard from "./DayCard"

/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from '@emotion/react'

class Contents extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            dataSchedule: []
        }
    }

    /** Fetch API data with POST Request */
    componentDidMount() {
        this.setState({ isLoading: true })
        const bodyRequest = {
            selectedClub: 'FIT HUB ARTERI PONDOK INDAH',
            selectedCategory: 'ALL',
            dateFrom: '2022-05-10',
            dateTo: '2022-05-17'
        }
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyRequest)
        };
        fetch('https://asia-southeast2-thehub-965c7.cloudfunctions.net/prodtakananiumnv02/schedules/loadSchedulesPublic', requestOption)
            .then(response => response.json())
            .then(data => this.setState({
                isLoading: false,
                dataSchedule: data
            }))
    }

    render() {
        const { isLoading, dataSchedule } = this.state
        const keyTanggal = Object.keys(dataSchedule)
        console.log(keyTanggal)
        const pageStyle = css`
                                background-color : #082032;
                                color : white;
                                margin-left : 10px;
                                margin-right : 10px;
                            `
        return (
            <Router>
                <div css={pageStyle}>
                    {/** Load data from API */}
                    {isLoading === true && <h2>Loading...</h2>}

                    {/** If data is not empty, show Schedule Dates button */}
                    {/* {dataSchedule.length !== 0 ? 
                        keyTanggal.map(tanggal => {
                            return (
                                <DayCard dates={tanggal}/>
                            )
                        })
                        : null} */}
                    
                    {dataSchedule.length !== 0 ? 
                        <DayCard dates={keyTanggal} />
                        : null}
                    <hr />
                    
                    {/** Rendering Schedule Cards */}
                    {dataSchedule.length !== 0 ? keyTanggal.map(tanggal => {
                        const strTanggal = String(tanggal)
                        const dataTanggalDetail = dataSchedule[strTanggal]

                        return (
                            <Routes>
                                <Route path={strTanggal} element={
                                    <ScheduleCard
                                        tanggalSchedule={strTanggal}
                                        details={dataTanggalDetail}
                                    />}
                                />
                            </Routes>
                        )
                    }) : null}
                </div>
            </Router>

        )
    }
}


export default Contents