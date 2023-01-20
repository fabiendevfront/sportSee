import { useState, useEffect } from "react";
import { getDataModel } from "../business/utils";
import PropTypes from "prop-types";

/**
* A custom hook for fetching data in mockData.json from a specified category, use for Homepage.
* @function
* @param {string} category - Category of data.
* @returns {{ data: object, loading: boolean, error: boolean }} - Returns object with dataModel, loading and error.
*/
export const useFetchAllData = (category) => {
    const [dataModel, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getDataMock = async () => {
            try {
                const response = await fetch("/mock/mockData.json");
                const data = await response.json();
                const getModel = getDataModel(data, category);
                setData(getModel);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getDataMock();
    }, [category]);

    return { dataModel, loading, error };
};

useFetchAllData.propTypes = {
    category: PropTypes.string.isRequired,
};