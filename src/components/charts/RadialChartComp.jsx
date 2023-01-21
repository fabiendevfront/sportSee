import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { useFetch } from "../../services/useFetch.jsx";
import PropTypes from "prop-types";

/**
 * Component displaying a RadialChart of a user's score data.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.id - The id of the user
 * @returns {JSX.Element}
 */
const RadialChartComp = ({ id }) => {
    const { dataModel, loading, error } = useFetch("score", id);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : dataModel ? (
                <div className="radialchart">
                    <h3 className="radialchart__title">Score</h3>
                    <div className="radialchart__score">
                        <div className="radialchart__items">
                            <p className="radialchart__result">{dataModel[1].todayScore} %</p>
                            <p className="radialchart__txt">de votre objectif</p>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            data={dataModel}
                            width={400}
                            height={400}
                            innerRadius="80%"
                            barSize={10}
                            startAngle={90}
                            endAngle={450}
                        >
                            <RadialBar cornerRadius={5} max={100} dataKey={"todayScore"} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>) : (
                <span>Aucun score disponible</span>
            )}
        </>
    );
};

RadialChartComp.propTypes = {
    id: PropTypes.string.isRequired,
};

export default RadialChartComp;