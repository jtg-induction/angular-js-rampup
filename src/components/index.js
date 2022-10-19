import angular from 'angular';

import navigation from './navigation/navigation.component';
import articleCard from './article-card/article-card.component';
import modal from './modal/modal.component';

export default angular
  .module('components', [
    navigation,
    articleCard,
    modal,
  ])
  .name;
