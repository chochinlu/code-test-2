(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(e,a,r){e.exports=r(475)},475:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),i=r(17),l=r.n(i),c=r(536),u=r(8),o=r(512),m=r(513),d=r(275),s=r(256),p=r.n(s),f=r(517),T=r(36),v=r(86),E=r(515),b=r(514),g=r(535),h=function(e){return n.a.createElement(v.b,Object.assign({to:"/"},e))},y=function(e){return n.a.createElement(v.b,Object.assign({to:"/add_flight"},e))},O=Object(u.a)(function(e){return{grow:{flexGrow:1}}})(function(e){var a=e.classes,r=e.today,t=void 0===r?new Date:r;return n.a.createElement("div",{className:a.grow},n.a.createElement(o.a,{position:"static",color:"default",elevation:1},n.a.createElement(m.a,null,n.a.createElement(b.a,{container:!0,justify:"flex-start",alignItems:"baseline"},n.a.createElement(b.a,{item:!0,xs:5},n.a.createElement(d.a,null,n.a.createElement(E.a,{component:h,underline:"none",variant:"h6"},"Flight Table"))),n.a.createElement(b.a,{item:!0,xs:7},n.a.createElement(d.a,{variant:"subtitle2"},function(e){return Object(T.a)(e,"EEE, MMM dd")}(t),", Asia/Taipei"))),n.a.createElement(E.a,{component:y},n.a.createElement(g.a,{title:"Add","aria-label":"Add"},n.a.createElement(f.a,{"aria-label":"Add",color:"primary"},n.a.createElement(p.a,null)))))))}),x=r(72),j=r(192),C=r(522),A=r(523),I=r(519),S=r(520),R=r(521),w=r(537),N=r(539),L=r(524),F=r(518),M=r(27),k=r(31),P={CHEAP:"cheap",BUSINESS:"business"},D=Object(k.a)({ALL:"all"},P),_={from:{name:"from",title:"From"},to:{name:"to",title:"To"}},H={departureTime:{name:"departureTime",title:"Departure Time"},arrivalTime:{name:"arrivalTime",title:"Arrival Time"}},B={ANY_TIME:{value:1,text:"Any Time"},EARLY_MORNING:{value:2,text:"Early Morning (5-7a)",fromHour:5,hourDuration:2},MORNING:{value:3,text:"Morning (7-10a)",fromHour:7,hourDuration:3},NOON:{value:4,text:"Noon (10a-2p)",fromHour:10,hourDuration:4},AFTERNOON:{value:5,text:"Afternoon (2-6p)",fromHour:14,hourDuration:4},EVENING:{value:6,text:"Evening (6-10p)",fromHour:16,hourDuration:4},NIGHT:{value:7,text:"Night (10-5a)",fromHour:22,hourDuration:7}},Z={CABIN:{name:"cabin",title:"Cabin",orderable:!0},DEPARTURE_TIME:{name:"departureTime",title:"Departure",orderable:!0},ARRIVAL_TIME:{name:"arrivalTime",title:"Arrival",orderable:!0}},G=Object(k.a)({},Z,{FLIGHT_TIME:{name:"filghtTime",title:"Flight Time",orderable:!1}}),V=r(272),U=function(e){return e.map(function(e){return function(e){return{id:e.id.toString(),cabin:P.CHEAP,from:e.departure,to:e.arrival,departureTime:e.departureTime,arrivalTime:e.arrivalTime}}(e)})},W=function(e){return new Date(e).getTime()},z=function(e){return e.map(function(e){return function(e){var a=e.flight.split("->").map(function(e){return e.trim()}),r=Object(x.a)(a,2),t=r[0],n=r[1];return{id:e.uuid,cabin:P.BUSINESS,from:t,to:n,departureTime:W(e.departure),arrivalTime:W(e.arrival)}}(e)})},Y=r(136),q=r(258),J=r(259),$=function(e,a){var r=function(e){var a=new Date(e);return{year:Object(Y.a)(a),month:Object(q.a)(a),date:Object(J.a)(a)}}(a),t=r.year,n=r.month,i=r.date,l=function(e){var a=Object.keys(B).filter(function(a){return B[a].value===e}),r=B[a];return{fromHour:r.fromHour,hourDuration:r.hourDuration}}(e),c=l.fromHour,u=l.hourDuration,o=new Date(t,n,i,c),m=new Date(t,n,i,c+u),d=new Date(a);return o<=d&&d<=m},K=function(e,a){var r=function(e,a){switch(a){case P.CHEAP:return e.filter(function(e){return e.cabin===P.CHEAP});case P.BUSINESS:return e.filter(function(e){return e.cabin===P.BUSINESS});default:return e}}(e,a.cabin);return r=function(e,a){return a===B.ANY_TIME.value?e:e.filter(function(e){return $(a,e.arrivalTime)})}(r=function(e,a){return a===B.ANY_TIME.value?e:e.filter(function(e){return $(a,e.departureTime)})}(r=function(e,a){var r=new RegExp(a);return e.filter(function(e){return r.test(e.to.toLowerCase())})}(r=function(e,a){var r=new RegExp(a);return e.filter(function(e){return r.test(e.from.toLowerCase())})}(r,a.from),a.to),a.departureTime),a.arrivalTime)},Q=function(e){return function(a,r){var t=a.cabin.toLowerCase(),n=r.cabin.toLowerCase();if("asc"===e){if(t<n)return-1;if(t>n)return 1}else{if(t<n)return 1;if(t>n)return-1}return 0}},X=function(e){return function(a){return function(r,t){var n=e===Z.DEPARTURE_TIME.name?r[Z.DEPARTURE_TIME.name]:r[Z.ARRIVAL_TIME.name],i=e===Z.DEPARTURE_TIME.name?t[Z.DEPARTURE_TIME.name]:t[Z.ARRIVAL_TIME.name];return"asc"===a?n-i:i-n}}},ee=function(e,a){return e.sort(function(e){var a=e.orderBy,r=e.order;switch(a){case Z.CABIN.name:return Q(r);case Z.DEPARTURE_TIME.name:return X(Z.DEPARTURE_TIME.name)(r);case Z.ARRIVAL_TIME.name:return X(Z.ARRIVAL_TIME.name)(r);default:return Q(r)}}(a))},ae=function(e){var a=e.flights,r=e.filter,t=e.sort,n=K(a,r);return n=ee(n,t)},re="GET_FLIGHTS",te=function(e){return{type:"FETCHING",payload:{flightType:e}}},ne=function(e){return{type:"GET_FLIGHTS_FAIL",payload:{errType:e.errType,msg:e.msg}}},ie=function(e){return{type:"SET_FLIGHTS",payload:{flightType:e.flightType,flights:e.flights}}},le=r(186),ce=r.n(le),ue=r(188),oe=r.n(ue),me=r(187),de=r.n(me),se=r(185),pe=r.n(se),fe=Object(u.a)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(function(e){var a=e.classes,r=e.theme,t=e.page,i=e.rowsPerPage,l=e.count,c=e.onChangePage;return n.a.createElement("div",{className:a.root},n.a.createElement(f.a,{onClick:function(e){c(e,0)},disabled:0===t,"aria-label":"First Page"},"rtl"===r.direction?n.a.createElement(pe.a,null):n.a.createElement(ce.a,null)),n.a.createElement(f.a,{onClick:function(e){c(e,t-1)},disabled:0===t,"aria-label":"Previous Page"},"rtl"===r.direction?n.a.createElement(de.a,null):n.a.createElement(oe.a,null)),n.a.createElement(f.a,{onClick:function(e){c(e,t+1)},disabled:t>=Math.ceil(l/i)-1,"aria-label":"Next Page"},"rtl"===r.direction?n.a.createElement(oe.a,null):n.a.createElement(de.a,null)),n.a.createElement(f.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(l/i)-1))},disabled:t>=Math.ceil(l/i)-1,"aria-label":"Last Page"},"rtl"===r.direction?n.a.createElement(ce.a,null):n.a.createElement(pe.a,null)))}),Te=function(){return n.a.createElement("div",null,n.a.createElement(F.a,null))},ve=function(e){var a,r=e.classes,t=e.time,i=e.airport;return n.a.createElement(I.a,null,n.a.createElement(d.a,{inline:!0},(a=t,Object(T.a)(new Date(a),"HH:mm:ss a"))),n.a.createElement(d.a,{inline:!0,variant:"subtitle2",className:r},i))},Ee=function(e){var a=e.sort,r=e.setOrder;return n.a.createElement(S.a,null,n.a.createElement(R.a,null,Object.keys(G).map(function(e){return n.a.createElement(I.a,{key:G[e].name},G[e].orderable?n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{title:"Sort","aria-label":"Sort",enterDelay:300},n.a.createElement(w.a,{direction:a.order,active:G[e].name===a.orderBy,onClick:function(){return r(G[e].name)}},G[e].title))):n.a.createElement(n.a.Fragment,null,G[e].title))})))};var be=Object(u.a)(function(e){return{paper:{padding:e.spacing.unit,minHeight:"10vh"},total:{paddingLeft:2*e.spacing.unit},span:{paddingLeft:e.spacing.unit}}})(function(e){var a=e.classes,r=e.fetching,i=e.flights,l=e.sort,c=e.setOrder,u=Object(t.useState)(0),o=Object(x.a)(u,2),m=o[0],s=o[1],p=Object(t.useState)(10),f=Object(x.a)(p,2),T=f[0],v=f[1];return 0===i.length?n.a.createElement(j.a,{className:a.paper},n.a.createElement(d.a,{variant:"h4"},"No data.")):n.a.createElement(j.a,{className:a.paper},r[P.CHEAP]&&n.a.createElement(Te,null),r[P.BUSINESS]&&n.a.createElement(Te,null),n.a.createElement(d.a,{variant:"h6",className:a.total},"Total: ",i.length),n.a.createElement(C.a,{padding:"dense"},n.a.createElement(Ee,{sort:l,setOrder:c}),n.a.createElement(A.a,null,i.slice(m*T,m*T+T).map(function(e){return n.a.createElement(R.a,{key:e.id},n.a.createElement(I.a,null,e.cabin),n.a.createElement(ve,{classes:a.span,time:e.departureTime,airport:e.from}),n.a.createElement(ve,{classes:a.span,time:e.arrivalTime,airport:e.to}),n.a.createElement(I.a,null,(r=e.arrivalTime,t=e.departureTime,Object(V.a)(t,r))));var r,t})),n.a.createElement(L.a,null,n.a.createElement(R.a,null,n.a.createElement(N.a,{rowsPerPageOptions:[5,10,12,15,25],colSpan:3,count:i.length,rowsPerPage:T,page:m,SelectProps:{native:!0},onChangePage:function(e,a){s(a)},onChangeRowsPerPage:function(e){return function(e){s(0),v(parseInt(e.target.value,10))}(e)},ActionsComponent:fe})))))}),ge=Object(M.b)(function(e){return{flights:ae({flights:e.flights,filter:e.filter,sort:e.sort}),sort:e.sort,fetching:e.fetching}},{setOrder:function(e){return{type:"SET_ORDER",payload:{property:e}}}})(be),he=r(274),ye=r(527),Oe=r(528),xe=r(538),je=r(534),Ce=r(532),Ae=r(533),Ie=r(529),Se=r(270),Re=r(191),we=r(76),Ne=r(61),Le=function(e){return n.a.createElement(ye.a,{fullWidth:!0,error:e.hasError},n.a.createElement(xe.a,null,"Cabin"),n.a.createElement(Ce.a,{id:"cabin",name:"cabin",value:e.cabin,onChange:e.onChange},Object.keys(P).map(function(e){return n.a.createElement(je.a,{key:"add-".concat(e),value:P[e]},e)})))},Fe=function(e){var a=e.field,r=e.form,t=(r.touched,r.errors,Object(he.a)(e,["field","form"]));return n.a.createElement(ye.a,{fullWidth:!0,error:t.hasError},n.a.createElement(Ae.a,{name:t.airportType.name,label:t.airportType.title,margin:"dense",value:a.value[t.airportType.name],onChange:a.onChange}))},Me=function(e){return n.a.createElement(Re.a,{seconds:!0,format:"hh:mm:ss a",label:e.timeType.title,fullWidth:!0,name:e.timeType.name,className:e.classes,value:e.value,onChange:function(a){e.form.setFieldValue(e.timeType.name,a)}})},ke={cabin:"",from:"",to:"",departureTime:new Date,arrivalTime:new Date},Pe=function(e){return n.a.createElement(Ie.a,{variant:"outlined",className:e.classes,fullWidth:!0,onClick:function(){return e.onClick(ke)}},"Clear")},De=function(e){return n.a.createElement(Ie.a,{type:"submit",variant:"outlined",className:e.classes,fullWidth:!0},"Add Flight")},_e=Ne.object().shape({cabin:Ne.string().required().oneOf(Object.keys(P).map(function(e){return P[e]})),from:Ne.string().required().max(20),to:Ne.string().required().max(20),departureTime:Ne.date().required(),arrivalTime:Ne.date().required().min(Ne.ref("departureTime"),"must larger than departure time.")}),He=Object(u.a)(function(e){return{paper:{padding:e.spacing.unit},timePicker:{marginTop:e.spacing.unit},buttonRow:{marginTop:2*e.spacing.unit,marginBottom:e.spacing.unit}}})(function(e){var a=e.classes,r=e.addFlight;return n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(Re.b,{utils:Se.a},n.a.createElement(j.a,{className:a.paper},n.a.createElement(we.c,{initialValues:ke,validationSchema:_e,onSubmit:function(e,a){r(e),a.resetForm(ke)},render:function(e){return n.a.createElement(we.b,null,n.a.createElement(b.a,{container:!0,spacing:4},n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(Le,{hasError:e.errors.cabin&&""!==e.errors.cabin,cabin:e.values.cabin,onChange:e.handleChange}),e.errors.cabin&&n.a.createElement(Oe.a,{error:!0},e.errors.cabin)),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(we.a,{hasError:e.errors.from&&""!==e.errors.from,component:Fe,airportType:_.from}),e.errors.from&&n.a.createElement(Oe.a,{error:!0},e.errors.from)),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(we.a,{hasError:e.errors.to&&""!==e.errors.to,component:Fe,airportType:_.to}),e.errors.to&&n.a.createElement(Oe.a,{error:!0},e.errors.to)),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(we.a,{value:e.values.departureTime,component:Me,timeType:H.departureTime}),e.errors.departureTime&&n.a.createElement(Oe.a,{error:!0},e.errors.departureTime)),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(we.a,{value:e.values.arrivalTime,component:Me,timeType:H.arrivalTime}),e.errors.arrivalTime&&n.a.createElement(Oe.a,{error:!0},e.errors.arrivalTime)),n.a.createElement(b.a,{item:!0,container:!0,xs:12,spacing:4,className:a.buttonRow},n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(Pe,{classes:a.button,onClick:e.resetForm})),n.a.createElement(b.a,{item:!0,xs:12,sm:6},n.a.createElement(De,{classes:a.button})))))}}))))}),Be=Object(M.b)(null,{addFlight:function(e){return{type:"ADD_FLIGHT",payload:{flight:e}}}})(He),Ze=r(50),Ge=function(e){var a=e.title,r=e.name,t=e.value,i=e.onChange;return n.a.createElement(ye.a,{fullWidth:!0},n.a.createElement(xe.a,null,a),n.a.createElement(Ce.a,{name:r,value:t,onChange:i},Object.keys(D).map(function(e){return n.a.createElement(je.a,{key:D[e],value:D[e]},e)})))},Ve=function(e){var a=e.input,r=e.filters,t=e.onChange,i=a.name===H.arrivalTime.name&&r.arrivalTime!==B.ANY_TIME.value&&r.arrivalTime<r.departureTime,l=a.name===H.departureTime.name?r.departureTime:r.arrivalTime,c="".concat(H.arrivalTime.title," should be larger than ").concat(H.departureTime.title,".");return n.a.createElement(ye.a,{fullWidth:!0,error:i},n.a.createElement(xe.a,null,a.title),n.a.createElement(Ce.a,{name:a.name,value:l,onChange:t},Object.keys(B).map(function(e){return n.a.createElement(je.a,{key:B[e].value,value:B[e].value},B[e].text)})),i&&a.name===H.arrivalTime.name&&n.a.createElement(Oe.a,null,c))},Ue=Object(u.a)(function(e){return{paper:{padding:e.spacing.unit},buttonRow:{marginTop:2*e.spacing.unit,marginBottom:4*e.spacing.unit}}})(function(e){var a=function(a){a.preventDefault();var r=a.target,t=r.name,n=r.value;e.setFilter(Object(Ze.a)({},t,n))},r=e.classes,t=e.filters,i=n.a.createElement(Ge,{title:"Cabin",name:"cabin",value:t.cabin,onChange:a}),l=n.a.createElement(ye.a,{fullWidth:!0},n.a.createElement(Ae.a,{label:"From",margin:"dense",name:"from",value:t.from,onChange:a})),c=n.a.createElement(ye.a,{fullWidth:!0},n.a.createElement(Ae.a,{label:"To",margin:"dense",name:"to",value:t.to,onChange:a})),u=n.a.createElement(Ve,{input:H.departureTime,filters:t,onChange:a}),o=n.a.createElement(Ve,{input:H.arrivalTime,filters:t,onChange:a}),m=n.a.createElement(Ie.a,{variant:"outlined",fullWidth:!0,className:r.button,onClick:function(a){a.preventDefault(),e.resetFilter()}},"Reset Filter");return n.a.createElement(j.a,{className:r.paper},n.a.createElement(b.a,{container:!0,spacing:4},n.a.createElement(b.a,{item:!0,xs:12},i),n.a.createElement(b.a,{item:!0,xs:12,sm:6},l),n.a.createElement(b.a,{item:!0,xs:12,sm:6},c),n.a.createElement(b.a,{item:!0,xs:12,sm:6},u),n.a.createElement(b.a,{item:!0,xs:12,sm:6},o),n.a.createElement(b.a,{item:!0,container:!0,xs:12,justify:"flex-end",className:r.buttonRow},n.a.createElement(b.a,{item:!0,xs:12,sm:6},m))))}),We=Object(M.b)(function(e){return{filters:e.filter}},{setFilter:function(e){return{type:"SET_FILTER",payload:{filter:e}}},resetFilter:function(){return{type:"RESET_FILTER"}}})(Ue),ze=r(59);var Ye=Object(M.b)(function(e){return{noFlights:0===e.flights.length}})(function(e){var a=e.noFlights;return n.a.createElement(b.a,{container:!0,spacing:4},n.a.createElement(ze.a,{path:"/add_flight",component:Be}),a?null:n.a.createElement(b.a,{item:!0,xs:12},n.a.createElement(We,null)))}),qe=r(540),Je=r(530),$e=r(265),Ke=r.n($e),Qe=r(264),Xe=r.n(Qe),ea=Object(u.a)(function(e){return{close:{padding:e.spacing.unit/2},info:{backgroundColor:e.palette.primary.dark},message:{display:"flex",alignItems:"center"},icon:{marginRight:e.spacing.unit,fontSize:20}}})(function(e){var a=e.classes,r=e.msg,i=Object(t.useState)(!0),l=Object(x.a)(i,2),c=l[0],u=l[1],o=n.a.createElement("span",{className:a.message},n.a.createElement(Xe.a,{className:a.icon}),r),m=n.a.createElement(f.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:function(){return u(!1)}},n.a.createElement(Ke.a,null));return n.a.createElement(qe.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:c,autoHideDuration:4e3,onClose:function(){return u(!1)}},n.a.createElement(Je.a,{onClose:function(){return u(!1)},message:o,action:m}))});var aa=Object(M.b)(function(e){return{error:e.error}})(function(e){var a=e.error;return a?n.a.createElement(n.a.Fragment,null,Object.keys(a).map(function(e){return n.a.createElement(ea,{key:e,msg:"[".concat(e,"] ").concat(a[e])})})):null}),ra=Object(u.a)(function(e){return{row:{padding:e.spacing.unit,maxWidth:"80rem",margin:"0 auto"}}})(function(e){var a=e.classes,r=e.getFlights;return Object(t.useEffect)(function(){r(P.CHEAP),r(P.BUSINESS)}),n.a.createElement("div",null,n.a.createElement(c.a,null),n.a.createElement(O,null),n.a.createElement(aa,null),n.a.createElement(b.a,{container:!0,spacing:4,className:a.row},n.a.createElement(b.a,{item:!0,xs:12,sm:4},n.a.createElement(Ye,null)),n.a.createElement(b.a,{item:!0,xs:12,sm:8},n.a.createElement(ge,null))))}),ta=Object(M.b)(null,{getFlights:function(e){return{type:re,payload:{cabin:e}}}})(ra),na=r(271),ia=r(531),la=r(269),ca=r.n(la);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ua=r(43),oa=r(273),ma=r(266),da=Object.keys(P).map(function(e){return Object(Ze.a)({},P[e],!1)}).reduce(function(e,a){return Object(k.a)({},e,a)},{}),sa={},pa=r(55),fa=[{id:0x385fdebc2942c400,departure:"Hurlingham",arrival:"Villa Angela",departureTime:1555557778905,arrivalTime:1555565815929},{id:0x58f8cb70d979000,departure:"Castillo",arrival:"La Pampa",departureTime:1555560290714,arrivalTime:1555560697883},{id:0x44b8beceb322a000,departure:"Lujan de Cuyo",arrival:"Necochea",departureTime:1555561251772,arrivalTime:1555568925486},{id:701890645142645e4,departure:"Huinca Renanco",arrival:"Merlo",departureTime:1555558986048,arrivalTime:1555560403093},{id:0x1fb14d25bfd44000,departure:"Victoria",arrival:"Avellaneda",departureTime:1555561041943,arrivalTime:1555562454842},{id:0x41f95e0f6f52b400,departure:"Palmira",arrival:"Villa Carlos Paz",departureTime:1555554496115,arrivalTime:1555557135690},{id:0x2159c1445869d400,departure:"Ouargla",arrival:"Tupungato",departureTime:1555560595696,arrivalTime:1555564075224},{id:0x510307368e587c00,departure:"Arroyito",arrival:"Tlemcen",departureTime:1555555455499,arrivalTime:1555556157857},{id:0x292972d85750e800,departure:"Chivilcoy",arrival:"San Justo",departureTime:1555556505371,arrivalTime:1555564909307},{id:0x3e24080cae1cf000,departure:"La Lucila",arrival:"Ibicuy",departureTime:1555555173813,arrivalTime:1555562218488},{id:0x548721bc95fc7400,departure:"Santa Teresita",arrival:"Pinamar",departureTime:1555559897544,arrivalTime:1555560356440},{id:0x53238fdf8dfd8400,departure:"Balcarce",arrival:"Santo Tome",departureTime:1555559962669,arrivalTime:1555569459437},{id:0x7f33de9d90ed800,departure:"Oncativo",arrival:"La Para",departureTime:1555559911662,arrivalTime:1555563822177},{id:0x4d1c617cb80c0800,departure:"Capitan Bermudez",arrival:"Veronica",departureTime:1555556291361,arrivalTime:1555558318706},{id:0x37542fa31b03e000,departure:"General San Martin",arrival:"James Craik",departureTime:1555553370690,arrivalTime:1555559133695},{id:0x770a1c38b6f8b800,departure:"Las Heras",arrival:"General Martin Miguel de Guemes",departureTime:1555562122867,arrivalTime:1555567164772},{id:0x79e49f11d55abc00,departure:"Villa Bosch",arrival:"Bordj",departureTime:1555557245337,arrivalTime:1555559887782},{id:0x223883379a7c3c00,departure:"Henderson",arrival:"Ingeniero Beaugey",departureTime:1555560281699,arrivalTime:1555561381150},{id:0x1643bc6ee8400000,departure:"Cutral-Co",arrival:"General Guido",departureTime:1555553013429,arrivalTime:1555561483022},{id:0x3914c6076a419c00,departure:"Magdalena",arrival:"Matheu",departureTime:1555554205177,arrivalTime:1555555865343},{id:0x5327887cc0b7b400,departure:"Rancul",arrival:"Manantial",departureTime:1555554515979,arrivalTime:1555555732804},{id:0x48e0c82527505400,departure:"Minacar",arrival:"San Martin",departureTime:1555558929694,arrivalTime:1555564651335},{id:0x79311b9f5d473c00,departure:"El Palomar",arrival:"Necochea",departureTime:1555553411530,arrivalTime:1555561620821},{id:91356676234867e5,departure:"Sierra de la Ventana",arrival:"Rio Grande",departureTime:1555562663521,arrivalTime:1555564009747},{id:0x1262ee66d11f6800,departure:"General Rodriguez",arrival:"Valle Hermoso",departureTime:1555558830321,arrivalTime:1555563925679},{id:0x34d8cd3e3a319000,departure:"Castelar",arrival:"Villa Mercedes",departureTime:1555556797730,arrivalTime:1555561324812},{id:0x13b92228e5c67400,departure:"Chajari",arrival:"Vicente Lopez",departureTime:1555560329849,arrivalTime:1555562226262},{id:0x4b59a3c3c89b0c00,departure:"San Bernardo",arrival:"Aldo Bonzi",departureTime:1555554706788,arrivalTime:1555557812301},{id:0x3d63c78e7b41fc00,departure:"Ucacha",arrival:"Pontevedra",departureTime:1555555753386,arrivalTime:1555561924509},{id:0x2b0871399dcfc000,departure:"Germania",arrival:"Grand Bourg",departureTime:1555562190378,arrivalTime:1555566147537},{id:0x1e2327e146c10c00,departure:"Tapalque",arrival:"Munro",departureTime:1555558093005,arrivalTime:1555561207206},{id:0x6cb5d56fea5b2400,departure:"La Leonesa",arrival:"Boulogne",departureTime:1555554908032,arrivalTime:1555561337654},{id:0x46460c2e8fc61400,departure:"Eldorado",arrival:"Franck",departureTime:1555557958698,arrivalTime:1555563393491},{id:0x42c4d51491212000,departure:"Rafael Obligado",arrival:"San Andres de Giles",departureTime:1555560658111,arrivalTime:1555566477225},{id:0x56ca05fb8bd0f000,departure:"Funes",arrival:"Burzaco",departureTime:1555560755120,arrivalTime:1555570419642}],Ta=[{uuid:"0a286e4e-03c8-4961-ac0c-67bbc4564553",flight:"Bariloche -> Portena",departure:"2019-04-18T04:26:43.419Z",arrival:"2019-04-18T06:05:35.675Z"},{uuid:"5f665546-4198-436d-a0a1-9e93820363a7",flight:"Todd -> Sunchales",departure:"2019-04-18T03:43:21.169Z",arrival:"2019-04-18T05:12:10.997Z"},{uuid:"bee29022-9f6d-4516-a84a-709c89f25107",flight:"Ayacucho -> Navarro",departure:"2019-04-18T03:46:41.832Z",arrival:"2019-04-18T04:17:02.989Z"},{uuid:"a993d4f2-2a7a-455b-a84b-db892ba573e2",flight:"Laguna Alsina -> Bosch",departure:"2019-04-18T03:56:53.611Z",arrival:"2019-04-18T06:24:19.961Z"},{uuid:"12d24e25-fd4e-4860-834e-eadaf5649386",flight:"San Pedro -> Despenaderos",departure:"2019-04-18T04:49:49.089Z",arrival:"2019-04-18T06:17:26.974Z"},{uuid:"96649a05-34f8-4b17-83a7-0af0d98e9d48",flight:"San Genaro -> Batan",departure:"2019-04-18T04:10:54.742Z",arrival:"2019-04-18T04:16:56.544Z"},{uuid:"98487c3b-e31c-4926-8dca-4d3c29c623ed",flight:"Sierra de los Padres -> Villa General Belgrano",departure:"2019-04-18T02:37:02.357Z",arrival:"2019-04-18T03:07:23.707Z"},{uuid:"bc7bf66e-1afd-41cf-a3aa-c8a465b96a01",flight:"Crespo -> Villa Aberastain",departure:"2019-04-18T03:12:19.844Z",arrival:"2019-04-18T04:58:16.149Z"},{uuid:"5911e464-02b8-453e-8f45-7e2433b09133",flight:"San Miguel -> Belen de Escobar",departure:"2019-04-18T02:52:02.985Z",arrival:"2019-04-18T04:41:11.584Z"},{uuid:"4f3b6d23-d259-4e7e-a8d1-fcaa530f0594",flight:"Caleta Olivia -> Ayacucho",departure:"2019-04-18T05:00:03.510Z",arrival:"2019-04-18T06:30:32.597Z"},{uuid:"de7aba36-c920-45b5-809f-283f6c28a019",flight:"Bell Ville -> Caseros",departure:"2019-04-18T03:30:22.492Z",arrival:"2019-04-18T05:56:37.855Z"},{uuid:"e0576ceb-d5bc-4e89-8886-0e52ee38bfab",flight:"Villa Las Rosas -> La Banda",departure:"2019-04-18T04:00:13.011Z",arrival:"2019-04-18T06:43:41.656Z"},{uuid:"8bbfd956-c92f-4c04-be61-01540c060b3f",flight:"San Rafael -> Oran",departure:"2019-04-18T03:54:05.474Z",arrival:"2019-04-18T05:25:38.371Z"},{uuid:"c28a4e8e-2ee6-4627-bc63-e8f0ba39ca26",flight:"Vera -> Abasto",departure:"2019-04-18T03:44:49.206Z",arrival:"2019-04-18T03:54:44.786Z"},{uuid:"7588ebb9-7266-41fb-913c-d34b68f76a25",flight:"Flores -> Los Cardales",departure:"2019-04-18T03:55:03.027Z",arrival:"2019-04-18T06:35:08.611Z"},{uuid:"22fd8550-560b-4793-a721-f1b90ad64cb2",flight:"Remedios de Escalada -> Villa Regina",departure:"2019-04-18T02:37:14.342Z",arrival:"2019-04-18T05:09:15.008Z"}],va=[].concat(Object(pa.a)(U(fa)),Object(pa.a)(z(Ta))),Ea=([].concat(Object(pa.a)(U(fa.slice(0,1))),Object(pa.a)(z(Ta.slice(0,2)))),r(267)),ba=r.n(Ea),ga=va,ha={cabin:D.ALL,from:"",to:"",departureTime:B.ANY_TIME.value,arrivalTime:B.ANY_TIME.value},ya={orderBy:Z.DEPARTURE_TIME.name,order:"asc"},Oa=Object(ua.combineReducers)({fetching:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCHING":return Object(k.a)({},e,Object(Ze.a)({},a.payload.flightType,!e[a.payload.flightType]));default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FLIGHTS":return delete e[a.payload.flightType],Object(k.a)({},e);case"GET_FLIGHTS_FAIL":return Object(k.a)({},e,Object(Ze.a)({},a.payload.errType,a.payload.msg));default:return e}},flights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FLIGHTS":return[].concat(Object(pa.a)(e),Object(pa.a)(a.payload.flights));case"ADD_FLIGHT":return function(e,a){var r=Object(k.a)({},a,{id:ba()(),departureTime:W(a.departureTime),arrivalTime:W(a.arrivalTime)});return[].concat(Object(pa.a)(e),[r])}(e,a.payload.flight);default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ha,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FILTER":return Object(k.a)({},e,a.payload.filter);case"RESET_FILTER":return ha;default:return e}},sort:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ya,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_ORDER":return{orderBy:r.payload.property,order:(e=a.order,"asc"===e?"desc":"asc")};default:return a}}}),xa=r(75),ja=r.n(xa),Ca=r(62),Aa=r(268),Ia=r.n(Aa),Sa=function(e){return Ia.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat("https://obscure-caverns-79008.herokuapp.com/").concat(e))},Ra=ja.a.mark(La),wa=ja.a.mark(Fa),Na=ja.a.mark(Ma);function La(e){var a,r,t,n;return ja.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=e.payload,r=a.cabin,i.prev=2,i.next=5,Object(Ca.c)(te(r));case 5:return i.next=7,Object(Ca.b)(Sa,r);case 7:return t=i.sent,n=t.data,i.next=11,Object(Ca.c)(ie({flightType:r,flights:n}));case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(2),i.next=17,Object(Ca.c)(ne({errType:r,msg:i.t0.message}));case 17:return i.prev=17,i.next=20,Object(Ca.c)(te(r));case 20:return i.finish(17);case 21:case"end":return i.stop()}},Ra,null,[[2,13,17,21]])}function Fa(){return ja.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ca.d)(re,La);case 2:case"end":return e.stop()}},wa)}function Ma(){return ja.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ca.a)([Fa()]);case 2:case"end":return e.stop()}},Na)}var ka=Object(oa.a)(),Pa=Object(ma.composeWithDevTools)(Object(ua.applyMiddleware)(ka)),Da=Object(ua.createStore)(Oa,Pa);ka.run(Ma);var _a=Da,Ha=Object(na.a)({spacing:4,palette:{primary:ca.a},typography:{useNextVariants:!0}});l.a.render(n.a.createElement(M.a,{store:_a},n.a.createElement(v.a,{basename:"/code-test-2"},n.a.createElement(ia.a,{theme:Ha},n.a.createElement(ta,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[285,1,2]]]);
//# sourceMappingURL=main.69cbeb79.chunk.js.map