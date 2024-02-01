import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
import "./ChartB.css";

function ChartB() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9);
  const [chartHeight, setChartHeight] = useState(window.innerHeight * 0.7);

  useEffect(() => {
    fetch("/stock.json")
      .then((response) => response.json())
      .then((data) => setData1(data));

    fetch("/SMVIT.json")
      .then((response) => response.json())
      .then((data) => setData2(data.Transaction));

    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.9);
      setChartHeight(window.innerHeight * 0.7);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const mergedData = data1
    .map((item1) => {
      const item2 = data2.find((item2) => item2.MRPC === item1.MRPC);
      return item2 ? { ...item1, "Qty un used": item2["Qty un used"] } : null;
    })
    .filter((item) => item);

  return (
    <>
      <div className="barchart-2">
        <h1
          style={{
            whiteSpace: "nowrap",
            color: "#FE3E67",
            marginLeft: "450px",
          }}
        >
          Stock Against Person Responsible
        </h1>
        <BarChart width={chartWidth} height={chartHeight}  data={mergedData}>
          <XAxis dataKey="Responsible">
            <Label
              value="Responsible"
              offset={-5}
              fontSize="20px"
              position="insideBottom"
            />
          </XAxis>
          <YAxis>
            <Label
              value="Stock"
              angle={-90}
              position="insideLeft"
              offset={0}
              fontSize="20px"
            />
          </YAxis>
          <Tooltip />
          <Bar dataKey="Qty un used" fill="#F80000" name="Stock" />
        </BarChart>
      </div>
    </>
  );
}

export default ChartB;
