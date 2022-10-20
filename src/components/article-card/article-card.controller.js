export default ['articleService', '$scope', (articleService, $scope) => {
    $scope.setArticleSlug = (slug) => {
        articleService.setArticleSlug(slug);
    }
}];
