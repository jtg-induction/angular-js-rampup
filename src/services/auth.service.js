export default {
  name: "authService",
  service: [
    "Restangular",
    "apiConstants",
    "$q",
    "toastService",
    function (Restangular, apiConstants, $q, toastService) {
      this.authenticateUser = (loginData) => {
        return Restangular.all(apiConstants.LOGIN_URL)
          .post(loginData)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            if (resp.status === apiConstants.API_STATUS_CODES.FORBIDDEN) {
              toastService.setToastMessage(
                "Invalid Email or Password. Please try again."
              );
            }
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };
    },
  ],
};
