export default ['$stateProvider', 'routeConstants', '$urlRouterProvider', ($stateProvider, routeConstants, $urlRouterProvider) => {
    Object.keys(routeConstants).forEach(stateKey => {
        $stateProvider.state({
            name: stateKey,
            component: stateKey,
            url: routeConstants[stateKey],
        });
    });
    $urlRouterProvider.otherwise('/');
}]
