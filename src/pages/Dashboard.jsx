import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../services/useFetch.js";
import BarChartComponent from "../components/charts/BarChartComp";
import LineChartComp from "../components/charts/LineChartComp";
import RadarChartComp from "../components/charts/RadarChartComp";
import RadialChartComp from "../components/charts/RadialChartComp";
import NutritionalCard from "../components/NutritionalCard";

const Dashboard = () => {
    const [dataUser, setDataUser] = useState(null);
    const [nutritional, setNutritional] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const idRef = useRef(id);

    useEffect(() => {
        if (id !== "12" && id !== "18") {
            idRef.current = "12";
            navigate("/error404");
        } else {
            idRef.current = id;
        }
    }, [id, navigate, idRef]);

    const { dataModel, loading, error } = useFetch("user", idRef.current);

    useEffect(() => {
        if (dataModel) {
            setDataUser(dataModel);
            setNutritional(dataModel.getNutritional());
        }
    }, [dataModel]);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span >
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : dataUser ? (
                <div className="dashboard">
                    <div className="dashboard__head">
                        <h2 className="dashboard__title">Bonjour <span className="dashboard__name">{dataUser.firstName}</span></h2>
                        <p className="dashboard__subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="dashboard__activity-tracking">
                        <div className="dashboard__graphs">
                            <div className="dashboard__barchart">
                                <BarChartComponent id={id} />
                            </div>
                            <div className="dashboard__stats">
                                <div className="dashboard__linechart">
                                    <LineChartComp id={id} />
                                </div>
                                <div className="dashboard__radarchart">
                                    <RadarChartComp id={id} />
                                </div>
                                <div className="dashboard__radialchart">
                                    <RadialChartComp id={id} />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard__nutritional">
                            {nutritional ? (
                                <>
                                    {Object.entries(nutritional).map(([key, value]) => (
                                        <NutritionalCard key={key} nutri={key} value={value} />
                                    ))}
                                </>
                            ) : (
                                <span>Aucune information nutritionnelle disponible</span>
                            )}

                        </div>
                    </div>
                </div>) : (
                <span>Le tableau de bord rencontre un problème</span>
            )}
        </>
    );
};

export default Dashboard;