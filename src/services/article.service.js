import _ from "lodash";

export default {
  name: "articleService",
  service: [
    "apiConstants",
    "utilService",
    "localStorageService",
    "$q",
    "toastService",
    "Restangular",
    function (
      apiConstants,
      utilService,
      localStorageService,
      $q,
      toastService,
      Restangular
    ) {
      if (!_.isEmpty(utilService.getUser())) {
        Restangular.setDefaultHeaders({
          Authorization: `Bearer ${utilService.getUser().token}`,
          Accept: "application/json; charset=utf-8",
        });
      }

      this.getArticles = (queryParams) => {
        return Restangular.one(apiConstants.ARTICLES_URL)
          .get(Object.assign({ limit: 10 }, queryParams))
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.getArticle = (slug) => {
        return Restangular.one(apiConstants.ARTICLES_URL, slug)
          .get()
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.createArticle = (data) => {
        return Restangular.all(apiConstants.ARTICLES_URL)
          .post(data)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            const errorMessage = `Title ${resp.data.errors.title.join(", ")}`;
            toastService.setToastMessage(errorMessage);
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.deleteArticle = (slug) => {
        return Restangular.one(apiConstants.ARTICLES_URL, slug)
          .remove()
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      /**
       * As article slug can be large, we do not send it in the URL path
       * and instead use a service to get the current article slug selected
       */
      this.setArticleSlug = (slug) => {
        localStorageService.set("articleSlug", slug);
      };

      this.getArticleSlug = () => localStorageService.get("articleSlug");

      this.resetArticleSlug = () => {
        localStorageService.remove("articleSlug");
      };
    },
  ],
};
