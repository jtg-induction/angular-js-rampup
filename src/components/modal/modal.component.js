import angular from "angular"
import { Modal } from 'bootstrap';
import $ from 'jquery';

import template from './modal.template.html'

export default angular.module('modal', [])
    .component('modal', {
        template,
        controller: ['modalService', (modalService) => {
            modalService.modal = new Modal(document.getElementById('modal-root'), { focus: true });
        }]

    })
    .service('modalService', function () {

        this.modal = null;

        this.show = () => {
            if (this.modal)
                this.modal.show();
        }

        this.setTitle = (title) => {
            $('#modal-title').text(title);
        }

        this.setBody = (body) => {
            $('#modal-body').text(body);
        }

    })
    .name
