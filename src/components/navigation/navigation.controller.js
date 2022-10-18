export default ['$rootScope', '$scope', 'utilService', '$state', ($rootScope, $scope, utilService, $state) => {

    $rootScope.$watch('isLoggedIn', (newVal) => {
        $scope.isLoggedIn = newVal;
        $scope.username = $scope.isLoggedIn && utilService.getUser().username;
    });

    $scope.logoutUser = () => {
        utilService.deleteUser();
        $rootScope.isLoggedIn = false;
        $state.go('login');
    }

}]
