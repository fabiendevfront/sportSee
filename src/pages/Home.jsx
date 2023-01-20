import { useState, useEffect } from "react";
import { useFetchAllData } from "../services/useFetchAllData.jsx";
import ProfileCard from "../components/ProfileCard";

/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const Home = () => {
    const [data, setData] = useState();
    const { dataModel, loading, error } = useFetchAllData("all");

    useEffect(() => {
        if (dataModel) {
            setData(dataModel);
        }
    }, [dataModel]);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <div className="home">
                    <div className="home__profiles">
                        {data.map((profile) =>
                            <ProfileCard key={profile.id} id={profile.id} firstName={profile.firstName} />
                        )}
                    </div>
                </div>) : (
                <span>La page d'accueil rencontre un problème</span>
            )}
        </>
    );
};

export default Home;