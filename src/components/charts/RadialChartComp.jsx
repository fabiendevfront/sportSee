import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch.js";

const RadialChartComp = ({ id }) => {
    const [score, setScore] = useState(null);
    const { dataModel, loading, error } = useFetch("score", id);

    useEffect(() => {
        setScore(dataModel);
    }, [dataModel]);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span >
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : score ? (
                <div className="radialchart">
                    <h3 className="radialchart__title">Score</h3>
                    <div className="radialchart__score">
                        <div className="radialchart__items">
                            <p className="radialchart__result">{score[1].todayScore} %</p>
                            <p className="radialchart__txt">de votre objectif</p>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            width={400}
                            height={400}
                            innerRadius="80%"
                            barSize={10}
                            data={score}
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

export default RadialChartComp;