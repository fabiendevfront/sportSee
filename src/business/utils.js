//MODELS
import  UserModel from "../models/UserModel";
import  ActivityModel  from "../models/ActivityModel";
import  AverageModel  from "../models/AverageModel";
import  PerformanceModel from "../models/PerformanceModel";

export const online = false;

export const validIds = ["12", "18"];

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

export const getDataModel = (dataModel, category) => {
    switch (category) {
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
    case "nutritional":
        return new UserModel(dataModel.data).getNutritional();
    default:
        console.error("La categorie est inexistante");
        return;
    }
};
