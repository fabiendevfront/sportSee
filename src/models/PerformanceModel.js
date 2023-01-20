/**
 * Performance Class Model
 * @typedef PerformanceDataType
 * @type {Object}
 * @property {Array.<Object>} data
 * @property {Object} kind
 * @property {number} userId
 */
class PerformanceModel {
    /**
     * Modeling class for Performance data
     * @param {PerformanceDataType} - apiData
     */
    constructor(apiData) {
        this.allData = apiData;
        this.data = apiData.data;
        this.kind = apiData.kind;
    }

    /**
    * Get performance data for RadarChart
    * @returns {Array.<Object>} performanceArray
    */
    getPerformance() {
        const performanceArray = [];
        const translateKind = {
            cardio: "Cardio",
            energy: "Energie",
            endurance: "Endurance",
            strength: "Force",
            speed: "Vitesse",
            intensity: "Intensité"
        };

        this.data.forEach(performance => {
            performanceArray.push({
                value: performance.value,
                kind: translateKind[this.kind[performance.kind]]
            });
        });
        return performanceArray;
    }
}

export default PerformanceModel;