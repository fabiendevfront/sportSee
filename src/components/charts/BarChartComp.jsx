import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.js";

const BarChartComponent = ({ id }) => {
    const [activity, setActivity] = useState(null);
    const { dataModel } = useFetch("activity", id);

    useEffect(() => {
        setActivity(dataModel);
    }, [dataModel]);

    return (
        <>
            {activity ? (
                <div className="barchart">
                    <div className="barchart__head">
                        <div className="barchart__title ">Activité quotidienne</div>
                        <div className="barchart__info">
                            <p>Poids (kg)</p>
                            <p>Calories brûlées (kCal)</p>
                        </div>
                    </div>
                    <ResponsiveContainer aspect={2.5}>
                        <BarChart
                            data={activity}
                            margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
                            barGap={8}
                            barCategoryGap="35%"
                            height={200}
                            width={300}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                tick={{ fontSize: 14, fontWeight: 500 }}
                                dy={10}
                            />
                            <YAxis
                                yAxisId="kg"
                                dataKey="kilogram"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                tickCount={3}
                                domain={["dataMin -1", "dataMax"]}
                            />
                            <YAxis
                                yAxisId="cal"
                                dataKey="calories"
                                orientation="left"
                                axisLine={false}
                                tickLine={false}
                                hide
                            />
                            <Tooltip />
                            <Bar
                                yAxisId="kg"
                                dataKey="kilogram"
                                maxBarSize={8}
                                fill={"#00000"}
                                radius={[50, 50, 0, 0]}
                            />
                            <Bar
                                yAxisId="cal"
                                dataKey="calories"
                                maxBarSize={8}
                                fill={"#00000"}
                                radius={[50, 50, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>) : (
                <span>Loading</span>
            )}

        </>
    );
};

export default BarChartComponent;