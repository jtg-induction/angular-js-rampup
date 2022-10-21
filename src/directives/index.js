import angular from 'angular';

import pagination from './pagination/pagination.directive';
import loader from './loader/loader.directive';

export default angular
    .module('directives', [
        pagination,
        loader
    ])
    .name;
