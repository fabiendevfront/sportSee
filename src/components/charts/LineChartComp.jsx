import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import CustomizedTooltip from "./CustomizedTooltip.jsx";
import { changeBgFocusChart } from "../../business/utils.js";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.jsx";
import PropTypes from "prop-types";

/**
 * Component displaying a LineChart of a user's average session data.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.id - The id of the user
 * @returns {JSX.Element}
 */
const LineChartComp = ({ id }) => {
    const [average, setAverage] = useState(null);
    const { dataModel, loading, error } = useFetch("average", id);

    useEffect(() => {
        setAverage(dataModel);
    }, [dataModel]);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span >
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : average ? (
                <div className="linechart">
                    <h3 className="linechart__title">Durée moyenne des <br />sessions</h3>
                    <ResponsiveContainer width="100%" height="100%" className="container">
                        <LineChart
                            data={average}
                            height={268}
                            margin={{ top: 50, right: 20, bottom: 5, left: 20 }}
                            onMouseMove={changeBgFocusChart}
                        >
                            <XAxis
                                dataKey="day"
                                stroke="none"
                                tick={{ fill: "rgba(255, 255, 255, 0.5)" }}
                            />
                            <YAxis
                                dataKey="sessionLength"
                                hide={true}
                            />
                            <Tooltip
                                content={<CustomizedTooltip />}
                                cursor={{
                                    stroke: "rgba(0, 0, 0, 0)",
                                    strokeWidth: 32,
                                }}
                            />
                            <Line
                                dataKey="sessionLength"
                                unit="min"
                                type="monotone"
                                stroke="rgba(255, 255, 255, 0.5)"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{
                                    stroke: "rgba(255, 255, 255, 0.5)",
                                    strokeWidth: 10,
                                    r: 5,
                                }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>) : (
                <span>Aucune session disponible</span>
            )}
        </>
    );
};

LineChartComp.propTypes = {
    id: PropTypes.string.isRequired,
};

export default LineChartComp;