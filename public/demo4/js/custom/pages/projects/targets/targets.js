/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/demo4/js/custom/pages/projects/targets/targets.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/demo4/js/custom/pages/projects/targets/targets.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectTargets = function () {\n  var initDatatable = function initDatatable() {\n    var table = document.getElementById('kt_profile_overview_table'); // set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n      dateRow[1].setAttribute('data-order', realDate);\n    }); // init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"paging\": false\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initDatatable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectTargets.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW80L2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy90YXJnZXRzL3RhcmdldHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtFQUUvQixJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7SUFDNUIsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWQsQ0FENEIsQ0FHNUI7O0lBQ0EsSUFBTUMsU0FBUyxHQUFHSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCLFVBQXZCLENBQWxCO0lBQ0FELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxHQUFHLEVBQUk7TUFDckIsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNGLGdCQUFKLENBQXFCLElBQXJCLENBQWhCO01BQ0EsSUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csU0FBWixFQUF1QixhQUF2QixDQUFOLENBQTRDQyxNQUE1QyxFQUFqQjtNQUNBSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NKLFFBQXRDO0lBQ0gsQ0FKRCxFQUw0QixDQVc1Qjs7SUFDQSxJQUFNSyxTQUFTLEdBQUdDLENBQUMsQ0FBQ2QsS0FBRCxDQUFELENBQVNlLFNBQVQsQ0FBbUI7TUFDakMsUUFBUSxLQUR5QjtNQUVqQyxTQUFTLEVBRndCO01BR2pDLFVBQVU7SUFIdUIsQ0FBbkIsQ0FBbEI7RUFNSCxDQWxCRCxDQUYrQixDQXNCL0I7OztFQUNBLE9BQU87SUFDSEMsSUFBSSxFQUFFLGdCQUFZO01BQ2RqQixhQUFhO0lBQ2hCO0VBSEUsQ0FBUDtBQUtILENBNUJzQixFQUF2QixDLENBK0JBOzs7QUFDQWtCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztFQUNqQ3BCLGdCQUFnQixDQUFDa0IsSUFBakI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9kZW1vNC9qcy9jdXN0b20vcGFnZXMvcHJvamVjdHMvdGFyZ2V0cy90YXJnZXRzLmpzPzllMzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVFByb2plY3RUYXJnZXRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBpbml0RGF0YXRhYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X3Byb2ZpbGVfb3ZlcnZpZXdfdGFibGUnKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGRhdGUgZGF0YSBvcmRlclxyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XHJcbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzFdLmlubmVySFRNTCwgXCJNTU0gRCwgWVlZWVwiKS5mb3JtYXQoKTtcclxuICAgICAgICAgICAgZGF0ZVJvd1sxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXHJcbiAgICAgICAgY29uc3QgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcclxuICAgICAgICAgICAgXCJwYWdpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdERhdGF0YWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVFByb2plY3RUYXJnZXRzLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RUYXJnZXRzIiwiaW5pdERhdGF0YWJsZSIsInRhYmxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiZGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/demo4/js/custom/pages/projects/targets/targets.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/demo4/js/custom/pages/projects/targets/targets.js"]();
/******/ 	
/******/ })()
;