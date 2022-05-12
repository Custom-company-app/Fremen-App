(()=>{"use strict";var e={init:function(){var e;["kt_ecommerce_settings_general_form","kt_ecommerce_settings_general_store","kt_ecommerce_settings_general_localization","kt_ecommerce_settings_general_products","kt_ecommerce_settings_general_customers"].forEach((function(e){var t=document.getElementById(e);if(t){var r,n=t.querySelectorAll(".required"),o={fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}};n.forEach((function(e){var t=e.closest(".row").querySelector("input");t&&(r=t);var n=e.closest(".row").querySelector("textarea");n&&(r=n);var i=e.closest(".row").querySelector("select");i&&(r=i);var a=r.getAttribute("name");o.fields[a]={validators:{notEmpty:{message:e.innerText+" is required"}}}}));var i=FormValidation.formValidation(t,o),a=t.querySelector('[data-kt-ecommerce-settings-type="submit"]');a.addEventListener("click",(function(e){e.preventDefault(),i&&i.validate().then((function(e){console.log("validated!"),"Valid"==e?(a.setAttribute("data-kt-indicator","on"),a.disabled=!0,setTimeout((function(){a.removeAttribute("data-kt-indicator"),a.disabled=!1,Swal.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}),2e3)):Swal.fire({text:"Oops! There are some error(s) detected.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))}))}})),document.querySelectorAll('[data-kt-ecommerce-settings-type="tagify"]').forEach((function(e){new Tagify(e)})),e=function(e){if(!e.id)return e.text;var t=document.createElement("span"),r="";return r+='<img src="'+e.element.getAttribute("data-kt-select2-country")+'" class="rounded-circle h-20px me-2" alt="image"/>',r+=e.text,t.innerHTML=r,$(t)},$('[data-kt-ecommerce-settings-type="select2_flags"]').select2({placeholder:"Select a country",minimumResultsForSearch:1/0,templateSelection:e,templateResult:e})}};KTUtil.onDOMContentLoaded((function(){e.init()}))})();