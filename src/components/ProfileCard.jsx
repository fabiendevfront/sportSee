import { Link } from "react-router-dom";
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import PropTypes from "prop-types";

/**
* Component displaying user's card for Homepage.
* @component
* @param {Object} props - Component's props
* @param {string} props.id - The id of the user.
* @param {string} props.firstName - The first name of the user.
* @returns {JSX.Element}
*/
const ProfileCard = ({ id, firstName }) => {
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

ProfileCard.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
};

export default ProfileCard;