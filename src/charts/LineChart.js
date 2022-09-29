import * as d3 from "d3";
import { useEffect, useState } from "react";

import { generateOccupationLineChartData } from "../utils/methods";

function LineChart(props) {
  const { width, height, trend } = props;

  const [regionalData, setRegionalData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [nationalData, setNationalData] = useState([]);

  useEffect(() => {
    if (regionalData.length > 0) {
      drawChart();
    } else {
      generateData();
    }
    console.log(stateData);
  }, [regionalData]);

  const generateData = () => {
    const chartData = [];

    chartData.regional = generateOccupationLineChartData(
      trend?.start_year,
      trend?.regional
    );
    chartData.state = generateOccupationLineChartData(
      trend?.start_year,
      trend?.state
    );
    chartData.national = generateOccupationLineChartData(
      trend?.start_year,
      trend?.nation
    );
    setRegionalData(chartData.regional);
    setStateData(chartData.state);
    setNationalData(chartData.national);
  };

  const drawChart = () => {
    // Establish margins for the svg
    const margin = { top: 10, right: 50, bottom: 50, left: 50 };

    // Establish x and y max and min values
    // Fixme: This should not be hard coded values
    const xMinValue = d3.min(regionalData, (d) => 2011);
    const xMaxValue = d3.max(regionalData, (d) => 2020);
    const yMinValue = d3.min(regionalData, (d) => 0);
    const yMaxValue = d3.max(regionalData, (d) => d.value);

    // Create the chart area
    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scale for the x axis
    const xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    // create scale for y axis
    const yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    // Establish axis generator for labes
    let xAxisGenerator = d3
      .axisBottom(xScale)
      .tickSize(-height)
      .tickFormat(d3.format("d"));

    // Add another group element to hold the axis generator
    let xAxis = svg.append("g").call(xAxisGenerator);

    // Establish transform attribute to the axis
    xAxis.attr("transform", `translate(${0},${height})`);

    // Establish tick styling
    xAxis
      .selectAll(".tick")
      .attr("stroke", "#000")
      .attr("stroke-width", ".1")
      .attr("opacity", ".7")
      .attr("class", "legend");

    // Establish text styling for the x axis
    xAxis
      .selectAll("text")
      .attr("fill", "#000")
      .attr("stroke-width", ".3")
      .attr("opacity", "1");

    // Remove the horizontal line at the bottom
    xAxis.select(".domain").remove();

    // Create the y axis on the left
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));

    // Create a line with x and y coordinates scaled to the data - regional
    const regionalLine = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveLinear);

    // Create a line with x and y coordinates scaled to the data - state
    const stateLine = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveLinear);

    // Create a line with x and y coordinates scaled to the data - national
    const nationalLine = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveLinear);

    // Draw the line - regional
    svg
      .append("path")
      .datum(regionalData)
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", regionalLine);

    // Draw the line - state
    svg
      .append("path")
      .datum(stateData)
      .attr("fill", "none")
      .attr("stroke", "#00b3b3")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", stateLine);

    // Draw the line - national
    svg
      .append("path")
      .datum(nationalData)
      .attr("fill", "none")
      .attr("stroke", "#ff284d")
      .attr("stroke-width", 1)
      .attr("class", "line")
      .attr("d", nationalLine);

    // Customizing points(x,y) to circle shape - regional
    svg
      .selectAll("regionalCircles")
      .data(regionalData)
      .enter()
      .append("circle")
      .attr("fill", "#000")
      .attr("stroke", "none")
      .attr("cx", function (d) {
        return xScale(d.label);
      })
      .attr("cy", function (d) {
        return yScale(d.value);
      })
      .attr("r", 4);

    // Customizing points(x,y) to circle shape - state
    svg
      .selectAll("stateCircles")
      .data(stateData)
      .enter()
      .append("circle")
      .attr("fill", "#00b3b3")
      .attr("stroke", "none")
      .attr("cx", function (d) {
        return xScale(d.label);
      })
      .attr("cy", function (d) {
        return yScale(d.value);
      })
      .attr("r", 4);

    // Customizing points(x,y) to circle shape - national
    svg
      .selectAll("nationalCircles")
      .data(nationalData)
      .enter()
      .append("circle")
      .attr("fill", "#ff284d")
      .attr("stroke", "none")
      .attr("cx", function (d) {
        return xScale(d.label);
      })
      .attr("cy", function (d) {
        return yScale(d.value);
      })
      .attr("r", 4);
  };

  return (
    <div>
      <div id="container" />
    </div>
  );
}

export default LineChart;
