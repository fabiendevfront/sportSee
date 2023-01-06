import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../services/useFetch.js";
import BarChartComponent from "../components/charts/BarChart";

const Dashboard = () => {
    const [dataUser, setDataUser] = useState(null);
    const { id } = useParams();
    const { data } = useFetch("main", id);

    useEffect(() => {
        setDataUser(data);
    }, [data]);

    return (
        <>
            {dataUser ? (
                <div className="dashboard">
                    <h2>Bonjour {dataUser.firstName}</h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <BarChartComponent id={id} />
                </div>
            ) : (
                <span>Erreur de connexion à la base de données</span>
            )}
        </>
    );
};

export default Dashboard;