export default {
  name: 'articleService',
  service: ['$http', 'apiConstants', 'utilService', function ($http, apiConstants, utilService) {

    this.getArticles = (queryParams) => {
      const request = {
        method: 'GET',
        url: `${apiConstants.BASE_URL}${apiConstants.GET_ARTICLES_URL}`,
        params: Object.assign({ limit: 100 }, queryParams),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': utilService.getUser() ? `Bearer ${utilService.getUser().token}` : undefined
        }
      };
      return $http(request);
    }
  }]
}
