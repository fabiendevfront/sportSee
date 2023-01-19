/**
 * Modeling class for User data
 * @param {Object} - apiData
 */
class UserModel {
    constructor(apiData) {
        this.data = apiData;
        this.firstName = apiData.userInfos.firstName;
        this.nutritional = apiData.keyData;
    }

    /**
    * Get score data for RadialChart
    * @returns {Array.<Object>} scoreArray
    */
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

    /**
    * Get nutritinal data for NutritionnalCard
    * @returns {Object} nutritionalItems
    */
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