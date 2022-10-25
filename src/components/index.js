import angular from 'angular';

import navigation from './navigation/navigation.component';
import articleCard from './article-card/article-card.component';
import modal from './modal/modal.component';
import toast from './toast/toast.component';

export default angular
  .module('components', [
    navigation,
    articleCard,
    modal,
    toast,
  ])
  .name;
