(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{41:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var r=n(24),a=n.n(r),o=n(25),i=n.n(o),c=n(26),u=n.n(c),s=n(27),l=n.n(s),f=n(17),h=n.n(f),m=n(42),p=n.n(m),d=n(0),g=n.n(d),y=n(2),v=n(63),k=n(59),b=n(39),E=n(3),z=n(64),x=n(65);function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}var R=function(t){u()(n,t);var e=w(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).szavazat=function(t){var e={bevitel1:t};fetch("https://s1.siralycore.hu:8083/szavazatfelvitel",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.text()})).then((function(t){return alert(t)}))},r.state={isLoading:!0},r}return i()(n,[{key:"componentDidMount",value:function(){var t=this;return fetch("https://s1.siralycore.hu:8083/film").then((function(t){return t.json()})).then((function(e){t.setState({isLoading:!1,dataSource:e},(function(){}))})).catch((function(t){console.error(t)}))}},{key:"render",value:function(){var t=this;return this.state.isLoading?g.a.createElement(E.a,{style:{flex:1,padding:20}},g.a.createElement(k.a,null)):g.a.createElement(E.a,{style:{flex:1,paddingTop:20}},g.a.createElement(v.a,{data:this.state.dataSource,renderItem:function(e){var n=e.item;return g.a.createElement(E.a,null,g.a.createElement(b.a,{style:{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}},n.film_cim," "),g.a.createElement(z.a,{source:{uri:"https://s1.siralycore.hu:8083/"+n.film_kep},style:{width:300,height:300,marginLeft:"auto",marginRight:"auto"}}),g.a.createElement(x.a,{style:S.kekgomb,onPress:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.szavazat(n.film_id));case 1:case"end":return e.stop()}}),null,null,null,Promise)}},g.a.createElement(b.a,{style:{color:"white",fontWeight:"bold",fontSize:15}},"Erre szavazok")))},keyExtractor:function(t,e){return t.film_id}}))}}]),n}(g.a.Component),S=y.a.create({kekgomb:{alignItems:"center",backgroundColor:"blue",padding:10,width:300,marginLeft:"auto",marginRight:"auto"}})},66:function(t,e,n){t.exports=n(85)}},[[66,1,2]]]);
//# sourceMappingURL=app.16fc182e.chunk.js.map