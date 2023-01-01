import * as data from "../mock/mockData.js";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
    console.log(data.USER_MAIN_DATA);

    return (
        <>
            {data.USER_MAIN_DATA && (
                <div className="home">
                    <div className="home__profiles">
                        {data.USER_MAIN_DATA.map((profile) =>
                            <ProfileCard key={profile.id} id={profile.id} firstName={profile.userInfos.firstName} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;