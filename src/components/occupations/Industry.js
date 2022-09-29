import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  width: 57vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgrey;

  font-size: 12px;
`;
const Left = styled.td`
  display: flex;
  justify-content: left;
  padding: 5px;
  color: #48a7f5;
  width: 65%;
`;
const Right = styled.td`
  display: flex;
  justify-content: space-between;
  text-align: right;
  width: 35%;
`;

const RightBox = styled.div`
  padding: 5px;
  width: 35%;
`;

function Industry({ occupation, industries }) {
  return (
    <div>
      <div className="container ml-6 mb-6">
        <div id="title">
          <h3 className="is-pulled-left mb-2">
            Industries Employing {occupation.title}
          </h3>
          <table>
            <thead
              id="tableHeader"
              className="has-text-weight-medium"
              key="industryTableHead"
            >
              <TableRow>
                <Left>Industry</Left>
                <Right>
                  <RightBox>
                    Occupation Jobs in Industry ({industries.year})
                  </RightBox>
                  <RightBox>
                    % of Occupation in Industry ({industries.year})
                  </RightBox>
                  <RightBox>
                    % of Total Jobs in Industry ({industries.year})
                  </RightBox>
                </Right>
              </TableRow>
            </thead>
            <tbody>
              {industries.industries.map(
                ({ naics, title, in_occupation_jobs, jobs }) => (
                  <TableRow key={title.toString()}>
                    <Left>
                      <div className="is-pulled-left mb-2">{title}</div>
                    </Left>
                    <Right>
                      <RightBox>{in_occupation_jobs.toLocaleString()}</RightBox>
                      <RightBox>
                        {((in_occupation_jobs / industries.jobs) * 100).toFixed(
                          1
                        )}
                        %
                      </RightBox>
                      <RightBox>
                        {((in_occupation_jobs / jobs) * 100).toFixed(1)}%
                      </RightBox>
                    </Right>
                  </TableRow>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Industry;
