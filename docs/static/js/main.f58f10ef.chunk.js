(this.webpackJsonpsurvey_recommend_paper=this.webpackJsonpsurvey_recommend_paper||[]).push([[0],{108:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(2),r=n.n(c),o=n(50),a=n.n(o),s=(n(108),n(6)),d=n.n(s),u=n(51),l=n(7),j=(n(110),n(18)),f=(n(111),n(1)),b=f.g(f.h),v=function(t){return b(t.type)},h=r.a.memo((function(t){var e=t.data,n=t.setSelectedNode,r=e.nodes,o=e.links;console.log(r,o);var a=Object(c.useState)(0),s=Object(l.a)(a,2),d=s[0],u=s[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),p=h[0],x=h[1];Object(c.useEffect)((function(){var t=f.i(".NodeView").node().getBoundingClientRect();u(t.width),x(t.height)}),[]);var O=f.e(r).force("link",f.c(o).id((function(t){return t.id}))).force("charge",f.d()).force("center",f.b(d/2,p/2)),y=f.i("#node-view-svg");y.selectAll("*").remove();var g=y.append("g").attr("id","link-g").attr("stroke","#999").selectAll("line").data(o).join("line").attr("stroke-width",1).attr("stroke-opacity",.6).attr("pointer-events","none"),m=y.append("g").attr("id","node-g").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("circle").data(r).join("circle").attr("id",(function(t){return t.id})).attr("r",5).attr("fill",v).style("cursor","pointer").on("click",(function(t,e){n(e),t.stopPropagation(),_(e)})).call(function(t){return f.a().on("start",(function(e){e.active||t.alphaTarget(.3).restart(),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y})).on("drag",(function(t){t.subject.fx=t.x,t.subject.fy=t.y})).on("end",(function(e){e.active||t.alphaTarget(0),e.subject.fx=null,e.subject.fy=null}))}(O)),_=function(t){var e=new Set([].concat(Object(j.a)(t.cite_list),Object(j.a)(t.cited_list),[t.id]));f.j("circle").attr("opacity",(function(t){return e.has(t.id)?1:.2})),f.j("circle").attr("stroke",(function(e){return e.id==t.id?"#f03b20":null})),f.j("circle").attr("stroke-width",(function(e){return e.id==t.id?2.4:null})),f.j("line").attr("stroke-opacity",(function(t){return e.has(t.source.id)&&e.has(t.target.id)?.6:.1}))};O.on("tick",(function(){g.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y})),m.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y}))}));return Object(i.jsx)("div",{className:"NodeView",children:Object(i.jsx)("svg",{width:"100%",height:"100%",id:"node-view-svg",onClick:function(){f.j("circle").attr("opacity",1),f.j("circle").attr("stroke",null),f.j("circle").attr("stroke-width",1.5),f.j("line").attr("stroke-opacity",.6)}})})})),p=r.a.memo((function(t){var e=t.selectedNode,n=e.id,c=e.data,r=void 0===c?{}:c;e.cited_list;return Object(i.jsxs)("div",{className:"DetailView",children:[Object(i.jsxs)("div",{children:["title: ",r.title]}),Object(i.jsxs)("div",{children:["doi: ",r.doi||n]}),Object(i.jsxs)("div",{children:["author: ",r.author]}),Object(i.jsxs)("div",{children:["year: ",r.year]})]})})),x=(n(112),r.a.memo((function(t){var e=t.cite_node_list,n=t.cited_node_list;return console.log(e,n),Object(i.jsxs)("div",{className:"RecommendView",children:[Object(i.jsx)("div",{children:"cite:"}),e.map((function(t){return Object(i.jsx)("div",{children:t.data.title||t.id},t.id)})),Object(i.jsx)("br",{}),Object(i.jsx)("div",{children:"cited:"}),n.map((function(t){return Object(i.jsx)("div",{children:t.data.title},t.id)}))]})})));var O=function(){var t=Object(c.useState)({nodes:[],links:[]}),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var e,n,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.f("[20210105]survey_nodes.json");case 2:e=(e=t.sent).filter((function(t){return"in_survey"===t.type||t.cited_count>=4||t.cite_count>=4})),n=new Set(e.map((function(t){return t.id}))),i=[],e.forEach((function(t){t.cite_list.forEach((function(e){return n.has(e)&&i.push({source:t.id,target:e})})),t.type="in_survey"===t.type?"survey":t.cited_count>t.cite_count})),r({nodes:e,links:i});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var o=Object(c.useState)({}),a=Object(l.a)(o,2),s=a[0],j=a[1];console.log("select",s);var b=n.nodes.filter((function(t){return(s.cite_list||[]).indexOf(t.id)>-1})),v=n.nodes.filter((function(t){return(s.cited_list||[]).indexOf(t.id)>-1}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"NodeViewContainer",children:Object(i.jsx)(h,{data:n,setSelectedNode:j})}),Object(i.jsx)("div",{className:"RecommendViewContainer",children:Object(i.jsx)(x,{cite_node_list:b,cited_node_list:v})}),Object(i.jsx)("div",{className:"DetailViewContainer",children:Object(i.jsx)(p,{selectedNode:s})})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),r(t),o(t)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),y()}},[[113,1,2]]]);
//# sourceMappingURL=main.f58f10ef.chunk.js.map