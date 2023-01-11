class ActivityModel {
    constructor(apiData) {
        this.data = apiData;
    }

    getActivities() {
        if (this.data) {
            const activityDays = [];

            for (let session of this.data) {
                const date = new Date(session.day);
                const jour = date.getDate();
                activityDays.push({
                    day: jour,
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