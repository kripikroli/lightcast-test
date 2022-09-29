import React from "react";

import { computeNationalAveragePercentage } from "../../utils/methods";

function Summary({ occupation, summary }) {
  return (
    <div className="container is-fluid is-mobile mt-6 mb-6 pl-6">
      <h3 className="is-pulled-left mb-2">
        Occupation Summary for {occupation.title}
      </h3>
      <div class="divider"></div>
      <table class="table is-bordered is-fullwidth">
        <tbody>
          <tr>
            <td>
              <div className="level-item has-text-centered pt-5 pb-5">
                <div>
                  <p className="title">
                    {summary?.jobs?.regional.toLocaleString()}
                  </p>
                  <p className="heading has-text-weight-semibold">
                    Jobs ({summary?.jobs?.year})
                  </p>
                  <p className="heading has-text-weight-semibold">
                    {computeNationalAveragePercentage(
                      summary?.jobs?.regional,
                      summary?.jobs.national_avg
                    )}
                    % <span className="has-text-primary">above</span> National
                    Average
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div className="level-item has-text-centered pt-5 pb-5">
                <div>
                  <p className="title has-text-primary">
                    {summary.jobs_growth.regional}
                  </p>
                  <p className="heading has-text-weight-semibold">
                    % Change ({summary.jobs_growth.start_year}-
                    {summary.jobs_growth.end_year})
                  </p>
                  <p className="heading has-text-weight-semibold">
                    Nation: +{summary.jobs_growth.national_avg}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div className="level-item has-text-centered pt-5 pb-5">
                <div>
                  <p className="title">${summary.earnings.regional}/hr</p>
                  <p className="heading has-text-weight-semibold">
                    Median Hourly Earnings
                  </p>
                  <p className="heading has-text-weight-semibold">
                    Nation: ${summary.earnings.national_avg}/hr
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
