import React from "react";


import ChartConfig from "./application/Chartconfig";
import "../components/Content.css"
const Home = (props) => (
  <div className= "Content">
    <div className="highcharts-figure">
      <ChartConfig />
    </div>
  </div>
);

export default Home;
