import { Link } from "react-router-dom";
import avatar from "../assets/people.svg";

const Profile = ({ id, firstName }) => {
    return (
        <div className="profile">
            <Link to={"/dashboard/" + id} className="profile__link">
                <img src={avatar} alt="Visu de profil" className="profile__picture" />
                <h3 className="profile__name">{firstName}</h3>
            </Link>
        </div>
    );
};

export default Profile;