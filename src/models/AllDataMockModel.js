
/**
 * All Data Mock Class Model
 * @typedef AllMockDataType
 * @type {Object}
 * @property {Array.<Object>} activity
 * @property {Array.<Object>} average
 * @property {Array.<Object>} performances
 * @property {Array.<Object>} user
 */
class AllDataMockModel {
    /**
     * Modeling class for the Mock that contains all the data
     * @param {AllMockDataType} - apiData
     */
    constructor(apiData) {
        this.data = apiData;
        console.log(this.data);
        this.users = apiData.user;
    }

    /**
    * Get users data for Homepage
    * @returns {Array.<Object>} usersArray
    */
    getHomeData() {
        let usersArray = [];
        this.users.forEach(user => {
            usersArray.push({
                id: user.id,
                firstName: user.userInfos.firstName
            });
        });
        return usersArray;
    }
}

export default AllDataMockModel;



