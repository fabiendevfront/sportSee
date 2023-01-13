import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";


const Home = () => {
    /* Create a State Hook */
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getDataMock = async () => {
            try {
                const response = await fetch("/mock/mockData.json");
                const users = await response.json();
                setData(users);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getDataMock();
    }, []);

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span >
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <div className="home">
                    <div className="home__profiles">
                        {data.user.map((profile) =>
                            <ProfileCard key={profile.id} id={profile.id} firstName={profile.userInfos.firstName} />
                        )}
                    </div>
                </div>) : (
                <span>Le tableau de bord rencontre un problème</span>
            )}
        </>
    );
};

export default Home;