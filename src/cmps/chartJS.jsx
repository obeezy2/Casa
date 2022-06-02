import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { toyService } from '../services/toy.service'
import { utilService } from '../services/util.service'
ChartJS.register(ArcElement, Tooltip, Legend)




export class DashBoard extends React.Component {
    state = {

        dataCharts: []

    }
    componentDidMount() {
        toyService.getDataForCharts()
            .then((data) => {
                this.setState({ dataCharts: data })

            })
    }

    render() {
        const { dataCharts } = this.state
        console.log(this.state)
        return <section className="dash-board">
            <h2>Charts</h2>
            <div className="charts-container">
                {dataCharts.map((chart) =>

                    <div key={chart.title} className="chart">
                        <h1>{chart.title}</h1>
                        <Doughnut className='' data={chart} />
                    </div>
                )}
            </div>


        </section>
    }
}



