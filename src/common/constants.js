import angular from "angular";
// import config from './config'

export default angular.module('constants', [])
    .constant('routeConstants', {
        // keys should match view component names
        home: '/',
        login: '/login',
        articleDetail: '/article/'
    })
    .constant('apiConstants', {
        BASE_URL: 'https://api.realworld.io/api/',
        LOGIN_URL: 'users/login',
        GET_ARTICLES_URL: 'articles'
    })
    .name;
