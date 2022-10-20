import angular from "angular"
import { Modal } from 'bootstrap';
import $ from 'jquery';

import template from './modal.template.html'

export default angular.module('modal', [])
    .component('modal', {
        template,
        controller: ['modalService', '$scope', (modalService, $scope) => {
            modalService.modal = new Modal(document.getElementById('modal-root'), { focus: true });

            $('#modal-button').on('click', function () {
                $scope.isLoading = true;
                modalService.callbackOnClick(() => {
                    $scope.isLoading = false;
                });
            })
        }]

    })
    .service('modalService', function () {

        this.modal = null;

        this.show = () => {
            if (this.modal)
                this.modal.show();
        }

        this.hide = () => {
            if (this.modal)
                this.modal.hide();
        }

        this.setTitle = (title) => {
            $('#modal-title').text(title);
        }

        this.setBody = (body) => {
            $('#modal-body').text(body);
        }

        this.showConfirmButton = () => $('.modal-footer').removeClass('d-none');
        this.hideConfirmButton = () => $('.modal-footer').addClass('d-none')

        this.setConfirmMessage = (msg) => $('#modal-button-text').text = msg;

        this.handleConfirm = (callbackOnClick) => {
            this.callbackOnClick = callbackOnClick;
        }

    })
    .name
