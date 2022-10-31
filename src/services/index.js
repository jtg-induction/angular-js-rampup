import angular from "angular";

import utilService from "./util.service";
import authService from "./auth.service";
import articleService from "./article.service";

export default angular
  .module("services", [])
  .service(utilService.name, utilService.service)
  .service(authService.name, authService.service)
  .service(articleService.name, articleService.service).name;
