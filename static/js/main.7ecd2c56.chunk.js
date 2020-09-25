(this["webpackJsonpcovid-data-worldwide"]=this["webpackJsonpcovid-data-worldwide"]||[]).push([[0],{27:function(e,a,t){e.exports={datatable:"DataTable_datatable__2ejzb"}},53:function(e,a,t){e.exports=t(86)},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),u=t(7),o=t(92),i=t(5),m=t(13),s=t(89),d=t(90),E=t(12),v=t.n(E),h=t(20),p=t(21),f=t.n(p),g=function(){var e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/all?yesterday=true");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/countries/".concat(a));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/countries?yesterday=true");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/continents?yesterday=true");case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://disease.sh/v3/covid-19/continents/".concat(a));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}();var w=t(95),O=t(88);function T(e){for(var a=e.toString().split("."),t=a[0].split("").reverse().join(""),n=void 0===a[1]?"":"."+a[1],r=[];t.length;)r.push(t.substr(0,3)+" "),t=t.substr(3);return r.join("").split("").reverse().join("")+n}function j(e){var a=e.header,t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"border-white"},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Header,{as:"h5"},a),r.a.createElement(w.a.Text,null,r.a.createElement(O.a,{hover:!0},r.a.createElement("tbody",null,t&&t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",{style:{textAlign:"right"}},"string"===typeof e.value?e.value:T(e.value)))}))))))))}function F(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.date))}function P(){var e,a=Object(m.useAsync)(g,[]),t=a.result,n=a.error,l=a.loading;return t?r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("p",null,"Loading..."),n&&alert(n.message),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(j,{header:"Cases",data:[{name:"Today",value:t.data.todayCases},{name:"Total",value:t.data.cases},{name:"Per one million",value:t.data.casesPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Deaths",data:[{name:"Today",value:t.data.todayDeaths},{name:"Total",value:t.data.deaths},{name:"Per one million",value:t.data.deathsPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Recovered",data:[{name:"Today",value:t.data.todayRecovered},{name:"Total",value:t.data.recovered},{name:"Per one million",value:t.data.recoveredPerOneMillion}]}))),r.a.createElement(F,{date:(e=t.data.updated,Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"2-digit"}).format(e))}))):r.a.createElement(r.a.Fragment,null)}var x=t(91);function N(){var e=Object(i.f)(),a=Object(i.g)(),t=Object(m.useAsync)(C,[a.name]),n=t.result,l=t.error,c=t.loading;return n?r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",null,"Loading..."),l&&alert(l.message),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"light",onClick:function(){return e.goBack()}},"Back"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(j,{header:"Info",data:[{name:"Name",value:n.data.continent},{name:"Population",value:n.data.population,shouldNotHumanize:!0}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Now",data:[{name:"Active",value:n.data.active},{name:"Critical",value:n.data.critical}]}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(j,{header:"Cases",data:[{name:"Today",value:n.data.todayCases},{name:"Total",value:n.data.cases},{name:"Per one million",value:n.data.casesPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Deaths",data:[{name:"Today",value:n.data.todayDeaths},{name:"Total",value:n.data.deaths},{name:"Per one million",value:n.data.deathsPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Recovered",data:[{name:"Today",value:n.data.todayRecovered},{name:"Total",value:n.data.recovered},{name:"Per one million",value:n.data.recoveredPerOneMillion}]}))))):r.a.createElement(r.a.Fragment,null)}var M=t(51),A=t(52),D=t(0),R=D.useState,B=D.useMemo,I=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=R(a),n=Object(A.a)(t,2),r=n[0],l=n[1],c=B((function(){var a=Object(M.a)(e);return null!==r&&a.sort((function(e,a){return e[r.key]<a[r.key]?"ascending"===r.direction?-1:1:e[r.key]>a[r.key]?"ascending"===r.direction?1:-1:0})),a}),[e,r]),u=function(e){var a="descending";r&&r.key===e&&"descending"===r.direction&&(a="ascending"),l({key:e,direction:a})};return{items:c,requestSort:u}},S=t(27),L=t.n(S);function q(e){var a=I(e.data),t=a.items,n=a.requestSort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{striped:!0,bordered:!0,hover:!0,className:L.a.datatable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return n("continent")}},"Name"),r.a.createElement("th",{onClick:function(){return n("cases")}},"Cases"),r.a.createElement("th",{onClick:function(){return n("deaths")}},"Deaths"),r.a.createElement("th",{onClick:function(){return n("recovered")}},"Recovered"),r.a.createElement("th",{onClick:function(){return n("active")}},"Active"),r.a.createElement("th",{onClick:function(){return n("critical")}},"Critical"),r.a.createElement("th",{onClick:function(){return n("tests")}},"Tests"))),r.a.createElement("tbody",null,t&&t.map((function(a,t){return r.a.createElement("tr",{key:t,onClick:function(){return e.handleClick(a)}},r.a.createElement("td",null,a.continent),r.a.createElement("td",null,T(a.cases)),r.a.createElement("td",null,T(a.deaths)),r.a.createElement("td",null,T(a.recovered)),r.a.createElement("td",null,T(a.active)),r.a.createElement("td",null,T(a.critical)),r.a.createElement("td",null,T(a.tests)))})))))}function z(){var e=Object(i.f)(),a=Object(m.useAsync)(k,[]),t=a.result,n=a.error,l=a.loading;return t?r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("p",null,"Loading..."),n&&alert(n.message),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{data:t.data,handleClick:function(a){""!==a.continent&&e.push(e.location.pathname+"/"+encodeURIComponent(a.continent))}}))):r.a.createElement(r.a.Fragment,null)}function H(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/data/continents",component:z}),r.a.createElement(i.a,{path:"/data/continents/:name",component:N}))}function U(e){var a=I(e.data),t=a.items,n=a.requestSort;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{striped:!0,bordered:!0,hover:!0,className:L.a.datatable},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Flag"),r.a.createElement("th",{onClick:function(){return n("country")}},"Name"),r.a.createElement("th",{onClick:function(){return n("cases")}},"Cases"),r.a.createElement("th",{onClick:function(){return n("deaths")}},"Deaths"),r.a.createElement("th",{onClick:function(){return n("recovered")}},"Recovered"),r.a.createElement("th",{onClick:function(){return n("active")}},"Active"),r.a.createElement("th",{onClick:function(){return n("critical")}},"Critical"),r.a.createElement("th",{onClick:function(){return n("tests")}},"Tests"))),r.a.createElement("tbody",null,t&&t.map((function(a,t){return r.a.createElement("tr",{key:t,onClick:function(){return e.handleClick(a)}},r.a.createElement("td",null,r.a.createElement("img",{width:60,height:40,src:a.countryInfo.flag,alt:"Country flag"})),r.a.createElement("td",null,a.country),r.a.createElement("td",null,T(a.cases)),r.a.createElement("td",null,T(a.deaths)),r.a.createElement("td",null,T(a.recovered)),r.a.createElement("td",null,T(a.active)),r.a.createElement("td",null,T(a.critical)),r.a.createElement("td",null,T(a.tests)))})))))}function W(){var e=Object(i.f)(),a=Object(m.useAsync)(b,[]),t=a.result,n=a.error,l=a.loading;return t?r.a.createElement(r.a.Fragment,null,l&&r.a.createElement("p",null,"Loading..."),n&&alert(n.message),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{data:t.data,handleClick:function(a){""!==a.country&&e.push(e.location.pathname+"/"+encodeURIComponent(a.country))}}))):r.a.createElement(r.a.Fragment,null)}function _(){var e=Object(i.f)(),a=Object(i.g)(),t=Object(m.useAsync)(y,[a.name]),n=t.result,l=t.error,c=t.loading;return n?r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("p",null,"Loading..."),l&&alert(l.message),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"light",onClick:function(){return e.goBack()}},"Back"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(j,{header:"Info",data:[{name:"Name",value:n.data.country},{name:"Population",value:n.data.population,shouldNotHumanize:!0}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Now",data:[{name:"Active",value:n.data.active},{name:"Critical",value:n.data.critical}]}))),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(j,{header:"Cases",data:[{name:"Today",value:n.data.todayCases},{name:"Total",value:n.data.cases},{name:"Per one million",value:n.data.casesPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Deaths",data:[{name:"Today",value:n.data.todayDeaths},{name:"Total",value:n.data.deaths},{name:"Per one million",value:n.data.deathsPerOneMillion}]})),r.a.createElement(d.a,null,r.a.createElement(j,{header:"Recovered",data:[{name:"Today",value:n.data.todayRecovered},{name:"Total",value:n.data.recovered},{name:"Per one million",value:n.data.recoveredPerOneMillion}]}))))):r.a.createElement(r.a.Fragment,null)}function J(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/data/countries",component:W}),r.a.createElement(i.a,{path:"/data/countries/:name",component:_}))}function $(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/data/world",component:P}),r.a.createElement(i.a,{path:"/data/countries",component:J}),r.a.createElement(i.a,{path:"/data/continents",component:H}))}function G(){return r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{path:"/data",component:$}),r.a.createElement(i.a,{component:Error})))}var K=t(93),Q=t(94);function V(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(K.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{className:"mr-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/data/world"},"World data"),r.a.createElement(u.b,{className:"nav-link",to:"/data/countries"},"Countries data"),r.a.createElement(u.b,{className:"nav-link",to:"/data/continents"},"Continents data")))))}var X=function(){return r.a.createElement(o.a,null,r.a.createElement(V,null),r.a.createElement("hr",null),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(85);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.7ecd2c56.chunk.js.map