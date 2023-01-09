import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../services/useFetch.js";
import BarChartComponent from "../components/charts/BarChartComp";
import LineChartComp from "../components/charts/LineChartComp.jsx";
import RadarChartComp from "../components/charts/RadarChartComp.jsx";
import PieChartComp from "../components/charts/PieChartComp.jsx";
import InfosCard from "../components/InfosCard";

const Dashboard = () => {
    const [dataUser, setDataUser] = useState(null);
    const { id } = useParams();
    const { dataModel } = useFetch("main", id);

    useEffect(() => {
        setDataUser(dataModel);
    }, [dataModel]);

    return (
        <>
            {dataUser ? (
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
                                <div className="dashboard__piechart">
                                    <PieChartComp id={id} />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard__infos">
                            <InfosCard />
                        </div>
                    </div>
                </div>
            ) : (
                <span>Erreur de connexion à la base de données</span>
            )}
        </>
    );
};

export default Dashboard;