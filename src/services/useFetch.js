import { useState, useEffect } from "react";
import { getUrl, getDataModel } from "../business/utils";
import { useNavigate } from "react-router-dom";
import { online } from "../business/utils";
import PropTypes from "prop-types";

export const useFetch = (category, id) => {
    const [dataModel, setDataModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const url = getUrl(online, category, id);

    useEffect(() => {
        if (!url || url === null) {
            navigate("/error404");
            return;
        }

        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const getModel = getDataModel(data, category);
                setDataModel(getModel);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [category, id, url, navigate]);

    return { dataModel, loading, error };
};


useFetch.propTypes = {
    category: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};