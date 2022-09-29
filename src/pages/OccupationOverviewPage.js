import React, { useState, useEffect, memo } from 'react'

import OccupationOverview from '../components/occupations/OccupationOverview'

const MemoedOccupationOverview = memo(OccupationOverview, (prev, next) => {
    return prev.data.occupation.onet !== next.data.occupation.onet;
});

function OccupationOverviewPage() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32");
            const json = await res.json();
            setData(json);
        }

        fetchData();

    }, [])

    console.log(data)
    return (
        <div className="App">
            {data ? (
                <MemoedOccupationOverview data={data} />
            ) : (
                "Loading..."
            )}
        </div>

    )
}

export default OccupationOverviewPage