import loginScreenImg from '@Images/login-screen.png';

export default ['$scope', '$rootScope', 'authService', 'utilService', '$state', 'modalService', function ($scope, $rootScope, authService, utilService, $state, modalService) {

    $scope.isLoading = false;
    $scope.loginScreenImg = loginScreenImg;

    $scope.submitForm = () => {

        $scope.isLoading = true;

        const successCallBack = (response) => {
            $scope.isLoading = false;
            utilService.setUser(response.data.user);
            $rootScope.isLoggedIn = true;
            modalService.setTitle(`Welcome to the Article World ${response.data.user.username}`);
            modalService.setBody('You can create and read articles from all over the world.')
            modalService.show();
            $state.go('home');
        }

        const errorCallBack = () => {
            $scope.isLoading = false;
        }

        authService.authenticateUser($scope.user).then(successCallBack, errorCallBack);

    }

}];
