(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{41:function(e,s,t){},63:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){"use strict";t.r(s);var a=t(2),c=t.n(a),i=t(32),n=t.n(i),r=t(10),o=t(11),j=t(16),l=t(15),d=(t(41),t(12)),m=t(13),_=t.p+"static/media/UserProfileImage.069d8599.png",b=t(1);var v=function(){return Object(b.jsxs)("div",{className:"sidebar__container",children:[Object(b.jsxs)("section",{className:"profile__Box",children:[Object(b.jsx)("h3",{className:"logo__text",children:"Watch Moives"}),Object(b.jsx)("img",{src:_,alt:"",className:"profile__circle__image"}),Object(b.jsx)("h6",{className:"profile__name",children:"TaeYeon Royce"})]}),Object(b.jsxs)("section",{className:"sidebar__firstSection",children:[Object(b.jsx)("div",{className:"menu",children:"Menu"}),Object(b.jsxs)("div",{className:"sidebar__context sidebar__clicked",children:[Object(b.jsx)(d.a,{className:"sidebar__icon"}),"Discover"]}),Object(b.jsxs)("div",{className:"sidebar__context",children:[Object(b.jsx)(d.c,{className:"sidebar__icon"}),"Trending"]}),Object(b.jsxs)("div",{className:"sidebar__context",children:[Object(b.jsx)(m.c,{className:"sidebar__icon"}),"New Releases"]}),Object(b.jsxs)("div",{className:"sidebar__context",children:[Object(b.jsx)(m.a,{className:"sidebar__icon"}),"Activity",Object(b.jsx)("span",{className:"activity__counts",children:"9"})]})]})]})};var O=function(e){return Object(b.jsx)("section",{className:"container",children:Object(b.jsxs)("div",{className:"main__view__container",children:[Object(b.jsx)("div",{className:"leftsidebar",children:Object(b.jsx)(v,{})}),e.views]})})},u=t(21),x=t.n(u),h=t(33),p=t(34),N=t.n(p),f=t(14);t(63);var y=function(e){var s=e.id,t=e.year,a=e.title,c=e.summary,i=e.poster,n=e.genres;return Object(b.jsx)(f.b,{to:{pathname:"/movie/".concat(s),state:{year:t,title:a,summary:c,poster:i,genres:n}},children:Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:i,alt:a,title:a,className:"movie__image"}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:a}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("div",{className:"genres__container",children:n.map((function(e,s){return Object(b.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(b.jsx)("p",{className:"movie__summary",children:c})]})]})})};t(69);var g=function(){return Object(b.jsxs)("div",{className:"stickyHeader__container",children:[Object(b.jsxs)("div",{className:"search__dummy",children:[Object(b.jsx)(d.b,{className:"search__icon"}),Object(b.jsx)("input",{type:"text",placeholder:"Search Movies",className:"search"})]}),Object(b.jsxs)("select",{name:"choice",children:[Object(b.jsx)("option",{value:"first",defaultValue:!0,children:"Trending"}),Object(b.jsx)("option",{value:"second",disabled:!0,children:"Stars"}),Object(b.jsx)("option",{value:"third",disabled:!0,children:"Years"})]})]})};t(70);var w=function(){return Object(b.jsxs)("div",{className:"center",children:[Object(b.jsx)("div",{className:"wave wa1"}),Object(b.jsx)("div",{className:"wave wa2"}),Object(b.jsx)("div",{className:"wave wa3"}),Object(b.jsx)("div",{className:"wave wa4"}),Object(b.jsx)("div",{className:"wave wa5"})]})},k=(t(71),function(e){Object(j.a)(t,e);var s=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=s.call.apply(s,[this].concat(c))).state={isLoading:!0,movie:[]},e.getMovies=Object(h.a)(x.a.mark((function s(){var t,a;return x.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating&limit=40");case 2:t=s.sent,a=t.data.data.movies,e.setState({moives:a,isLoading:!1});case 5:case"end":return s.stop()}}),s)}))),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.moives;return Object(b.jsx)("div",{className:"content__container",children:s?Object(b.jsx)(w,{}):Object(b.jsxs)("div",{className:"moives__container",children:[Object(b.jsx)(g,{}),Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})]})})}}]),t}(c.a.Component)),M=k;var D=function(){return Object(b.jsx)(O,{views:Object(b.jsx)(M,{})})};t(72);var S=function(e){var s=e.movieData,t=s.year,a=s.title,c=s.poster,i=s.summary,n=s.genres;return Object(b.jsxs)("div",{className:"content__container",children:[Object(b.jsx)("div",{className:"stickyHeader__container",children:Object(b.jsx)(f.b,{to:"/",children:Object(b.jsx)(m.b,{className:"backward__arrow"})})}),Object(b.jsxs)("div",{className:"movie__detail__container",children:[Object(b.jsx)("img",{src:c,alt:a,title:a,className:"movie__detail__image"}),Object(b.jsxs)("div",{className:"movie__detail__data",children:[Object(b.jsx)("h3",{className:"movie__detail__title",children:a}),Object(b.jsx)("h5",{className:"movie__detail__year",children:t}),Object(b.jsx)("div",{className:"detail__genres__container",children:n.map((function(e,s){return Object(b.jsx)("li",{className:"detail__genres__genre",children:e},s)}))}),Object(b.jsx)("p",{className:"movie__detail__summary",children:i})]})]})]})},C=function(e){Object(j.a)(t,e);var s=Object(l.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,s=e.location,t=e.history;void 0===s.state&&t.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(b.jsx)(O,{views:Object(b.jsx)(S,{movieData:e.state})}):null}}]),t}(c.a.Component),L=C,T=t(3),A=function(e){Object(j.a)(t,e);var s=Object(l.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsxs)(f.a,{children:[Object(b.jsx)(T.a,{path:"/",exact:!0,component:D}),Object(b.jsx)(T.a,{path:"/movie/:id",component:L})]})}}]),t}(c.a.Component),B=A;n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.70986635.chunk.js.map