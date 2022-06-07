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

/***/ "./resources/assets/core/js/custom/apps/customers/view/statement.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/customers/view/statement.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTCustomerViewStatements = function () {\n  // Private functions\n  // Init current year datatable\n  var initStatementYearCurrent = function initStatementYearCurrent() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_1';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2020 datatable\n\n\n  var initStatementYear2020 = function initStatementYear2020() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_2';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2019 datatable\n\n\n  var initStatementYear2019 = function initStatementYear2019() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_3';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2018 datatable\n\n\n  var initStatementYear2018 = function initStatementYear2018() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_4';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initStatementYearCurrent();\n      initStatementYear2020();\n      initStatementYear2019();\n      initStatementYear2018();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTCustomerViewStatements.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvY3VzdG9tZXJzL3ZpZXcvc3RhdGVtZW50LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHdCQUF3QixHQUFHLFlBQVk7RUFFdkM7RUFDQTtFQUNBLElBQUlDLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBWTtJQUN2QztJQUNBLElBQU1DLEVBQUUsR0FBRyxxQ0FBWDtJQUNBLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxFQUF2QixDQUFaLENBSHVDLENBS3ZDOztJQUNBLElBQU1JLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxnQkFBTixDQUF1QixVQUF2QixDQUFsQjtJQUVBRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO01BQ3JCLElBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRixnQkFBSixDQUFxQixJQUFyQixDQUFoQjtNQUNBLElBQU1JLFFBQVEsR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFNBQVosRUFBdUIsaUJBQXZCLENBQU4sQ0FBZ0RDLE1BQWhELEVBQWpCLENBRnFCLENBRXNEOztNQUMzRUosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDSixRQUF0QztJQUNILENBSkQsRUFSdUMsQ0FjdkM7O0lBQ0EsSUFBSUssU0FBUyxHQUFHQyxDQUFDLENBQUNmLEVBQUQsQ0FBRCxDQUFNZ0IsU0FBTixDQUFnQjtNQUM1QixRQUFRLEtBRG9CO01BRTVCLFNBQVMsRUFGbUI7TUFHNUIsY0FBYyxFQUhjO01BSTVCLGdCQUFnQixLQUpZO01BSzVCLGNBQWMsQ0FDVjtRQUFFQyxTQUFTLEVBQUUsS0FBYjtRQUFvQkMsT0FBTyxFQUFFO01BQTdCLENBRFUsQ0FDd0I7TUFEeEI7SUFMYyxDQUFoQixDQUFoQjtFQVNILENBeEJELENBSnVDLENBOEJ2Qzs7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LElBQXJCLENBQWhCO01BQ0EsSUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csU0FBWixFQUF1QixpQkFBdkIsQ0FBTixDQUFnREMsTUFBaEQsRUFBakIsQ0FGcUIsQ0FFc0Q7O01BQzNFSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NKLFFBQXRDO0lBQ0gsQ0FKRCxFQVJvQyxDQWNwQzs7SUFDQSxJQUFJSyxTQUFTLEdBQUdDLENBQUMsQ0FBQ2YsRUFBRCxDQUFELENBQU1nQixTQUFOLENBQWdCO01BQzVCLFFBQVEsS0FEb0I7TUFFNUIsU0FBUyxFQUZtQjtNQUc1QixjQUFjLEVBSGM7TUFJNUIsZ0JBQWdCLEtBSlk7TUFLNUIsY0FBYyxDQUNWO1FBQUVDLFNBQVMsRUFBRSxLQUFiO1FBQW9CQyxPQUFPLEVBQUU7TUFBN0IsQ0FEVSxDQUN3QjtNQUR4QjtJQUxjLENBQWhCLENBQWhCO0VBU0gsQ0F4QkQsQ0FyRnVDLENBK0d2Qzs7O0VBQ0EsT0FBTztJQUNISSxJQUFJLEVBQUUsZ0JBQVk7TUFDZHZCLHdCQUF3QjtNQUN4Qm9CLHFCQUFxQjtNQUNyQkMscUJBQXFCO01BQ3JCQyxxQkFBcUI7SUFDeEI7RUFORSxDQUFQO0FBUUgsQ0F4SDhCLEVBQS9CLEMsQ0EwSEE7OztBQUNBRSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7RUFDbEMxQix3QkFBd0IsQ0FBQ3dCLElBQXpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vYXBwcy9jdXN0b21lcnMvdmlldy9zdGF0ZW1lbnQuanM/NjFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQ3VzdG9tZXJWaWV3U3RhdGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgLy8gSW5pdCBjdXJyZW50IHllYXIgZGF0YXRhYmxlXHJcbiAgICB2YXIgaW5pdFN0YXRlbWVudFllYXJDdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSB0YWJsZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgaWQgPSAnI2t0X2N1c3RvbWVyX3ZpZXdfc3RhdGVtZW50X3RhYmxlXzEnO1xyXG4gICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZGF0ZSBkYXRhIG9yZGVyXHJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcclxuXHJcbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzBdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gMXN0IGNvbHVtbiBpbiB0YWJsZVxyXG4gICAgICAgICAgICBkYXRlUm93WzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cclxuICAgICAgICB2YXIgZGF0YXRhYmxlID0gJChpZCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcclxuICAgICAgICAgICAgXCJwYWdlTGVuZ3RoXCI6IDEwLFxyXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXHJcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDQgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gMCAoZG93bmxvYWQpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0IHllYXIgMjAyMCBkYXRhdGFibGVcclxuICAgIHZhciBpbml0U3RhdGVtZW50WWVhcjIwMjAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRGVmaW5lIHRhYmxlIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBpZCA9ICcja3RfY3VzdG9tZXJfdmlld19zdGF0ZW1lbnRfdGFibGVfMic7XHJcbiAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBkYXRlIGRhdGEgb3JkZXJcclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xyXG5cclxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KGRhdGVSb3dbMF0uaW5uZXJIVE1MLCBcIkREIE1NTSBZWVlZLCBMVFwiKS5mb3JtYXQoKTsgLy8gc2VsZWN0IGRhdGUgZnJvbSAxc3QgY29sdW1uIGluIHRhYmxlXHJcbiAgICAgICAgICAgIGRhdGVSb3dbMF0uc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgcmVhbERhdGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xyXG4gICAgICAgIHZhciBkYXRhdGFibGUgPSAkKGlkKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxyXG4gICAgICAgICAgICBcInBhZ2VMZW5ndGhcIjogMTAsXHJcbiAgICAgICAgICAgIFwibGVuZ3RoQ2hhbmdlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAnY29sdW1uRGVmcyc6IFtcclxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogNCB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAwIChkb3dubG9hZClcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXQgeWVhciAyMDE5IGRhdGF0YWJsZVxyXG4gICAgdmFyIGluaXRTdGF0ZW1lbnRZZWFyMjAxOSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEZWZpbmUgdGFibGUgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGlkID0gJyNrdF9jdXN0b21lcl92aWV3X3N0YXRlbWVudF90YWJsZV8zJztcclxuICAgICAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XHJcblxyXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSb3cgPSByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1swXS5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpOyAvLyBzZWxlY3QgZGF0ZSBmcm9tIDFzdCBjb2x1bW4gaW4gdGFibGVcclxuICAgICAgICAgICAgZGF0ZVJvd1swXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXHJcbiAgICAgICAgdmFyIGRhdGF0YWJsZSA9ICQoaWQpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ29yZGVyJzogW10sXHJcbiAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiAxMCxcclxuICAgICAgICAgICAgXCJsZW5ndGhDaGFuZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICdjb2x1bW5EZWZzJzogW1xyXG4gICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiA0IH0sIC8vIERpc2FibGUgb3JkZXJpbmcgb24gY29sdW1uIDAgKGRvd25sb2FkKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdCB5ZWFyIDIwMTggZGF0YXRhYmxlXHJcbiAgICB2YXIgaW5pdFN0YXRlbWVudFllYXIyMDE4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSB0YWJsZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgaWQgPSAnI2t0X2N1c3RvbWVyX3ZpZXdfc3RhdGVtZW50X3RhYmxlXzQnO1xyXG4gICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZGF0ZSBkYXRhIG9yZGVyXHJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcclxuXHJcbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzBdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gMXN0IGNvbHVtbiBpbiB0YWJsZVxyXG4gICAgICAgICAgICBkYXRlUm93WzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cclxuICAgICAgICB2YXIgZGF0YXRhYmxlID0gJChpZCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcclxuICAgICAgICAgICAgXCJwYWdlTGVuZ3RoXCI6IDEwLFxyXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXHJcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDQgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gMCAoZG93bmxvYWQpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRTdGF0ZW1lbnRZZWFyQ3VycmVudCgpO1xyXG4gICAgICAgICAgICBpbml0U3RhdGVtZW50WWVhcjIwMjAoKTtcclxuICAgICAgICAgICAgaW5pdFN0YXRlbWVudFllYXIyMDE5KCk7XHJcbiAgICAgICAgICAgIGluaXRTdGF0ZW1lbnRZZWFyMjAxOCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEN1c3RvbWVyVmlld1N0YXRlbWVudHMuaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RDdXN0b21lclZpZXdTdGF0ZW1lbnRzIiwiaW5pdFN0YXRlbWVudFllYXJDdXJyZW50IiwiaWQiLCJ0YWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiZGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJpbml0U3RhdGVtZW50WWVhcjIwMjAiLCJpbml0U3RhdGVtZW50WWVhcjIwMTkiLCJpbml0U3RhdGVtZW50WWVhcjIwMTgiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/customers/view/statement.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/customers/view/statement.js"]();
/******/ 	
/******/ })()
;