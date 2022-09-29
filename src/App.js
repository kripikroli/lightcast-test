import React, { memo } from "react";
import "./App.css";
import OccupationOverviewPage from "./pages/OccupationOverviewPage";

const MemoedOccupationOverview = memo(OccupationOverviewPage);

function App() {
  return (
    <div className="container">
      <MemoedOccupationOverview />
    </div>
  );
}

export default App;
