import angular from "angular";

export default angular.module('constants', [])
    .constant('routeConstants', {
        // keys should match view component names
        home: '/?page',
        login: '/login',
        articleDetail: '/article/:slug'
    })
    .constant('apiConstants', {
        BASE_URL: 'https://api.realworld.io/api/',
        LOGIN_URL: 'users/login',
        GET_ARTICLES_URL: 'articles',
    })
    .name;
