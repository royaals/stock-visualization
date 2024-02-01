import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

function ChartA() {
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

  const pieData = Object.keys(aggregateData).map((key) => ({
    id: key,
    label: key,
    value: aggregateData[key],
  }));

  return (
    <>
      <div className="chart-1">
        <h1
          style={{
            whiteSpace: "nowrap",
            color: "#FE3E67",
            marginLeft: "200px",
           marginBottom: "10px"
      
          }}
        >
          Quantity Unused by Location - Pie Chart
        </h1>
        <div style={{ height: "70vh", width: "55vw" }}>
          <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 70,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <h4 style={{fontSize: "20px", color: "orange", marginLeft: "400px"}}>Location</h4>
      </div>
    </>
  );
}

export default ChartA;
