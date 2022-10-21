export default ['$scope', '$state', 'articleService', 'modalService', 'utilService', function ($scope, $state, articleService, modalService, utilService) {

    $scope.isLoading = true;

    const successCallBack = (response) => {
        $scope.isLoading = false;
        $scope.article = response.data.article;
    }

    const errorCallBack = () => {
        $scope.isLoading = false;
        $state.go('home');
    }

    const articleSlug = articleService.getArticleSlug();


    if (articleSlug) {
        articleService.getArticle(articleSlug).then(successCallBack, errorCallBack);
    }

    const deleteArticle = (modalCallBack) => {
        articleService.deleteArticle(articleSlug).then(() => {
            modalCallBack();
            modalService.setTitle(`Success`);
            modalService.setBody('Article deleted successfully');
            modalService.hideConfirmButton();
            modalService.show();
            $state.go('home');
        }, () => {
            modalCallBack();
        })
    }

    $scope.handleClick = () => {
        modalService.setTitle(`Delete Article`);
        modalService.setBody('Are you sure you want to delete this article?');
        modalService.showConfirmButton();
        modalService.setConfirmMessage('Confirm');
        modalService.handleConfirm(deleteArticle);
        modalService.show();
    }

    $scope.isMyArticle = () => {
        return ($scope.article && $scope.article.author.username === utilService.getUser().username);
    }


}]
