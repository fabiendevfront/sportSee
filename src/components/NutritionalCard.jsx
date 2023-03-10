import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import caloriesIcon from "../assets/nutritional/calories-icon.svg";
import carbsIcon from "../assets/nutritional/carbs-icon.svg";
import fatIcon from "../assets/nutritional/fat-icon.svg";
import proteinIcon from "../assets/nutritional/protein-icon.svg";

/**
 * Component displaying nutritional information in a card.
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.nutri - Type of nutritional
 * @param {string} props.value - Value of nutritional
 * @returns {JSX.Element}
 */
const NutritionalCard = ({ nutri, value }) => {
    const [calorieCard, setCalorieCard] = useState(false);
    const [iconCard, setIconCard] = useState(null);
    value = value.toLocaleString("en-GB");

    useEffect(() => {
        const getCardType = () => {
            switch (nutri) {
            case "Calories":
                setCalorieCard(true);
                setIconCard(caloriesIcon);
                break;
            case "Glucides":
                setIconCard(carbsIcon);
                break;
            case "Lipides":
                setIconCard(fatIcon);
                break;
            case "Protéines":
                setIconCard(proteinIcon);
                break;
            default:
                setIconCard(null);
                break;
            }
        };
        getCardType();
    }, [nutri]);

    return (
        <div className="nutritional-card">
            <div className="nutritional-card__icon">
                <img src={iconCard} alt="Icone de la carte" />
            </div>
            <div className="nutritional-card__content">
                <h3 className="nutritional-card__count">{value}{calorieCard ? "kCal" : "g"}</h3>
                <p className="nutritional-card__nutri">{nutri}</p>
            </div>
        </div>
    );
};

NutritionalCard.propTypes = {
    nutri: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default NutritionalCard;