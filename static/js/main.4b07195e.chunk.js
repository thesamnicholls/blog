(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{23:function(e,t,i){e.exports=i(34)},28:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),u=i(12),s=i.n(u),o=(i(28),i(7)),l=i(2),r=function(){return n.a.createElement("div",{className:"c-navigation"},n.a.createElement("div",{className:"c-navigation__wrapper"},n.a.createElement("p",{className:"c-navigation__title"},"Blog"),n.a.createElement("ul",{className:"c-navigation__list"},n.a.createElement("li",{className:"c-navigation__list-item"},n.a.createElement(o.b,{className:"c-navigation__link",to:"/blog",title:"Click here to go home"},"Home")),n.a.createElement("li",{className:"c-navigation__list-item"},n.a.createElement(o.b,{className:"c-navigation__link",to:"/blog/about",title:"Click here to go to the about page"},"About")))))},c=i(11),m=function(e){var t=e.title,i=e.setVisible;return n.a.createElement("button",{className:"c-button",onClick:function(){i((function(e){return e+5}))},type:"button"},t)},d=function(e){var t=e.title,i=e.body,a=e.id;return n.a.createElement("div",{className:"c-card"},n.a.createElement(o.b,{className:"c-card__link",to:"/blog/"+a,title:"Click here to go to view the post"},n.a.createElement("p",{className:"c-card__title"},t)),n.a.createElement("p",{className:"c-card__description"},i))},p=function(){return n.a.createElement("div",{className:"c-loading"})},b=i(9),v=Object(b.b)((function(e){return{posts:e.posts}}))((function(e){var t=Object(a.useState)(5),i=Object(c.a)(t,2),u=i[0],s=i[1],o=Object(a.useState)(!1),l=Object(c.a)(o,2),r=l[0],b=l[1],v=e.posts;return Object(a.useEffect)((function(){var e=setTimeout((function(){b(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),n.a.createElement("div",{className:"l-page"},n.a.createElement("h1",{className:"l-page__title"},"Blog"),r?n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"l-grid"},v.slice(0,u).map((function(e){return n.a.createElement(d,{key:e.id,id:e.id,title:e.title,body:e.body})})))),n.a.createElement("div",{className:"o-row"},u<v.length&&n.a.createElement(m,{title:"Load More",setVisible:s}))):n.a.createElement(p,null))})),q=function(){return n.a.createElement("div",{className:"l-page"},n.a.createElement("h1",{className:"l-page__title"},"About"),n.a.createElement("p",{className:"l-page__description"},"Tellus adipiscing sequi dignissim odio impedit, distinctio, repudiandae felis iure molestiae quod. Torquent ultricies, proident, duis blanditiis facere, beatae, repudiandae pharetra itaque ultricies morbi laudantium varius in saepe fames vel adipisicing, arcu, potenti. Suspendisse. Irure aenean, dolore eius potenti officiis aspernatur porttitor curae praesentium? Aliqua, nunc incidunt ut, qui augue. Suspendisse impedit? Sapien doloribus tenetur, pede iaculis egestas? Hic asperiores dicta quibusdam velit, cillum nisi unde, mauris massa ac, tristique dicta modi! Blandit temporibus condimentum, placerat, eveniet temporibus nunc, eiusmod! Accusantium unde consequat aliquet! Pretium quam pulvinar ullamco sit ultrices id iaculis amet dolores officiis atque laborum metus atque, nihil."))},g=Object(b.b)((function(e,t){var i=t.match.params.post_id;return{post:e.posts.find((function(e){return e.id===i}))}}),(function(e){return{deletePost:function(t){e({type:"DELETE_POST",id:t})}}}))((function(e){var t=Object(a.useState)(!1),i=Object(c.a)(t,2),u=i[0],s=i[1],o=e.post;return Object(a.useEffect)((function(){var e=setTimeout((function(){s(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),n.a.createElement("div",{className:"l-page"},u?n.a.createElement("div",null,n.a.createElement("h1",{className:"l-page__title"},o.title),n.a.createElement("p",{className:"l-page__description"},o.body),n.a.createElement("div",{className:"o-row"},n.a.createElement("button",{className:"c-button",title:"Click here to delete post",onClick:function(){e.deletePost(e.post.id),e.history.push("/blog")}},"Delete Post"))):n.a.createElement(p,null))})),E=function(){return n.a.createElement(o.a,null,n.a.createElement(r,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/blog",component:v}),n.a.createElement(l.a,{exact:!0,path:"/blog/about",component:q}),n.a.createElement(l.a,{exact:!0,path:"/blog/:post_id",component:g})))},f=i(19),h={posts:[{id:"1",title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{id:"2",title:"qui est esse",body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{id:"3",title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{id:"4",title:"eum et est occaecati",body:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{id:"5",title:"nesciunt quas odio",body:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"},{id:"6",title:"dolorem eum magni eos aperiam quia",body:"ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"},{id:"7",title:"magnam facilis autem",body:"dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"},{id:"8",title:"dolorem dolore est ipsam",body:"dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"},{id:"9",title:"nesciunt iure omnis dolorem tempora et accusantium",body:"consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"},{id:"10",title:"optio molestias id quia eum",body:"quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;if("DELETE_POST"===t.type){var i=e.posts.filter((function(e){return t.id!==e.id}));return Object(f.a)(Object(f.a)({},e),{},{posts:i})}return e},N=i(14),y=Object(N.b)(_);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b.a,{store:y},n.a.createElement(E,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4b07195e.chunk.js.map