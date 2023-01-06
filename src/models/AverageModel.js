class AverageModel {
    constructor(apiData) {
        this.data = apiData;
    }

    sessions() {
        let averageSessions = [
            {
                day: "L",
                sessionLength: 0,
            },
            {
                day: "M",
                sessionLength: 0,
            },
            {
                day: "M",
                sessionLength: 0,
            },
            {
                day: "J",
                sessionLength: 0,
            },
            {
                day: "V",
                sessionLength: 0,
            },
            {
                day: "S",
                sessionLength: 0,
            },
            {
                day: "D",
                sessionLength: 0,
            },
        ];

        const average = averageSessions;
        for (let i in this.data) {
            average[i].sessionLength = this.data[i].sessionLength;
        }

        return average;
    }
}

export default AverageModel;