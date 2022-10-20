export default {
  name: 'articleService',
  service: ['$http', 'apiConstants', 'utilService', 'localStorageService', function ($http, apiConstants, utilService, localStorageService) {

    this.getArticles = (queryParams) => {
      const request = {
        method: 'GET',
        url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}`,
        params: Object.assign({ limit: 100 }, queryParams),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': utilService.getUser() ? `Bearer ${utilService.getUser().token}` : undefined
        }
      };
      return $http(request);
    }

    this.getArticle = (slug) => {
      const request = {
        method: 'GET',
        url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}/${slug}`,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': utilService.getUser() ? `Bearer ${utilService.getUser().token}` : undefined
        }
      };
      return $http(request);
    }

    this.createArticle = (data) => {
      const request = {
        method: 'POST',
        url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}`,
        data: {
          'article': data,
        },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': utilService.getUser() ? `Bearer ${utilService.getUser().token}` : undefined
        }
      };
      return $http(request);
    }

    this.deleteArticle = (slug) => {
      const request = {
        method: 'DELETE',
        url: `${apiConstants.BASE_URL}${apiConstants.ARTICLES_URL}/${slug}`,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': utilService.getUser() ? `Bearer ${utilService.getUser().token}` : undefined
        }
      };
      return $http(request);
    }

    this.articleSlug;

    this.setArticleSlug = (slug) => {
      this.articleSlug = slug;
      localStorageService.set('articleSlug', slug);
    }

    this.getArticleSlug = () => this.articleSlug || localStorageService.get('articleSlug');

    this.resetArticleSlug = () => {
      this.articleSlug = undefined;
      localStorageService.remove('articleSlug');
    }
  }]
}
