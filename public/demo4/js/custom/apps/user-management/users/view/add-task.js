(()=>{"use strict";var t,e,n,o=(t=document.getElementById("kt_modal_add_task"),e=t.querySelector("#kt_modal_add_task_form"),n=new bootstrap.Modal(t),{init:function(){!function(){$("#kt_modal_add_task_datepicker").flatpickr({dateFormat:"Y-m-d"});var o=FormValidation.formValidation(e,{fields:{task_duedate:{validators:{notEmpty:{message:"Task due date is required"}}},task_name:{validators:{notEmpty:{message:"Task name is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}});t.querySelector('[data-kt-users-modal-action="close"]').addEventListener("click",(function(t){t.preventDefault(),Swal.fire({text:"Are you sure you would like to cancel?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, cancel it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?(e.reset(),n.hide()):"cancel"===t.dismiss&&Swal.fire({text:"Your form has not been cancelled!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),t.querySelector('[data-kt-users-modal-action="cancel"]').addEventListener("click",(function(t){t.preventDefault(),Swal.fire({text:"Are you sure you would like to cancel?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, cancel it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?(e.reset(),n.hide()):"cancel"===t.dismiss&&Swal.fire({text:"Your form has not been cancelled!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}));var i=t.querySelector('[data-kt-users-modal-action="submit"]');i.addEventListener("click",(function(t){t.preventDefault(),o&&o.validate().then((function(t){console.log("validated!"),"Valid"==t?(i.setAttribute("data-kt-indicator","on"),i.disabled=!0,setTimeout((function(){i.removeAttribute("data-kt-indicator"),i.disabled=!1,Swal.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed&&n.hide()}))}),2e3)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}))}(),document.querySelectorAll('[data-kt-menu-id="kt-users-tasks"]').forEach((function(t){var e=t.querySelector('[data-kt-users-update-task-status="reset"]'),n=t.querySelector('[data-kt-users-update-task-status="submit"]'),o=t.querySelector('[data-kt-menu-id="kt-users-tasks-form"]'),i=FormValidation.formValidation(o,{fields:{task_status:{validators:{notEmpty:{message:"Task due date is required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}});$(o.querySelector('[name="task_status"]')).on("change",(function(){i.revalidateField("task_status")})),e.addEventListener("click",(function(e){e.preventDefault(),Swal.fire({text:"Are you sure you would like to reset?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"Yes, reset it!",cancelButtonText:"No, return",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(e){e.value?(o.reset(),t.hide()):"cancel"===e.dismiss&&Swal.fire({text:"Your form was not reset!.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),n.addEventListener("click",(function(e){e.preventDefault(),i&&i.validate().then((function(e){console.log("validated!"),"Valid"==e?(n.setAttribute("data-kt-indicator","on"),n.disabled=!0,setTimeout((function(){n.removeAttribute("data-kt-indicator"),n.disabled=!1,Swal.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(e){e.isConfirmed&&t.hide()}))}),2e3)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){}))}))}))}))}});KTUtil.onDOMContentLoaded((function(){o.init()}))})();