import loginScreenImg from '@Images/login-screen.png';

export default ['$scope', '$rootScope', 'authService', 'utilService', '$state', function ($scope, $rootScope, authService, utilService, $state) {

    $scope.isLoading = false;
    $scope.loginScreenImg = loginScreenImg;

    $scope.submitForm = () => {

        $scope.isLoading = true;

        const successCallBack = (response) => {
            $scope.isLoading = false;
            utilService.setUser(response.data.user);
            $rootScope.isLoggedIn = true;
            $state.go('home');
        }

        const errorCallBack = () => {
            $scope.isLoading = false;
            $scope.apiError = 'Invalid email or password';
            $scope.user.password = '';
        }

        authService.authenticateUser($scope.user).then(successCallBack, errorCallBack);

    }

}];
