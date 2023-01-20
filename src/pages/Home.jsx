import { useFetchAllData } from "../services/useFetchAllData.jsx";
import ProfileCard from "../components/ProfileCard";

/**
* Component for Homepage
* @component
* @returns {JSX.Element}
*/
const Home = () => {
    const { dataModel, loading, error } = useFetchAllData("home");

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : dataModel ? (
                <div className="home">
                    <div className="home__profiles">
                        {dataModel.map((profile) =>
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