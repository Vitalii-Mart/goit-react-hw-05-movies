"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{9054:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,s,c,o,u=t(5861),p=t(9439),l=t(4687),d=t.n(l),f=t(7689),v=t(2791),x=t(8617),h=t(168),m=t(1109),g=t(1087),j=(0,m.Z)(g.OL)(r||(r=(0,h.Z)(["\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\npadding: 8px 0;\ncolor: black;\ntext-decoration: none;\nfont-weight: 500;\ntext-transform: uppercase;\ntransition-duration:  1000ms;\n\n:hover {\n  color: aqua;\n  transition-duration:  400ms;\n}\n"]))),Z=t(184),w=function(n){var e=n.to,t=n.children;return(0,Z.jsxs)(j,{to:e,children:[(0,Z.jsx)(x.jTe,{size:"24"}),t]})},b=t(5691),k=m.Z.div(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  margin: 10px;\n"]))),y=m.Z.div(i||(i=(0,h.Z)(["\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),_=(0,m.Z)(g.OL)(s||(s=(0,h.Z)(["\nmargin-left: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  border: solid aqua;\n  color: black;\n  font-weight: 500;\n  transition-duration:  400ms;\n  &.active {\n    color:#fff;\n    background-color: aqua;\n  }\n  :hover,\n  :focus {\n    transform: scale(1.03);\n    transition-duration:  400ms;\n  }\n"]))),R=m.Z.div(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 200px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),q=function(n){var e=n.title,t=n.vote_average,r=n.overview,a=n.poster_path,i=n.genres,s=n.release_date;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(k,{children:[(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:e}),(0,Z.jsxs)(y,{children:[(0,Z.jsxs)("h2",{children:[e," ",(0,Z.jsxs)("span",{children:["(",Number.parseInt(s),")"]})]}),(0,Z.jsxs)("p",{children:["User Score:",Math.round(10*t),"%"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:r}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("div",{children:i.map((function(n){return n.name})).join(", ")})]})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsx)(v.Suspense,{fallback:(0,Z.jsx)(b.Z,{}),children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(_,{to:"cast",children:"Cast"}),(0,Z.jsx)(_,{to:"reviews",children:"Reviews"})]})})]}),(0,Z.jsx)(f.j3,{})]})},G=t(1933),O=m.Z.div(o||(o=(0,h.Z)(["\ndisplay: flex;\njustify-content: center;\n"]))),S=function(){var n,e,t=(0,v.useState)(null),r=(0,p.Z)(t,2),a=r[0],i=r[1],s=(0,v.useState)(!1),c=(0,p.Z)(s,2),o=c[0],l=c[1],x=(0,f.TH)(),h=(0,v.useRef)(null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),m=(0,f.UO)().movieId;return(0,v.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,(0,G.fR)(m);case 4:e=n.sent,i(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(w,{to:h.current,children:"Go back"}),o&&(0,Z.jsx)(O,{children:(0,Z.jsx)(b.Z,{})}),a&&(0,Z.jsx)(q,{title:a.title,vote_average:a.vote_average,overview:a.overview,poster_path:a.poster_path,genres:a.genres,release_date:a.release_date})]})}},1933:function(n,e,t){t.d(e,{GF:function(){return l},R8:function(){return p},bG:function(){return d},dU:function(){return o},fR:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="89c47b4059eaa0549c29c88014fa56ba",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=54.080fb0cb.chunk.js.map