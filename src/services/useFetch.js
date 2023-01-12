import { useState, useEffect } from "react";
import { getUrl, getDataModel } from "../business/utils";
import { online } from "../business/utils";

export const useFetch = (category, id) => {
    const [dataModel, setDataModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const url = getUrl(online, category, id);

    useEffect(() => {
        if (!url) {
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
    }, [category, id, url]);

    return { dataModel, loading, error };
};
