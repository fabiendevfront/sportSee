import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";


const Home = () => {
    /* Create a State Hook */
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    /**
     * Effect Hook that performs an action when the component is mounted and/or when its dependencies change.
    */
    useEffect(() => {
        const getDataMock = async () => {
            try {
                const response = await fetch("/mock/mockData.json");
                const users = await response.json();
                setData(users);
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };
        getDataMock();
    }, []);

    if (error) {
        return;
    }

    return (
        <>
            {data ? (
                <div className="home">
                    <div className="home__profiles">
                        {data.user.map((profile) =>
                            <ProfileCard key={profile.id} id={profile.id} firstName={profile.userInfos.firstName} />
                        )}
                    </div>
                </div>
            ) : (
                <span>Erreur de connexion à la base de données</span>
            )}
        </>
    );
};

export default Home;