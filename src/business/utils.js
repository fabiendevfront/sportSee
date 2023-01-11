//MODELS
import  MainModel from "../models/MainModel";
import  ActivityModel  from "../models/ActivityModel";
import  AverageModel  from "../models/AverageModel";
import  PerformanceModel from "../models/PerformanceModel";

export const online = true;

export const getUrl = (online, category, id) => {
    let baseUrl = "";

    if (online) {
        baseUrl = "http://localhost:3000/user/";

        switch (category) {
        case "main" :
            return `${baseUrl}${id}`;
        case "activity" :
            return `${baseUrl}${id}/activity`;
        case "average" :
            return `${baseUrl}${id}/average-sessions`;
        case "performance" :
            return `${baseUrl}${id}/performance`;
        default :
            return null;
        }
    } else {
        baseUrl = "/mock/";

        switch (category) {
        case "main" :
            return `${baseUrl}${id}/user.json`;
        case "activity" :
            return `${baseUrl}${id}/activity.json`;
        case "average" :
            return `${baseUrl}${id}/average.json`;
        case "performance" :
            return `${baseUrl}${id}/performance.json`;
        default :
            return null;
        }
    }
};

export const getDataModel = (dataModel, category) => {
    switch (category) {
    case "main":
        return new MainModel(dataModel);
    case "activity":
        return new ActivityModel(dataModel.data.sessions).getActivities();
    case "average":
        return new AverageModel(dataModel.data.sessions).getSessions();
    case "performance":
        return new PerformanceModel(dataModel);
    default:
        console.error("La categorie est inexistante");
        return;
    }
};
