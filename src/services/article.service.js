export default {
  name: 'articleService',
  service: ['$http', 'apiConstants', function ($http, apiConstants) {

    this.getArticles = (queryParams) => {
      const request = {
        method: 'GET',
        url: `${apiConstants.BASE_URL}${apiConstants.GET_ARTICLES_URL}`,
        params: Object.assign({ limit: 20 }, queryParams),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      };
      return $http(request);
    }
  }]
}
