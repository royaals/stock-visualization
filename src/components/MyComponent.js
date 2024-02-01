import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import "./ChartA.css";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("SMVIT.json")
      .then((response) => response.json())
      .then((data) => setData(data.Transaction));
  }, []);

  const aggregateData = data.reduce((acc, cur) => {
    if (!acc[cur.Location]) {
      acc[cur.Location] = cur["Qty un used"];
    } else {
      acc[cur.Location] += cur["Qty un used"];
    }
    return acc;
  }, {});

  const chartData = Object.keys(aggregateData).map((key) => ({
    name: key,
    value: aggregateData[key],
  }));

  return (
    <>
      <div className="barchart-1">
        <h1
          style={{
            whiteSpace: "nowrap",
            color: "#FE3E67",
            marginLeft: "200px",
            marginTop: "30px"
            
          }}
        >
          Quantity Unused by Location- Bar Chart
        </h1>
        <ResponsiveContainer width="100%" height={700}>
          <BarChart data={chartData}>
            <XAxis dataKey="name">
              <Label
                value="Location"
                offset={-5}
                fontSize="20px"
                position="insideBottom"
              />
            </XAxis>
            <YAxis>
              <Label
                value="Unused Stock"
                angle={-90}
                position="insideLeft"
                offset={0}
                fontSize="20px"
              />
            </YAxis>
            <Tooltip />
            <Bar dataKey="value" fill="#F80000" name="Unused Stock" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default MyComponent;
