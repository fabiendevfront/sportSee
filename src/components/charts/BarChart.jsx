import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.js";

const BarChartComponent = ({ id }) => {
    const [activity, setActivity] = useState(null);
    const { data } = useFetch("activity", id);

    useEffect(() => {
        setActivity(data);
    }, [data]);

    console.log(activity);

    return (
        <>
            {activity ? (
                <div className="barchart">
                    <div className="barchart__head">
                        <h3>Diagramme</h3>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={activity}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>) : (
                <span>Loading</span>
            )}

        </>
    );
};

export default BarChartComponent;