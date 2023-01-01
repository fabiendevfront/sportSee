import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error-404">
            <h2 className="error-404__title">Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/" className="error-404__link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error404;