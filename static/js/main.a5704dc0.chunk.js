(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{44:function(e,s,c){},51:function(e,s,c){},52:function(e,s,c){},53:function(e,s,c){},54:function(e,s,c){},55:function(e,s,c){},56:function(e,s,c){},76:function(e,s,c){"use strict";c.r(s);var a=c(2),t=c.n(a),i=c(30),r=c.n(i),n=c(19),l=c.n(n),j=c(31),o=c(12),_=(c(44),c(15)),d=c(10),b=c(11),m=c.p+"static/media/UserProfileImage.069d8599.png",v=c(5),x=c(1);var u=function(e){return Object(_.useMediaQuery)({maxWidth:780})?Object(x.jsxs)("div",{className:"small__sidebar__container",children:[Object(x.jsx)("section",{className:"small__profile__Box",children:Object(x.jsx)(v.b,{to:"/profile",children:Object(x.jsx)("img",{src:m,alt:"",className:"small__profile__circle__image"})})}),Object(x.jsx)("div",{className:"small__sidebar__divider"}),Object(x.jsxs)("section",{className:"small__sidebar__firstSection",children:[Object(x.jsx)(v.b,{to:"/",children:Object(x.jsx)("div",{className:"small__sidebar__context "+("home"===e.currentPage?"small__sidebar__clicked":null),children:Object(x.jsx)(d.a,{className:"small__sidebar__icon"})})}),Object(x.jsx)(v.b,{to:"/library",children:Object(x.jsx)("div",{className:"small__sidebar__context "+("library"===e.currentPage?"small__sidebar__clicked":null),children:Object(x.jsx)(b.a,{className:"small__sidebar__icon"})})}),Object(x.jsx)(v.b,{to:"/like",children:Object(x.jsx)("div",{className:"small__sidebar__context "+("liked"===e.currentPage?"small__sidebar__clicked":null),children:Object(x.jsx)(d.b,{className:"small__sidebar__icon"})})}),Object(x.jsx)(v.b,{to:"/activity",children:Object(x.jsx)("div",{className:"small__sidebar__context "+("activity"===e.currentPage?"small__sidebar__clicked":null),children:Object(x.jsx)(b.b,{className:"small__sidebar__icon"})})})]})]}):Object(x.jsxs)("div",{className:"sidebar__container",children:[Object(x.jsxs)("section",{className:"profile__Box",children:[Object(x.jsx)("h3",{className:"logo__text",children:"Watch Moives"}),Object(x.jsx)(v.b,{to:"/profile",className:"profile__circle__image__link",children:Object(x.jsx)("img",{src:m,alt:"",className:"profile__circle__image"})}),Object(x.jsx)("h6",{className:"profile__name",children:"TaeYeon Royce"})]}),Object(x.jsx)("div",{className:"sidebar__divider"}),Object(x.jsxs)("section",{className:"sidebar__firstSection",children:[Object(x.jsx)("div",{className:"menu",children:"Menu"}),Object(x.jsx)(v.b,{to:"/",children:Object(x.jsxs)("div",{className:"sidebar__context "+("home"===e.currentPage?"sidebar__clicked":null),children:[Object(x.jsx)(d.a,{className:"sidebar__icon"}),"Discover"]})}),Object(x.jsx)(v.b,{to:"/library",children:Object(x.jsxs)("div",{className:"sidebar__context "+("library"===e.currentPage?"sidebar__clicked":null),children:[Object(x.jsx)(b.a,{className:"sidebar__icon"}),"My Library"]})}),Object(x.jsx)(v.b,{to:"/like",children:Object(x.jsxs)("div",{className:"sidebar__context "+("liked"===e.currentPage?"sidebar__clicked":null),children:[Object(x.jsx)(d.b,{className:"sidebar__icon"}),"Liked"]})}),Object(x.jsx)(v.b,{to:"/activity",children:Object(x.jsxs)("div",{className:"sidebar__context "+("activity"===e.currentPage?"sidebar__clicked":null),children:[Object(x.jsx)(b.b,{className:"sidebar__icon"}),"Activity",Object(x.jsx)("span",{className:"activity__counts",children:"9"})]})})]})]})};var O=function(e){return Object(x.jsx)("section",{className:"container",children:Object(x.jsxs)("div",{className:"main__view__container",children:[Object(x.jsx)("div",{className:"leftsidebar",children:Object(x.jsx)(u,{currentPage:e.currentPage})}),e.views]})})};c(51);var h=function(e){var s=e.id,c=e.year,a=e.title,t=e.summary,i=e.poster,r=e.genres,n=e.rating;return Object(x.jsx)(v.b,{to:{pathname:"/movie/".concat(s),state:{year:c,title:a,summary:t,poster:i,genres:r,rating:n}},className:"moive__detail__link",children:Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)("img",{src:i,alt:a,title:a,className:"movie__image"}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("h3",{className:"movie__title",children:a}),Object(x.jsx)("h5",{className:"movie__year",children:c}),Object(x.jsxs)("h5",{className:"movie__rating",children:["\u2b50\ufe0f",n," / 10"]}),Object(x.jsx)("div",{className:"genres__container",children:r.map((function(e,s){return Object(x.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(x.jsx)("p",{className:"movie__summary",children:t})]})]})})};c(52);var f=function(e){var s=Object(a.useState)("star"),c=Object(o.a)(s,2),t=c[0],i=c[1];return Object(x.jsxs)("div",{className:"stickyHeader__container",children:[Object(x.jsxs)("div",{className:"search__dummy",children:[Object(x.jsx)(d.c,{className:"search__icon"}),Object(x.jsx)("input",{type:"text",placeholder:"Search Movies",className:"search"})]}),Object(x.jsxs)("div",{className:"selection__contaniner",children:[Object(x.jsx)("span",{className:"sort__by",children:"Sort by : "}),Object(x.jsxs)("select",{name:"choice",onChange:function(s){i(s.target.value),e.sorting(s.target.value)},value:t,children:[Object(x.jsx)("option",{value:"star",children:"Star Rating"},"star"),Object(x.jsx)("option",{value:"yearfast",children:"Year-fast"},"yearfast"),Object(x.jsx)("option",{value:"yearold",children:"Year-old"},"yearold")]})]})]})};c(53);var N=function(){return Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"wave wa1"}),Object(x.jsx)("div",{className:"wave wa2"}),Object(x.jsx)("div",{className:"wave wa3"}),Object(x.jsx)("div",{className:"wave wa4"}),Object(x.jsx)("div",{className:"wave wa5"})]})},p=(c(54),{star:{sortfunc:function(e,s){return s.rating-e.rating}},yearfast:{sortfunc:function(e,s){return s.year-e.year}},yearold:{sortfunc:function(e,s){return e.year-s.year}}});var g=function(e){var s=e.isLoading,c=e.movies,t=Object(a.useState)("star"),i=Object(o.a)(t,2),r=i[0],n=i[1];return Object(x.jsx)("div",{className:"content__container",children:s?Object(x.jsx)(N,{}):Object(x.jsxs)("div",{className:"moives__container",children:[Object(x.jsx)(f,{sorting:function(e){n(e)}}),Object(x.jsx)("div",{className:"movies",children:c.sort(p[r].sortfunc).map((function(e){return Object(x.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating},e.id)}))})]})})};var y=function(e){var s=e.isLoading,c=e.movies;return Object(x.jsx)(O,{views:Object(x.jsx)(g,{movies:c,isLoading:s}),currentPage:"home"})},k=c(34),w=c(35),P=c(38),M=c(37);c(55);var S=function(e){var s=e.movieData,c=s.year,a=s.title,t=s.poster,i=s.summary,r=s.genres,n=s.rating;return Object(x.jsxs)("div",{className:"content__container",children:[Object(x.jsx)("div",{className:"stickyHeader__container",children:Object(x.jsx)(v.b,{to:"/",children:Object(x.jsx)(b.c,{className:"backward__arrow"})})}),Object(x.jsx)("div",{className:"movie__detail__container",children:Object(x.jsxs)("div",{className:"movie__detail",children:[Object(x.jsx)("h3",{className:"movie__detail__title",children:a}),Object(x.jsxs)("div",{className:"movie__detail__data",children:[Object(x.jsx)("img",{src:t,alt:a,title:a,className:"movie__detail__image"}),Object(x.jsxs)("div",{className:"movie__detail__textdata",children:[Object(x.jsx)("div",{className:"detail__genres__container",children:r.map((function(e,s){return Object(x.jsx)("li",{className:"detail__genres__genre",children:e},s)}))}),Object(x.jsx)("h5",{className:"movie__detail__year",children:c}),Object(x.jsxs)("h5",{className:"movie__detail__rating",children:["\u2b50\ufe0f",n," / 10"]}),Object(x.jsx)("div",{className:"movie__detail__summary",children:i})]})]})]})})]})},L=function(e){Object(P.a)(c,e);var s=Object(M.a)(c);function c(){return Object(k.a)(this,c),s.apply(this,arguments)}return Object(w.a)(c,[{key:"componentDidMount",value:function(){var e=this.props,s=e.location,c=e.history;void 0===s.state&&c.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(x.jsx)(O,{views:Object(x.jsx)(S,{movieData:e.state}),currentPage:"home"}):null}}]),c}(t.a.Component),D=L,T=c(3);var B=function(){return Object(x.jsx)("h1",{children:"This is Liked Page"})};var I=function(){return Object(x.jsx)(O,{views:Object(x.jsx)(B,{}),currentPage:"liked"})};var R=function(){return Object(x.jsx)("h1",{children:"This is My Library Page"})};var W=function(){return Object(x.jsx)(O,{views:Object(x.jsx)(R,{}),currentPage:"library"})};var Y=function(){return Object(x.jsx)("h1",{children:"This is My Activity Page"})};var A=function(){return Object(x.jsx)(O,{views:Object(x.jsx)(Y,{}),currentPage:"activity"})};var C=function(){return null};var E=function(){return Object(x.jsxs)("div",{className:"profile__container",children:[Object(x.jsxs)("div",{className:"profile__info__container",children:[Object(x.jsx)("div",{className:"profile__intro__container",children:Object(x.jsx)("h3",{className:"profile__IDcard",children:"Royce's film record"})}),Object(x.jsx)("div",{className:"profile__preference__container"})]}),Object(x.jsx)("div",{className:"profile__context__divider"}),Object(x.jsx)("div",{className:"profile__movie__constainer"}),Object(x.jsx)("h1",{children:"This is My Profile Page"})]})};c(56);var H=function(){return Object(_.useMediaQuery)({maxWidth:780})?Object(x.jsx)(C,{}):Object(x.jsx)(E,{})};var J=function(){return Object(x.jsx)(O,{views:Object(x.jsx)(H,{}),currentPage:"profile"})},Q=c(36),U=c.n(Q);var q=function(){var e=Object(a.useState)(!0),s=Object(o.a)(e,2),c=s[0],t=s[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),n=r[0],_=r[1],d=function(){var e=Object(j.a)(l.a.mark((function e(){var s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=40");case 2:s=e.sent,c=s.data.data.movies,t(!1),_(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(T.a,{path:"/",exact:!0,render:function(){return Object(x.jsx)(y,{movies:n,isLoading:c})}}),Object(x.jsx)(T.a,{path:"/profile",component:J}),Object(x.jsx)(T.a,{path:"/library/",component:W}),Object(x.jsx)(T.a,{path:"/like/",component:I}),Object(x.jsx)(T.a,{path:"/activity",component:A}),Object(x.jsx)(T.a,{path:"/movie/:id",component:D})]})};r.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a5704dc0.chunk.js.map