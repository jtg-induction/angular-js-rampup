import angular from "angular";
import { Toast } from "bootstrap";
import $ from "jquery";

import template from "./toast.template.html";
import "./toast.style.scss";

export default angular
  .module("toast", [])
  .component("toast", {
    template,
    controller: [
      "toastService",
      (toastService) => {
        toastService.toast = new Toast(document.getElementById("liveToast"), {
          autohide: true,
          delay: 5000,
          animation: true,
        });
      },
    ],
  })
  .service("toastService", function () {
    this.toast = null;

    this.show = (config) => {
      if (this.toast) this.toast.show();
      if (config && config.error) {
        $("#liveToast").addClass("error");
      } else {
        $("#liveToast").removeClass("error");
      }
    };

    this.hide = () => {
      if (this.toast) this.toast.hide();
    };

    this.setToastMessage = (msg) => {
      $("#toast-message").text(msg);
    };
  }).name;
