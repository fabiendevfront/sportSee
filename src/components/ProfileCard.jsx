import { Link } from "react-router-dom";
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";

const Profile = ({ id, firstName }) => {
    return (
        <div className="profile-card">
            <Link to={"/dashboard/" + id} className="profile-card__link">
                <div className="profile-card__picture">
                    <img src={id === 12 ? user1 : user2} alt="Visu de profil" />
                </div>
                <div className="profile-card__desc">
                    <h3 className="profile-card__name">{firstName}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Profile;