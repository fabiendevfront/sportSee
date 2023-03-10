import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import CustomizedTooltip from "./CustomizedTooltip.jsx";
import { useFetch } from "../../services/useFetch.jsx";
import PropTypes from "prop-types";

/**
 * Component displaying a BarChart of a user's daily activity data.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.id - The id of the user
 * @returns {JSX.Element}
 */
const BarChartComp = ({ id }) => {
    const { dataModel, loading, error } = useFetch("activity", id);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : dataModel ? (
                <div className="barchart">
                    <div className="barchart__head">
                        <h3 className="barchart__title">Activité quotidienne</h3>
                        <div className="barchart__infos">
                            <p className="barchart__legend barchart__legend--black">Poids (kg)</p>
                            <p className="barchart__legend barchart__legend--red">Calories brûlées (kCal)</p>
                        </div>
                    </div>
                    <ResponsiveContainer aspect={3.5}>
                        <BarChart
                            data={dataModel}
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
                                stroke="#9B9EAC"
                                tickLine={false}
                                tick={{ fontSize: 14, fontWeight: 500 }}
                                dy={10}
                            />
                            <YAxis
                                yAxisId="kg"
                                dataKey="kilogram"
                                orientation="right"
                                stroke="#9B9EAC"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 14, fontWeight: 500 }}
                                tickCount={3}
                                domain={["dataMin -1", "dataMax"]}
                            />
                            <YAxis
                                yAxisId="cal"
                                dataKey="calories"
                                orientation="left"
                                stroke="#9B9EAC"
                                axisLine={false}
                                tickLine={false}
                                hide={true}
                            />
                            <Tooltip
                                content={<CustomizedTooltip />}
                            />
                            <Bar
                                yAxisId="kg"
                                dataKey="kilogram"
                                unit="kg"
                                maxBarSize={8}
                                fill="#00000"
                                radius={[50, 50, 0, 0]}
                            />
                            <Bar
                                yAxisId="cal"
                                dataKey="calories"
                                unit="Kcal"
                                maxBarSize={8}
                                fill="#FF0101"
                                radius={[50, 50, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>) : (
                <span>Aucune activité disponible</span>
            )}
        </>
    );
};

BarChartComp.propTypes = {
    id: PropTypes.string.isRequired,
};

export default BarChartComp;