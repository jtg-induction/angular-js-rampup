export default {
    name: 'authService',
    service: ['$http', 'apiConstants', function ($http, apiConstants) {

        this.authenticateUser = (loginData) => {
            const request = {
                method: 'POST',
                url: `${apiConstants.BASE_URL}${apiConstants.LOGIN_URL}`,
                data: {
                    'user': loginData,
                },
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                }
            };
            return $http(request);
        }
    }]
}
