export default {
    name: "authService",
    service: [
        "$http",
        "apiConstants",
        "$q",
        "toastService",
        function ($http, apiConstants, $q, toastService) {

            this.authenticateUser = (loginData) => {
                const request = {
                    method: "POST",
                    url: `${apiConstants.BASE_URL}${apiConstants.LOGIN_URL}`,
                    data: {
                        user: loginData,
                    },
                };
                return $http(request)
                    .then((resp) => $q.resolve(resp))
                    .catch((resp) => {
                        toastService.setToastMessage(
                            "Invalid Email or Password. Please try again."
                        );
                        toastService.show({ error: true });
                        return $q.reject(resp);
                    });
            };
        },
    ],
};
