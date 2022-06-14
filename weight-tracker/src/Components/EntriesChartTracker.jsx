import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const EntriesChartTracker = ({ entries }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let tempChartData = entries.map((entry) => {
            return [entry.date, entry.weight];
        });
        setChartData(tempChartData);
    }, [entries]);

    return (
        <Chart
            chartType="LineChart"
            data={[["Date", "Weight"], ...chartData]}
            width="100%"
            height="400px"
            legendToggle
        />
    );
};

export default EntriesChartTracker;
