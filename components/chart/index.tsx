import React from 'react'
import {Chart} from './chart.tsx'
import {mockedAreasData} from './areas-dat.tsx'

const Index = () => {
    console.log('index', mockedAreasData)
    return (
        <div>
            <Chart
            areas={mockedAreasData}
            />
        </div>
    )
}

export default Index
