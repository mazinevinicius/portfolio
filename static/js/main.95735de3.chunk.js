(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(14),c=a.n(i),r=(a(44),a(12)),o=a(4),m=(a(45),function(e){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(r.b,{to:"/"},l.a.createElement("small",null,"home")),l.a.createElement(r.b,{to:"/education"},l.a.createElement("small",null,"forma\xe7\xe3o")),l.a.createElement(r.b,{to:"/experience"},l.a.createElement("small",null,"experi\xeancia")),l.a.createElement(r.b,{to:"/repositories"},l.a.createElement("small",null,"reposit\xf3rios")))),l.a.createElement("div",null,e.children))}),u=a(11),s=a(13),d=a(107),E=a(18),p=a.n(E),f=a(36),v=a.n(f).a.create({baseURL:"https://api.github.com"}),h=(a(87),a(88),function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!0),r=Object(u.a)(c,2),o=r[0],m=r[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),h=f[0],b=f[1];return Object(n.useEffect)((function(){m(!0),v.get("/users/mazinevinicius").then((function(e){i(e.data)})),setTimeout((function(){m(!1)}),1e3),b(!0)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"layout",className:"container"},l.a.createElement("div",{id:"card"},o?l.a.createElement(p.a,{type:"Oval",color:"#4e73df",height:100,width:100,timeout:3e3}):l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,Object.assign({in:h},h?{timeout:1e3}:{}),l.a.createElement("div",null,l.a.createElement("picture",null,l.a.createElement("img",{src:null===a||void 0===a?void 0:a.avatar_url,alt:"Avatar GitHub"})),l.a.createElement("h1",null,null===a||void 0===a?void 0:a.name),l.a.createElement("p",{id:"title"},"Desenvolvedor Web"),l.a.createElement("hr",{className:"solid"}),l.a.createElement("div",{id:"contactAndJob"},l.a.createElement("h4",null,null===a||void 0===a?void 0:a.company),l.a.createElement("h4",{id:"verticalDivider"},"|"),l.a.createElement("a",{href:null===a||void 0===a?void 0:a.html_url},l.a.createElement(s.a,null)),l.a.createElement("a",{href:"https://"+(null===a||void 0===a?void 0:a.blog)},l.a.createElement(s.c,null)),l.a.createElement("a",{href:"https://www.instagram.com/marquesmazine"},l.a.createElement(s.b,null)),l.a.createElement("a",{href:"mailto:mazinevinicius@gmail.com"},l.a.createElement(s.d,null))),l.a.createElement("p",{id:"location"},null===a||void 0===a?void 0:a.location)))))))}),b=a(15),g=a(5),S=[{title:"Sistemas para Internet",institution:"Faculdade ALFA",date:"2019 - 2021",description:"Desenvolvimento WEB e Mobile.",tecnologies:["PHP","Javascript","MySQL","MongoDB","HTML","CSS","Bootstrap"],icon:g.h},{title:"Next Level Week #1",institution:"Rocketseat",date:"Junho - 2020",description:"Desenvolvimento da aplica\xe7\xe3o Ecoleta; sistema para encontro de pontos de coleta recicl\xe1vel.",tecnologies:["Javascript","NodeJS","ReactJS","React Native","SQLite"],icon:g.j},{title:"Introdu\xe7\xe3o \xe0 API, Rest e RESTful",institution:"Rocketseat",date:"Maio - 2020",description:"Estudo de introdu\xe7\xe3o conceitual e pr\xe1tica de API e padr\xf5es Rest e RESTful.",tecnologies:["Javascript","NodeJS"],icon:g.e},{title:"Aprenda Excel Online",institution:"AprendaExcelOnline.com",date:"Julho - 2018",description:"Dom\xednio de cria\xe7\xe3o e manipula\xe7\xe3o de dados em planilhas Excel (B\xe1sico ao Avan\xe7ado).",tecnologies:["Excel"],icon:g.f}],O=(a(98),a(34),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"title"},l.a.createElement("h1",null,"Cursos e Forma\xe7\xf5es"),l.a.createElement("p",null,"Faculdade, cursos, treinamentos e outros aprendizados adquiridos.")),l.a.createElement(b.VerticalTimeline,null,S.map((function(e,t){return l.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#4e73df",color:"#fafafa"},contentArrowStyle:{borderRight:"7px solid  #4e73df"},date:e.date,iconStyle:{background:"#4e73df",color:"#fafafa"},icon:l.a.createElement(e.icon,null),key:t.valueOf()},l.a.createElement("h3",{className:"vertical-timeline-element-title"},e.title),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.institution),l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.tecnologies.join(" | ")))})))))}),j=[{company:"Grupo Gazin",location:"Douradina - PR",office:"Aux. Administrativo | Desenvolvedor WEB",date:"2018 - presente",description:"Desenvolvimento de aplica\xe7\xf5es WEB; tabula\xe7\xe3o e an\xe1lise de dados de pesquisas de mercado; cria\xe7\xe3o e amostragem de apresenta\xe7\xf5es empresariais.",icon:g.b},{company:"Escrit\xf3rio Lider",location:"Icara\xedma - PR",office:"Aux. Cont\xe1bil",date:"2010 - 2015",description:"Contabilidade de empresas de pequeno porte; lan\xe7amento de notas fiscais.",icon:g.a}],y=(a(99),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"title"},l.a.createElement("h1",null,"Experi\xeancias Profissionais"),l.a.createElement("p",null,"Locais de trabalho e fun\xe7\xf5es desenvolvidas.")),l.a.createElement(b.VerticalTimeline,null,j.map((function(e,t){return l.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#4e73df",color:"#fafafa"},contentArrowStyle:{borderRight:"7px solid  #4e73df"},date:e.date,iconStyle:{background:"#4e73df",color:"#fafafa"},icon:l.a.createElement(e.icon,null),key:t.valueOf()},l.a.createElement("h3",{className:"vertical-timeline-element-title"},e.office),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),l.a.createElement("h4",null,l.a.createElement(s.e,null)," ",e.location),l.a.createElement("p",null,e.description))})))))}),k=(a(100),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!0),r=Object(u.a)(c,2),o=r[0],m=r[1],s=Object(n.useState)(!1),E=Object(u.a)(s,2),f=E[0],h=E[1];return Object(n.useEffect)((function(){m(!0),v.get("/users/mazinevinicius/repos?sort=interactions&per_page=100").then((function(e){i(e.data)})),setTimeout((function(){m(!1)}),1e3),h(!0)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"title"},l.a.createElement("h1",null,"Reposit\xf3rios"),l.a.createElement("p",null,"Reposit\xf3rios, trabalhos e estudos publicados no Github ",l.a.createElement(g.g,null))),o?l.a.createElement(p.a,{type:"Oval",color:"#4e73df",height:100,width:100,timeout:3e3}):l.a.createElement(l.a.Fragment,null,a.map((function(e,t){return l.a.createElement(d.a,Object.assign({in:f},f?{timeout:1e3}:{}),l.a.createElement("div",{id:"vertical-card",key:t.valueOf()},l.a.createElement("h1",null,function(e){switch(e){case"TypeScript":case"JavaScript":return l.a.createElement(g.j,null);case"TSQL":return l.a.createElement(g.d,null);case"PHP":return l.a.createElement(g.k,null);case"HTML":return l.a.createElement(g.i,null);case"CSS":return l.a.createElement(g.c,null);default:return l.a.createElement(g.b,null)}}(e.language)),l.a.createElement("h3",null,e.name),l.a.createElement("small",null,"Linguagem utilizada: ",e.language?e.language:"Anota\xe7\xf5es/estudos em .md"),l.a.createElement("p",null,e.description),l.a.createElement("small",{id:"link-repositorio"},l.a.createElement("a",{href:e.html_url},e.html_url))))})))))}),x=function(){return l.a.createElement(r.a,null,l.a.createElement(m,null,l.a.createElement(o.a,{component:h,path:"/",exact:!0}),l.a.createElement(o.a,{component:O,path:"/education"}),l.a.createElement(o.a,{component:y,path:"/experience"}),l.a.createElement(o.a,{component:k,path:"/repositories"})))};var A=function(){return l.a.createElement(x,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root"))},39:function(e,t,a){e.exports=a(101)},44:function(e,t,a){},45:function(e,t,a){},87:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.95735de3.chunk.js.map