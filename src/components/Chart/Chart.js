import "./Chart.css";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArr = props.dataPoints.map((elem) => elem.value);
  const totalMax = Math.max(...valueArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
