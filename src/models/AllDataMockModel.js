/**
 * Modeling class for the Mock that contains all the data
 * @param {Object} - apiData
 */
class AllDataMockModel {
    constructor(apiData) {
        this.data = apiData;
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



