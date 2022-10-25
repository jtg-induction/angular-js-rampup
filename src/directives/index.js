import angular from 'angular';

import pagination from './pagination/pagination.directive';
import loader from './loader/loader.directive';
import filter from './filter/filter.directive';

export default angular
    .module('directives', [
        pagination,
        loader,
        filter
    ])
    .name;
