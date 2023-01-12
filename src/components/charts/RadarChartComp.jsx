import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.js";

const RadarChartComp = ({ id }) => {
    const [performance, setPerformance] = useState(null);
    const { dataModel } = useFetch("performance", id);

    useEffect(() => {
        setPerformance(dataModel);
    }, [dataModel]);

    return (
        <>
            {performance ? (
                <div className="radarchart">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart
                            data={performance}
                            cx="50%"
                            cy="50%"
                            outerRadius="65%"
                        >
                            <PolarGrid radialLines={false} />
                            <PolarAngleAxis
                                dataKey="kind"
                                stroke="#FFFFFF"
                                tickLine={false}
                                axisLine={false}
                                tick={{ fontSize: 12, fontWeight: 500 }}
                            />
                            <Radar
                                dataKey="value"
                                stroke="#FF0101"
                                fill="#FF0101"
                                fillOpacity={0.7}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>) : (
                <span>Loading</span>
            )};
        </>
    );
};

export default RadarChartComp;