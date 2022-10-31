import angular from "angular";

export default angular
  .module("constants", [])
  .constant("routeConstants", {
    // keys should match view component names
    home: "/?page",
    login: "/login",
    articleDetail: "/article",
    createArticle: "/create",
  })
  .constant("apiConstants", {
    BASE_URL: "https://api.realworld.io/api/",
    LOGIN_URL: "users/login",
    ARTICLES_URL: "articles",
    ARTICLE_LIMIT: 20,
    API_STATUS_CODES: {
      FORBIDDEN: 403,
    },
  }).name;
