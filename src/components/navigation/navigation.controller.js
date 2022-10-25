export default ['$rootScope', '$scope', 'utilService', '$state', 'toastService', ($rootScope, $scope, utilService, $state, toastService) => {

    $rootScope.$watch('isLoggedIn', (newVal) => {
        $scope.isLoggedIn = newVal;
        $scope.username = $scope.isLoggedIn && utilService.getUser().username;
    });

    $scope.logoutUser = () => {
        utilService.deleteUser();
        $rootScope.isLoggedIn = false;
        toastService.setToastMessage('Logged out successfully.')
        toastService.show();
        $state.go('login');
    }

}]
