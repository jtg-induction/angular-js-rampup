export default ['$scope', 'articleService', 'localStorageService', 'apiConstants', function ($scope, articleService, localStorageService, apiConstants) {

    $scope.isLoading = true;

    $scope.searchText = localStorageService.get('tagSearchText') || localStorageService.get('authorSearchText');

    $scope.articleQueryParams = {
        limit: apiConstants.ARTICLE_LIMIT,
        tag: localStorageService.get('tagSearchText'),
        author: localStorageService.get('authorSearchText'),
    };

    $scope.handlePageChange = (pageValue) => {
        $scope.articleQueryParams.offset = apiConstants.ARTICLE_LIMIT * (pageValue - 1);

        articleService.getArticles(
            $scope.articleQueryParams
        ).then(successCallBack, errorCallBack);
    }

    $scope.filterBy = (filter) => {
        if ($scope.searchText === undefined) {
            return;
        }
        localStorageService.set(filter === 'author' ? 'authorSearchText' : 'tagSearchText', $scope.searchText);
        localStorageService.remove(filter === 'tag' ? 'authorSearchText' : 'tagSearchText');
        $scope.articleQueryParams.offset = undefined
        $scope.articleQueryParams.tag = localStorageService.get('tagSearchText');
        $scope.articleQueryParams.author = localStorageService.get('authorSearchText');
        $scope.isLoading = true;
        $scope.articleQueryParams[filter] = $scope.searchText || undefined;
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
    }

    $scope.removeFilter = () => {
        $scope.isLoading = true;
        localStorageService.remove('authorSearchText', 'tagSearchText');
        $scope.articleQueryParams.tag = localStorageService.get('tagSearchText');
        $scope.articleQueryParams.author = localStorageService.get('authorSearchText');
        $scope.searchText = '';
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
    }

    const successCallBack = (response) => {
        $scope.isLoading = false;
        $scope.articleData = response.data.articles;
        $scope.itemCount = response.data.articlesCount;
    }

    const errorCallBack = () => {
        $scope.isLoading = false;
        $scope.articleData = null;
    }

}]
