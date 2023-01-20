/**
 * Average Class Model
 * @typedef AverageDataType
 * @type {Array.<Object>}
 * @property {number} day
 * @property {number} sessionLength
 */
class AverageModel {
    /**
     * Modeling class for Average data
     * @param {AverageDataType} - apiData
     */
    constructor(apiData) {
        this.data = apiData;
    }

    /**
    * Get sessions data for LineChart
    * @returns {Array.<Object>} averageArray
    */
    getSessions() {
        const averageArray = [];
        const dayLetter = {
            1: "L",
            2: "M",
            3: "M",
            4: "J",
            5: "V",
            6: "S",
            7: "D"
        };

        this.data.forEach(session => {
            averageArray.push({
                day: dayLetter[session.day],
                sessionLength: session.sessionLength
            });
        });
        return averageArray;
    }
}

export default AverageModel;