import  AllDataMockModel from "../models/AllDataMockModel";
import  UserModel from "../models/UserModel";
import  ActivityModel  from "../models/ActivityModel";
import  AverageModel  from "../models/AverageModel";
import  PerformanceModel from "../models/PerformanceModel";

// A boolean constant for fetch on mock or Api in useFetch
export const online = true;

// Array of the users ids
export const validIds = ["12", "18"];

/**
 * Checks if the id is valid, and retrieves the correct path depending if it is online or not.
 * @function
 * @param {boolean} online
 * @param {string} category - "user", "activity", "average", "performance", "score"
 * @param {string} id - User id
 * @returns {string} Path
 */
export const getUrl = (online, category, id) => {
    const idUser  = validIds.find(userId => userId === id);
    let baseUrl = "";
    if (!idUser) {
        return null;
    } else if (online) {
        baseUrl = "http://localhost:3000/user/";

        switch (category) {
        case "user" :
            return `${baseUrl}${id}`;
        case "activity" :
            return `${baseUrl}${id}/activity`;
        case "average" :
            return `${baseUrl}${id}/average-sessions`;
        case "performance" :
            return `${baseUrl}${id}/performance`;
        case "score" :
            return `${baseUrl}${id}`;
        default :
            return null;
        }
    } else {
        baseUrl = "/mock/";

        switch (category) {
        case "user" :
            return `${baseUrl}${id}/user.json`;
        case "activity" :
            return `${baseUrl}${id}/activity.json`;
        case "average" :
            return `${baseUrl}${id}/average.json`;
        case "performance" :
            return `${baseUrl}${id}/performance.json`;
        case "score" :
            return `${baseUrl}${id}/user.json`;
        default :
            return null;
        }
    }
};

/**
 * Returns the correct data model depending on the category of data.
 * @function
 * @param {Object} dataModel - Api Data
 * @param {string} category - "all", user", "activity", "average", "performance", "score"
 * @returns {Object} - A data model
 */
export const getDataModel = (dataModel, category) => {
    switch (category) {
    case "home":
        return new AllDataMockModel(dataModel).getHomeData();
    case "user":
        return new UserModel(dataModel.data);
    case "activity":
        return new ActivityModel(dataModel.data.sessions).getActivities();
    case "average":
        return new AverageModel(dataModel.data.sessions).getSessions();
    case "performance":
        return new PerformanceModel(dataModel.data).getPerformance();
    case "score":
        return new UserModel(dataModel.data).getScore();
    default:
        console.error("La categorie est inexistante");
        return;
    }
};


/**
 * Changes the background color of a container element based on the position of the mouse pointer on a chart.
 * @function
 * @param {Object} e - Event object
 */
export const changeBgFocusChart = (e) => {
    const container = document.getElementsByClassName("container")[0];
    if (e.isTooltipActive) {
        const widthFocus = container.clientWidth;
        const pourcentage = Math.round((e.activeCoordinate.x / widthFocus) * 100);
        container.style.background = `linear-gradient(to right, rgba(255,0,0,1) ${pourcentage}%, rgba(0,0,0,0.1) ${pourcentage}%, rgba(0,0,0,0.1) 100%)`;
    } else {
        container.style.background = "rgba(255,0,0,1)";
    }
};