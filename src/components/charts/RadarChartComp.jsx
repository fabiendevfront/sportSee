import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.jsx";
import PropTypes from "prop-types";

/**
 * Component displaying a RadarChart of a user's performance data.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.id - The id of the user
 * @returns {JSX.Element}
 */
const RadarChartComp = ({ id }) => {
    const [performance, setPerformance] = useState(null);
    const { dataModel, loading, error } = useFetch("performance", id);

    useEffect(() => {
        setPerformance(dataModel);
    }, [dataModel]);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : performance ? (
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
                <span>Aucune statistique disponible</span>
            )}
        </>
    );
};

RadarChartComp.propTypes = {
    id: PropTypes.string.isRequired,
};

export default RadarChartComp;