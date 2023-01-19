/**
 * Modeling class for Performance data
 * @param {Object} - apiData
 */
class PerformanceModel {
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