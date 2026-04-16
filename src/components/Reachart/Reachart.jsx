"use client";
import { CallContext } from "@/Context/CallProvider";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Reachart = () => {

    const {call,text,vedio} = useContext(CallContext);
    // console.log('Rechart data', call);
    
  const data = [
    { name: "Calling", value: call.length, fill: "#0088FE" },
    { name: "Massaging", value: text.length, fill: "#00C49F" },
    { name: "Vedio Calling", value: vedio.length, fill: "#FFBB28" },
    
  ];
  return (
    <div className="max-w-[70%] mx-auto my-8 flex justify-center items-center">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          
        />

        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default Reachart;
