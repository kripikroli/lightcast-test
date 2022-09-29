import React, { memo } from "react";
import styled from "styled-components";

import LineChart from "../../charts/LineChart";
import ChartTitle from "../../charts/common/ChartTitle";
import Label from "../../charts/common/AxisLabel";

const MemoedLineChart = memo(LineChart);

export const styles = {
  chartComponentsContainer: {
    display: "grid",
    gridTemplateColumns: "max-content 960px",
    alignItems: "center",
  },
  chartWrapper: { maxWidth: "960px", alignSelf: "flex-start" },
};

const TableRow = styled.tr`
  width: 57vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;

  font-size: 12px;
`;
const Left = styled.td`
  display: flex;
  justify-content: left;
  padding: 5px;
`;
const Right = styled.td`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;
const RightBox = styled.div`
  padding: 5px;
  width: 10vw;
`;

function Charts({ trend }) {
  const areaData = [trend.regional, trend.state, trend.nation];
  const areaTitles = ["Region", "State", "Nation"];
  return (
    <div className="container mb-6">
      <div style={styles.chartComponentsContainer}>
        <div />
        <ChartTitle text="Regional Trends" />

        <Label text="Percent Change" rotate />
        <div className="mt-5">
          <MemoedLineChart width={960} height={400} trend={trend} />
        </div>
        <div />
      </div>
      <div className="container ml-6">
        <table>
          <thead
            id="tableHeader"
            className="has-text-weight-medium"
            key={trend.start_year}
          >
            <TableRow>
              <Left>Region</Left>
              <div className="mb-5" />
              <Right>
                <RightBox>{trend.start_year} Jobs</RightBox>
                <RightBox>{trend.end_year} Jobs</RightBox>
                <RightBox>Change</RightBox>
                <RightBox>% Change</RightBox>
              </Right>
            </TableRow>
          </thead>
          <tbody>
            {areaData?.map((region, index) => (
              <TableRow key={index}>
                <Left>
                  <div>{areaTitles[index]}</div>
                </Left>
                <Right>
                  <RightBox>{region[0].toLocaleString()}</RightBox>
                  <RightBox>
                    {region[region.length - 1].toLocaleString()}
                  </RightBox>
                  <RightBox>
                    {(region[region.length - 1] - region[0]).toLocaleString()}
                  </RightBox>
                  <RightBox>
                    {(
                      ((region[region.length - 1] - region[0]) / region[0]) *
                      100
                    ).toFixed(1)}
                    %
                  </RightBox>
                </Right>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charts;
