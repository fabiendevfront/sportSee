/* eslint-disable indent */
import { useEffect, useState } from "react";
import caloriesIcon from "../assets/nutritional/calories-icon.svg";
import carbsIcon from "../assets/nutritional/carbs-icon.svg";
import fatIcon from "../assets/nutritional/fat-icon.svg";
import proteinIcon from "../assets/nutritional/protein-icon.svg";

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

export default NutritionalCard;