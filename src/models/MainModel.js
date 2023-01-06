class MainModel {
    constructor(apiData) {
        this.id = apiData.data.id;
        this.firstName = apiData.data.userInfos.firstName;
        this.lastName = apiData.data.userInfos.lastName;
        this.age = apiData.data.userInfos.age;
        this.todayScore = apiData.data.todayScore;
        this.calorie = apiData.data.keyData.calorieCount;
        this.protein = apiData.data.keyData.proteinCount;
        this.carbohydrate = apiData.data.keyData.carbohydrateCount;
        this.lipid = apiData.data.keyData.lipidCount;
    }
}

export default MainModel;