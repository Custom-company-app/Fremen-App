(()=>{"use strict";var e,t,o,n,i,r,a,s={init:function(){var s,l,c;e=document.querySelector("#kt_coming_soon_form"),t=document.querySelector("#kt_coming_soon_submit"),n=document.querySelector("#kt_coming_soon_counter_days"),i=document.querySelector("#kt_coming_soon_counter_hours"),r=document.querySelector("#kt_coming_soon_counter_minutes"),a=document.querySelector("#kt_coming_soon_counter_seconds"),o=FormValidation.formValidation(e,{fields:{email:{validators:{notEmpty:{message:"Email address is required"},emailAddress:{message:"The value is not a valid email address"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(function(n){n.preventDefault(),o.validate().then((function(o){"Valid"==o?(t.setAttribute("data-kt-indicator","on"),t.disabled=!0,setTimeout((function(){t.removeAttribute("data-kt-indicator"),t.disabled=!1,Swal.fire({text:"You have successfully subscribed !",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed&&(e.querySelector('[name="email"]').value="")}))}),2e3)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),s=new Date,l=new Date(s.getTime()+1296e6+36e6+9e5).getTime(),c=function(){var e=(new Date).getTime(),t=l-e,o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),u=Math.floor(t%6e4/1e3);n.innerHTML=o,i.innerHTML=s,r.innerHTML=c,a.innerHTML=u},setInterval(c,1e3),c()}};KTUtil.onDOMContentLoaded((function(){s.init()}))})();