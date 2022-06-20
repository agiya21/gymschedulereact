import React from "react"
import DayCard from './DayCard'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ScheduleCard from "./ScheduleCard"

class Contents extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            dataSchedule: []
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const bodyRequest = {
            selectedClub: 'FIT HUB ARTERI PONDOK INDAH',
            selectedCategory: 'ALL',
            dateFrom: '2022-05-10',
            dateTo: '2022-05-11'
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
        const dataTanggal = Object.keys(dataSchedule)
        

        return (
            <div>
                {isLoading === true && <h2>Loading...</h2>}
                {dataSchedule.length != 0 ? 
                    dataTanggal.map(tanggal => {
                        return(
                            <div>{tanggal}</div>
                        )
                    })
                : null}

                {/** }
                {dataSchedule.length != 0 ? datas.map(item => {
                    return(
                        <ScheduleCard 
                            instructor={item.instructor}
                            classDifficulty={item.classDifficulty}
                            className={item.className}
                            classType={item.classType}
                            classDuration={item.classDifficulty}
                            locationSchedule={item.locationSchedule}
                            timeCategory={item.timeCategory}
                            timeSchedule={item.timeSchedule}
                            />
                    )
                }) : null
                }
                { */}

            </div>
        )
    }
}


export default Contents