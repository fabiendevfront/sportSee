/**
 * Activity Class Model
 * @typedef ActivityDataType
 * @type {Array.<Object>}
 * @property {string} day
 * @property {number} kilogram
 * @property {number} calories
 */
class ActivityModel {
    /**
     * Modeling class for Activity data
     * @param {ActivityDataType} apiData - Activity data fetch
     */
    constructor(apiData) {
        this.data = apiData;
    }

    /**
    * Get activities data for BarChart
    * @returns {Array.<Object>} activityArray
    */
    getActivities() {
        const activityArray = [];

        this.data.forEach(session => {
            const date = new Date(session.day);
            const jour = date.getDate();

            activityArray.push({
                day: jour,
                kilogram: session.kilogram,
                calories: session.calories,
            });
        });

        return activityArray;
    }
}

export default ActivityModel;