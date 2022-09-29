import React, { memo } from "react";

import Charts from "./Charts";
import Industry from "./Industry";
import Header from "./Header";
import Summary from "./Summary";

const MemoedCharts = memo(Charts);

function OccupationOverview({ data }) {
  return (
    <>
      <Header key="header" occupation={data.occupation} region={data.region} />
      <Summary
        key="summary"
        occupation={data.occupation}
        summary={data.summary}
      />
      <MemoedCharts key="charts" trend={data.trend_comparison} />
      <Industry
        key="industry"
        industries={data.employing_industries}
        occupation={data.occupation}
      />
    </>
  );
}

export default OccupationOverview;
