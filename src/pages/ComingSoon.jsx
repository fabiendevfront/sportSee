import { Link } from "react-router-dom";

/**
* Component for Coming Soon page
* @component
* @returns {JSX.Element}
*/
const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <h2 className="coming-soon__title">Page disponible prochainement</h2>
            <Link to="/" className="coming-soon__link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default ComingSoon;