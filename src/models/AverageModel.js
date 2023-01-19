/**
 * Modeling class for Average data
 * @param {Object} - apiData
 */
class AverageModel {
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