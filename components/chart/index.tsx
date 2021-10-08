import React from 'react'
import {Chart} from './chart'
import {mockedAreasData} from './areas-dat'

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
