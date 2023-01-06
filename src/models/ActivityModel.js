class ActivityModel {
    constructor(apiData) {
        this.data = apiData;
    }

    dayActivity() {
        if (this.data) {
            const activityDays = [];

            for (let session of this.data) {
                const [dd] = session.day.split("-");
                activityDays.push({
                    day: `${dd.slice(1)}`,
                    kilogram: session.kilogram,
                    calories: session.calories,
                });
            }
            return activityDays;
        }
        return this.dayActivity();
    }
}

export default ActivityModel;