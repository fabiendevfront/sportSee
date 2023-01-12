class UserModel {
    constructor(apiData) {
        this.data = apiData;
        this.firstName = apiData.userInfos.firstName;
        this.nutritional = apiData.keyData;
    }

    getScore() {
        const scoreArray = [];
        let score = null;
        if (!this.data.todayScore) {
            score = this.data.score;
        } else {
            score = this.data.todayScore;
        }
        scoreArray.push(
            {
                "name": "score",
                "todayScore": 100,
                "fill": "transparent"
            },
            {
                "name": "negativeScore",
                "todayScore": score * 100,
                "fill": "#FF0101"
            }
        );
        return scoreArray;
    }

    getNutritional() {
        const nutritionalItems = {
            Calories: this.nutritional.calorieCount,
            Protéines: this.nutritional.proteinCount,
            Glucides: this.nutritional.carbohydrateCount,
            Lipides: this.nutritional.lipidCount
        };
        return nutritionalItems;
    }
}

export default UserModel;