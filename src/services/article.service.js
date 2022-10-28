export default {
  name: "articleService",
  service: [
    "$http",
    "apiConstants",
    "utilService",
    "localStorageService",
    "$q",
    "toastService",
    function ($http, apiConstants, utilService, localStorageService, $q, toastService) {

      $http.defaults.headers.common.Authorization = utilService.getUser()
        ? `Bearer ${utilService.getUser().token}`
        : undefined;
      $http.defaults.headers.common.Accept = "application/json; charset=utf-8";

      this.getArticles = (queryParams) => {
        const request = {
          method: "GET",
          url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}`,
          params: Object.assign({ limit: 10 }, queryParams),
        };
        return $http(request)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.getArticle = (slug) => {
        const request = {
          method: "GET",
          url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}/${slug}`,
        };
        return $http(request)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.createArticle = (data) => {
        const request = {
          method: "POST",
          url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}`,
          data: {
            article: data,
          },
        };
        return $http(request)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            const errorMessage = `Title ${resp.data.errors.title.join(", ")}`;
            toastService.setToastMessage(errorMessage);
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.deleteArticle = (slug) => {
        const request = {
          method: "DELETE",
          url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}/${slug}`,
        };
        return $http(request)
          .then((resp) => $q.resolve(resp))
          .catch((resp) => {
            toastService.show({ error: true });
            return $q.reject(resp);
          });
      };

      this.articleSlug;

      this.setArticleSlug = (slug) => {
        this.articleSlug = slug;
        localStorageService.set("articleSlug", slug);
      };

      this.getArticleSlug = () =>
        this.articleSlug || localStorageService.get("articleSlug");

      this.resetArticleSlug = () => {
        this.articleSlug = undefined;
        localStorageService.remove("articleSlug");
      };
    },
  ],
};
