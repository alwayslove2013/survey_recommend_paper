(this.webpackJsonpsurvey_recommend_paper=this.webpackJsonpsurvey_recommend_paper||[]).push([[0],{108:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),r=n.n(c),a=n(50),o=n.n(a),s=(n(108),n(6)),d=n.n(s),u=n(51),l=n(7),f=(n(110),n(18)),j=(n(111),n(2)),b=j.g(j.h),v=function(t){return b(t.type)},h=r.a.memo((function(t){var e=t.data,n=t.setSelectedNode,r=e.nodes,a=e.links;console.log(r,a);var o=Object(c.useState)(0),s=Object(l.a)(o,2),d=s[0],u=s[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),x=h[0],O=h[1];Object(c.useEffect)((function(){var t=j.i(".NodeView").node().getBoundingClientRect();u(t.width),O(t.height)}),[]);var p=j.e(r).force("link",j.c(a).id((function(t){return t.id}))).force("charge",j.d()).force("center",j.b(d/2,x/2)),g=j.i("#node-view-svg");g.selectAll("*").remove();var m=g.append("g").attr("id","link-g").attr("stroke","#999").selectAll("line").data(a).join("line").attr("stroke-width",1).attr("stroke-opacity",.6).attr("pointer-events","none"),y=g.append("g").attr("id","node-g").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("circle").data(r).join("circle").attr("id",(function(t){return t.id})).attr("r",5).attr("fill",v).style("cursor","pointer").on("click",(function(t,e){n(e),_(e)})).call(function(t){return j.a().on("start",(function(e){e.active||t.alphaTarget(.3).restart(),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y})).on("drag",(function(t){t.subject.fx=t.x,t.subject.fy=t.y})).on("end",(function(e){e.active||t.alphaTarget(0),e.subject.fx=null,e.subject.fy=null}))}(p)),_=function(t){var e=new Set([].concat(Object(f.a)(t.cite_list),Object(f.a)(t.cited_list),[t.id]));j.j("circle").attr("opacity",(function(t){return e.has(t.id)?1:.2})),j.j("line").attr("stroke-opacity",(function(e){return e.source.id==t.id||e.target.id==t.id?.6:.1}))};return p.on("tick",(function(){m.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),y.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))})),Object(i.jsx)("div",{className:"NodeView",children:Object(i.jsx)("svg",{width:"100%",height:"100%",id:"node-view-svg"})})})),x=r.a.memo((function(t){var e=t.selectedNode,n=e.id,c=e.data,r=void 0===c?{}:c;e.cited_list;return Object(i.jsxs)("div",{className:"DetailView",children:[Object(i.jsxs)("div",{children:["title: ",r.title]}),Object(i.jsxs)("div",{children:["doi: ",r.doi||n]}),Object(i.jsxs)("div",{children:["author: ",r.author]}),Object(i.jsxs)("div",{children:["year: ",r.year]})]})})),O=(n(112),r.a.memo((function(t){var e=t.cite_node_list,n=t.cited_node_list;return console.log(e,n),Object(i.jsxs)("div",{className:"RecommendView",children:[Object(i.jsx)("div",{children:"cite:"}),e.map((function(t){return Object(i.jsx)("div",{children:t.data.title||t.id},t.id)})),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:"cited:"}),n.map((function(t){return Object(i.jsx)("div",{children:t.data.title},t.id)}))]})})));var p=function(){var t=Object(c.useState)({nodes:[],links:[]}),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var e,n,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.f("[20201228]survey_nodes.json");case 2:e=(e=t.sent).filter((function(t){return"in_survey"===t.type||t.cited_list.length>3})),n=new Set(e.map((function(t){return t.id}))),i=[],e.forEach((function(t){"in_survey"===t.type&&t.cite_list.forEach((function(e){return n.has(e)&&i.push({source:t.id,target:e})}))})),r({nodes:e,links:i});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var a=Object(c.useState)({}),o=Object(l.a)(a,2),s=o[0],f=o[1];console.log("select",s);var b=n.nodes.filter((function(t){return(s.cite_list||[]).indexOf(t.id)>-1})),v=n.nodes.filter((function(t){return(s.cited_list||[]).indexOf(t.id)>-1}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"NodeViewContainer",children:Object(i.jsx)(h,{data:n,setSelectedNode:f})}),Object(i.jsx)("div",{className:"RecommendViewContainer",children:Object(i.jsx)(O,{cite_node_list:b,cited_node_list:v})}),Object(i.jsx)("div",{className:"DetailViewContainer",children:Object(i.jsx)(x,{selectedNode:s})})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}},[[113,1,2]]]);
//# sourceMappingURL=main.8a66083c.chunk.js.map