(()=>{"use strict";var a={init:function(){!function(){for(var a=[],t=[],i=0;i<14;i+=.1)a.push([i,Math.sin(i)]),t.push([i,Math.cos(i)]);var e=$.plot($("#kt_docs_flot_tracking"),[{data:a,label:"sin(x) = -0.00",lines:{lineWidth:1},shadowSize:0},{data:t,label:"cos(x) = -0.00",lines:{lineWidth:1},shadowSize:0}],{colors:[KTUtil.getCssVariableValue("--bs-active-primary"),KTUtil.getCssVariableValue("--bs-active-warning")],series:{lines:{show:!0}},crosshair:{mode:"x"},grid:{hoverable:!0,autoHighlight:!1,tickColor:KTUtil.getCssVariableValue("--bs-light-dark"),borderColor:KTUtil.getCssVariableValue("--bs-light-dark"),borderWidth:1},yaxis:{min:-1.2,max:1.2}}),l=$("#kt_docs_flot_tracking .legendLabel");l.each((function(){$(this).css("width",$(this).width())}));var s=null,n=null;function o(){s=null;var a=n,t=e.getAxes();if(!(a.x<t.xaxis.min||a.x>t.xaxis.max||a.y<t.yaxis.min||a.y>t.yaxis.max)){var i,o,r=e.getData();for(i=0;i<r.length;++i){var d=r[i];for(o=0;o<d.data.length&&!(d.data[o][0]>a.x);++o);var h,c=d.data[o-1],u=d.data[o];h=null==c?u[1]:null==u?c[1]:c[1]+(u[1]-c[1])*(a.x-c[0])/(u[0]-c[0]),l.eq(i).text(d.label.replace(/=.*/,"= "+h.toFixed(2)))}}}$("#kt_docs_flot_tracking").bind("plothover",(function(a,t,i){n=t,s||(s=setTimeout(o,50))}))}()}};KTUtil.onDOMContentLoaded((function(){a.init()}))})();