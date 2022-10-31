import angular from "angular";

import homeView from "./home";
import loginView from "./login";
import createArticleView from "./create-article";
import articleDetailView from "./article-detail";

export default angular.module("views", [
  homeView,
  loginView,
  createArticleView,
  articleDetailView,
]).name;
