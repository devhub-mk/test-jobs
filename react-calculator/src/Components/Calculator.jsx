import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import { styled } from "styled-components";
import CalLabel from "./CalLabel";
import Stats from "./Stats";
import PieLabel from "./PieLabel";

const Calculator = () => {
  const [calValues, setCalValues] = useState({
    investment: 100000,
    rate: 100,
    time_p: 5,
  });
  const [estReturns, setEstReturns] = useState(0);

  useEffect(() => {
    const r = calValues.rate / 10;
    const m = Math.round(
      calValues.investment * ((1 + r / 100) ** calValues.time_p - 1)
    );
    setEstReturns(m);
  }, [calValues]);

  const handleChange = (e) => {
    setCalValues({ ...calValues, [e.target.name]: +e.target.value });
  };

  return (
    <CalContainer>
      <h1> FD Calculator</h1>
      <div className="cal-box">
        <div className="range-conainer">
          <CalLabel
            heading={"Total Investment"}
            rupee={true}
            value={calValues.investment}
          />
          <input
            type="range"
            name="investment"
            id="investment"
            min={5000}
            max={10000000}
            value={calValues.investment}
            onChange={handleChange}
          />
          <CalLabel
            heading={"Rate of interest (p.a)"}
            percentage={true}
            value={calValues.rate / 10}
          />
          <input
            type="range"
            name="rate"
            id="rate"
            min={10}
            max={150}
            value={calValues.rate}
            onChange={handleChange}
          />
          <CalLabel heading={"Time Period"} value={calValues.time_p} />
          <input
            type="range"
            name="time_p"
            id="time_p"
            min={1}
            max={25}
            value={calValues.time_p}
            onChange={handleChange}
          />
          <div className="returns">
            <Stats title={"Invested Amount"} amount={calValues.investment} />
            <Stats title={"Est. returns"} amount={estReturns} />
            <Stats
              title={"Total value"}
              amount={calValues.investment + estReturns}
            />
          </div>
        </div>
        <div className="graph-container">
          <div className="desc">
            <PieLabel title={"Total investment"} color={"#eef0ff"} />
            <PieLabel title={"Est. returns"} color={"#5367ff"} />
          </div>
          <PieChart
            series={[
              {
                data: [
                  { value: estReturns, color: "#5367ff" },
                  { value: calValues.investment, color: "#eef0ff" },
                ],
                innerRadius: 75,
                outerRadius: 130,
                paddingAngle: 0,
                cornerRadius: 1,
                startAngle: 360,
                endAngle: 0,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>
      </div>
    </CalContainer>
  );
};
const CalContainer = styled.div`
  h1 {
    color: #44475b;
  }
  .cal-box {
    width: 900px;
    padding: 50px;
    margin: 50px 0;
    border: 1px solid #dddddd;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    gap: 3rem;
    font-size: 19px;
    .range-conainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      .returns {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
    }
    .graph-container {
      width: 37%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .desc {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        width: 100%;
      }
    }
  }
`;

export default Calculator;
