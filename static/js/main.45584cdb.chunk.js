(this["webpackJsonpprint-stickers-labels"]=this["webpackJsonpprint-stickers-labels"]||[]).push([[0],{65:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=a(45),c=a(58),s=a(26),m=a(21),u=a(115),d=a(111),f=a(123),p=a(119),g=a(124),v=a(125),b=a(120),E=a(116),h=a(108),S=a(121),k=Object(h.a)((function(e){return{root:{width:"250px",float:"left"},FormControl:{"margin-bottom":"15px",display:"block"}}})),x=function(e){var t=e.name,a=e.label,n=e.value,l=e.type,i=e.setFormState,o=e.formState,c=k(),u="date"===l?"date":"text";return r.a.createElement(d.a,{className:c.FormControl},r.a.createElement(S.a,{type:u,onChange:function(e){i(Object(m.a)(Object(m.a)({},o),{},Object(s.a)({},e.target.name,e.target.value)))},label:a,name:t,variant:"outlined",value:n}))},y=Object(h.a)((function(e){return{root:{width:"280px",float:"left"},FormControl:{"margin-bottom":"15px","max-width":"300px",display:"block"},FormControlSelect:{"margin-bottom":"15px",width:"200px"},button:{"& > *":{margin:e.spacing(1)}}}}));function w(e){var t=e.setStickersList,a=(e.stickersList,e.formState),n=e.setFormState,l=e.setFormViewStatus,i=e.todayDate,o=y(),h=function(e){n(Object(m.a)(Object(m.a)({},a),{},Object(s.a)({},e.target.name,e.target.checked)))};return r.a.createElement(u.a,{container:!0,className:o.root},r.a.createElement("h2",null,"Please Write Sticker info:"),r.a.createElement(x,{name:"date",label:"date",type:"date",value:a.date,formState:a,setFormState:n}),r.a.createElement(x,{name:"orderID",label:"orderID",value:a.orderID,formState:a,setFormState:n}),r.a.createElement(x,{name:"quantity",label:"Quantity",value:a.quantity,formState:a,setFormState:n}),r.a.createElement(d.a,{className:o.FormControlSelect},r.a.createElement(f.a,{id:"demo-simple-select-label"},"Choose material"),r.a.createElement(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"material",value:a.material,onChange:function(e){n(Object(m.a)(Object(m.a)({},a),{},{material:e.target.value}))}},r.a.createElement(g.a,{value:"silver"},"Silver"),r.a.createElement(g.a,{value:"rose_gold"},"Rose Gold"),r.a.createElement(g.a,{value:"gold_plated"},"Gold Plated"),r.a.createElement(g.a,{value:"gold"},"14k Yellow Gold"),r.a.createElement(g.a,{value:"white_gold"},"14k White Gold"))),r.a.createElement(x,{name:"chainLength",label:"Chain Length",value:a.chainLength,formState:a,setFormState:n}),r.a.createElement(x,{name:"line1",label:"line 1",value:a.line1,formState:a,setFormState:n}),r.a.createElement(x,{name:"line2",label:"line 2",value:a.line2,formState:a,setFormState:n}),r.a.createElement(x,{name:"image",label:"Image",value:a.image,formState:a,setFormState:n}),r.a.createElement(v.a,{control:r.a.createElement(b.a,{checked:a.gift,onChange:h,color:"primary"}),label:"Gift",name:"gift"}),r.a.createElement(v.a,{control:r.a.createElement(b.a,{checked:a.fast,onChange:h,color:"primary"}),label:"It's Fast",name:"fast"}),r.a.createElement("div",{className:o.button},r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){t((function(e){return[].concat(Object(c.a)(e),[a])}))}},"Add"),r.a.createElement(E.a,{variant:"contained",onClick:function(){l(!1)}},"Print"),r.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){n({orderID:"",date:i,quantity:"",material:"",chainLength:"",line1:"",line2:"",image:"",gift:!1,fast:!1})}},"Empty")))}var j=Object(h.a)((function(e){return{flex:{display:"flex","justify-content":"space-around"}}})),F=function(e){var t=e.date,a=e.quantity,n=e.orderID,l=j();return r.a.createElement("div",{className:l.flex},r.a.createElement("div",{className:"display-inline"},t),r.a.createElement("div",{className:"display-inline"},""!==a?"X".concat(a):null),r.a.createElement("div",{className:"display-inline"},"#",n))},O=Object(h.a)((function(e){return{img:{"background-position":"center","background-repeat":"no-repeat",height:"140px","background-size":"contain"}}})),L=function(e){var t=e.imageURL,a=O();return r.a.createElement("div",null,r.a.createElement("div",{className:a.img,style:{backgroundImage:"url('".concat(t,"')")}}))},N=Object(h.a)((function(e){return{checkbox:{padding:"0 4px"}}})),C={silver:"Silver",rose_gold:"Rose Gold",gold_plated:"24k Gold Plated",gold:"14k Yellow",white_gold:"14k White Gold"},_=function(e){var t=e.sticker,a=N();return r.a.createElement("div",null,r.a.createElement("div",{className:"height-20"},t.gift?r.a.createElement("div",{className:"".concat(a.checkbox," float-left silver")},"\u05d0\u05e8\u05d9\u05d6\u05ea \u05de\u05ea\u05e0\u05d4"):null,t.fast?r.a.createElement("div",{className:"float-right silver"},"\u05e9\u05dc\u05d9\u05d7 \u05e2\u05d3 \u05d4\u05d1\u05d9\u05ea"):null),r.a.createElement("div",{className:"material-class-".concat(t.material)},C[t.material]),r.a.createElement("div",null,t.line1),r.a.createElement("div",null,t.line2))},D=Object(h.a)((function(e){return{logoWrapper:{position:"absolute",left:"20%",bottom:"0px"}}})),I=function(){var e=D();return r.a.createElement("div",{className:e.logoWrapper},r.a.createElement("img",{src:"/logo.png",alt:"logo"}))},W=a(117),G=a(118),V=Object(h.a)((function(e){return{buttonsWarper:{position:"absolute",bottom:"-19px",width:"90px",left:"45px",height:"20px"}}})),q=function(e){var t=e.sticker,a=e.stickersList,n=e.setStickersList,l=e.setFormState,i=e.itemKey,o=V(),c=function(){var e=a.filter((function(e,t){return t!==i}));n(e)};return r.a.createElement("div",{className:o.buttonsWarper},r.a.createElement(W.a,{onClick:c,className:"float-left pointer"}),r.a.createElement(G.a,{onClick:function(){l(t),c()},className:"float-right pointer"}))},P=Object(h.a)((function(e){return{root:{height:"7cm",width:"4.58cm",float:"left","max-width":"4.58cm","max-height":"7cm","font-size":"13px","text-transform":"uppercase"},wrapper:{padding:"5px",position:"relative"},textWrapper:{height:"90px"},flex:{display:"flex","justify-content":"space-around"}}})),z=function(e){var t=e.sticker,a=e.itemKey,n=e.stickersList,l=e.setStickersList,i=e.setFormState,o=e.formViewStatus,c=P();return r.a.createElement("div",{className:c.root},r.a.createElement("div",{className:c.wrapper},r.a.createElement("div",{className:c.textWrapper},r.a.createElement(F,{date:t.date,quantity:t.quantity,orderID:t.orderID}),r.a.createElement(_,{sticker:t})),r.a.createElement(L,{imageURL:t.image}),r.a.createElement(I,null),o?r.a.createElement(q,{sticker:t,itemKey:a,setFormState:i,stickersList:n,setStickersList:l}):null))},K=function(e){var t=e.stickersList,a=e.formViewStatus,n=e.setStickersList,l=e.setFormState,i=a?"1305px":"1060px",o=Object(h.a)((function(e){return{root:{margin:"0 0 0 38px",padding:"0px",width:i}}}))(),c=t.map((function(e,i){return r.a.createElement(z,{stickersList:t,setStickersList:n,setFormState:l,itemKey:i,key:i,sticker:e,formViewStatus:a})})).reverse();return r.a.createElement("div",{className:o.root},c)},R=a(57),A=a.n(R),X=Object(h.a)((function(e){return{root:{position:"absolute"}}}));var Y=function(e){var t=e.setFormViewStatus,a=X();return r.a.createElement("div",{className:a.root},r.a.createElement(A.a,{className:"pointer",onClick:function(){t(!0)}}))},B=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!0),c=Object(o.a)(i,2),s=c[0],m=c[1],u=function(){var e=new Date;e.setDate((new Date).getDate()+1);var t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}(),d=Object(n.useState)({orderID:"11",date:u,quantity:"",material:"silver",chainLength:"",line1:"line1",line2:"line2",image:"https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-15/e15/s320x320/98331657_291805631844341_3782185453709637350_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=S3XzhPEIHGgAX_z8V84&oh=666e229c5f174508a405cb4895b9043b&oe=5F0A1887",gift:!1,fast:!1}),f=Object(o.a)(d,2),p=f[0],g=f[1];return r.a.createElement("div",null,s?r.a.createElement(w,{setStickersList:l,stickersList:a,formState:p,setFormState:g,setFormViewStatus:m,todayDate:u}):r.a.createElement(Y,{setFormViewStatus:m}),r.a.createElement(K,{formViewStatus:s,setStickersList:l,stickersList:a,setFormState:g}))};a(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.45584cdb.chunk.js.map