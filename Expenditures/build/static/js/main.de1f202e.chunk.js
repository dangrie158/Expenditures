(this.webpackJsonpExpenditures=this.webpackJsonpExpenditures||[]).push([[8],{1141:function(e,t,n){},1142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),o=n.n(s),i=n(20),c=n(3),l=n(4),u=n(6),m=n(5),j=n(7),d=n(12),p=n(1),h=n(56),f=n(1231),y=function e(){Object(c.a)(this,e),this.total=0,this.by_year=[],this.by_month=[]},g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).id=-1,n.name="",n.color="primary",n.icon="add",n.sum=0,n}return Object(j.a)(t,e),t}(y),b=function e(){Object(c.a)(this,e),this.username="",this.amount=0,this.reason="",this.id=-1,this.tags=[],this.created_date=""},E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tags:Array(),showModal:!0,isSaving:!1},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"getUsername",value:function(){return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1")}},{key:"handleChangeAmount",value:function(e){this.props.item.amount=Number.parseFloat((e.detail.value||"0").replace(",","."))}},{key:"handleChangeReason",value:function(e){this.props.item.reason=e.detail.value||"",this.props.onEdit(this.props.item)}},{key:"handleChangeUser",value:function(e){this.props.item.username=e.detail.value,this.props.onEdit(this.props.item)}},{key:"handleToggleTag",value:function(e){var t=this.props.item.tags.map((function(e){return e.name})).indexOf(e.name),n=this.props.item.tags;t>=0?n.splice(t,1):n.push(e),this.props.item.tags=n,this.props.onEdit(this.props.item)}},{key:"doRefresh",value:function(e){var t=this;this.setState({isLoading:!0}),fetch("".concat(I,"/api/tags")).then((function(e){return e.json()})).then((function(e){t.setState({tags:e})})).catch(console.error)}},{key:"itemHasTag",value:function(e){return this.props.item.tags.map((function(e){return e.name})).indexOf(e.name)>=0}},{key:"handleSubmit",value:function(e){var t=this;this.setState({isSaving:!0}),e.preventDefault();var n=this.props.item;this.addOrUpdateExpenditure(n).then((function(){t.props.onSave(n),t.props.onDismiss()})).finally((function(){t.setState({isSaving:!1})}))}},{key:"addOrUpdateExpenditure",value:function(e){var t={amount:(100*e.amount).toFixed(0),reason:e.reason,username:e.username,tags:e.tags},n="".concat(I,"/api/expenditures"),a="POST";return-1!==e.id&&(n="".concat(I,"/api/expenditures/").concat(e.id),a="PUT"),fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.error(e),alert("Speichern fehlgeschlagen")}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.C,{isOpen:this.props.show,onDidDismiss:this.props.onDismiss},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(p.m,{translucent:!0},r.a.createElement(p.N,null,r.a.createElement(p.M,null,-1===this.props.item.id?"Ausgabe eintragen":"Ausgabe bearbeiten"),r.a.createElement(p.e,{slot:"start"},r.a.createElement(p.d,{onClick:this.props.onDismiss},"Abbrechen")),r.a.createElement(p.e,{slot:"end"},r.a.createElement(p.d,{color:"primary",type:"submit",disabled:this.state.isSaving},"Speichern")))),r.a.createElement(p.j,{fullscreen:!0},r.a.createElement(p.s,null,r.a.createElement(p.y,null,"Betrag"),r.a.createElement(p.r,{value:this.props.item.amount>0?this.props.item.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"",inputMode:"decimal",pattern:"^[0-9]+([\\.,][0-9]{1,2})?$",required:!0,onIonBlur:function(t){return e.props.onEdit(e.props.item)},onIonChange:function(t){return e.handleChangeAmount(t)},placeholder:"0.00"})," \u20ac"),r.a.createElement(p.s,null,r.a.createElement(p.y,null,"Grund"),r.a.createElement(p.r,{required:!0,value:this.props.item.reason,onIonChange:function(t){return e.handleChangeReason(t)},placeholder:"Shop oder Zweck",autocapitalize:"on"})),r.a.createElement(p.s,null,r.a.createElement(p.y,null,"Gezahlt von"),r.a.createElement(p.I,{slot:"end",style:{width:"50%"},onIonChange:function(t){return e.handleChangeUser(t)},value:this.props.item.username},this.props.userNames.map((function(e){return r.a.createElement(p.J,{key:e,value:e},r.a.createElement(p.y,null,e))})))),r.a.createElement(p.s,null,r.a.createElement(p.y,{className:"ion-text-wrap"},this.state.tags.map((function(t){return r.a.createElement(p.d,{key:t.id,onClick:function(n){return e.handleToggleTag(t)},color:t.color,fill:e.itemHasTag(t)?"solid":"outline",size:"small",style:{width:"40%",margin:"0.4rem calc(20%/4)"}},r.a.createElement(p.y,null,t.name),r.a.createElement(p.n,{icon:n(26)("./".concat(t.icon,".js"))}))})))))))}}]),t}(r.a.Component);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showEditor:!1,expenditures:Array(),expenditureLimit:0,newItem:new b,isLoading:!1},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh(),this.setState({newItem:w({},this.state.newItem,{username:this.getUsername()})})}},{key:"getUsername",value:function(){return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1")}},{key:"deleteExpenditure",value:function(e){var t=this;fetch("".concat(I,"/api/expenditures/").concat(e.id),{method:"DELETE"}).then((function(n){t.doRefresh(),t.props.onDelete&&t.props.onDelete(e)})).catch(console.error)}},{key:"editExpenditure",value:function(e){this.setState({newItem:e,showEditor:!0})}},{key:"addExpenditure",value:function(){var e=new b;e.username=this.getUsername(),this.setState({newItem:e,showEditor:!0})}},{key:"doRefresh",value:function(e){var t=this;return this.setState({isLoading:!0}),this.searchNext().then((function(){t.setState({isLoading:!1}),e&&e.detail.complete()}))}},{key:"searchNext",value:function(e){var t=this;return new Promise((function(n,a){t.setState({expenditureLimit:t.state.expenditureLimit+20},(function(){var r=["limit=".concat(t.state.expenditureLimit)];void 0!==t.props.date&&""!==t.props.date&&r.push("date=".concat(t.props.date)),void 0!==t.props.tag&&"undefined"!==t.props.tag&&""!==t.props.tag&&"-1"!==t.props.tag&&r.push("tag=".concat(t.props.tag)),fetch("".concat(I,"/api/expenditures?").concat(r.join("&"))).then((function(e){return e.json()})).then((function(e){t.setState({expenditures:e.map((function(e){return e.amount=e.amount/100,e}))}),n()})).catch(a).finally((function(){e&&e.target.complete()}))}))}))}},{key:"onSaveExpenditure",value:function(e){this.props.onEdit&&this.props.onEdit(e),this.doRefresh()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.j,null,r.a.createElement(p.B,{isOpen:this.state.isLoading,message:"Laden..."}),r.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},r.a.createElement(p.G,null)),r.a.createElement(p.A,{style:{marginBottom:"3rem"}},this.state.expenditures.map((function(t){return r.a.createElement(p.x,{key:t.id.toString()},r.a.createElement(p.s,null,r.a.createElement(p.y,null,t.reason,r.a.createElement("p",null,t.username),r.a.createElement("p",null,new Date(Date.parse(t.created_date)).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric"}))),r.a.createElement(p.y,{color:"success",className:"ion-text-wrap",style:{textAlign:"right"}},r.a.createElement(p.K,{color:"success"},t.amount.toLocaleString(void 0,{style:"currency",currency:"EUR"})),r.a.createElement("p",null,t.tags.map((function(t){return r.a.createElement(p.d,{color:t.color,onClick:function(){return e.props.onTagClick(t)},key:t.id},r.a.createElement(p.n,{icon:n(26)("./".concat(t.icon,".js"))}))}))))),r.a.createElement(p.w,{side:"end"},r.a.createElement(p.v,{color:"primary",onClick:function(){document.querySelector("ion-item-sliding").closeOpened(),e.editExpenditure(t)}},"Bearbeiten"),r.a.createElement(p.v,{color:"danger",onClick:function(){e.deleteExpenditure(t)}},"L\xf6schen")))})),r.a.createElement(p.p,{threshold:"100px",disabled:!1,onIonInfinite:function(t){return e.searchNext(t)}},r.a.createElement(p.q,null))),this.props.allowEdit&&r.a.createElement(E,{show:this.state.showEditor,onDismiss:function(){e.setState({showEditor:!1})},onSave:function(t){return e.onSaveExpenditure(t)},userNames:this.props.userNames||[],onEdit:function(t){e.setState({newItem:t})},item:this.state.newItem}),this.props.allowAdd&&r.a.createElement(p.k,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(p.l,{onClick:function(){return e.addExpenditure()}},r.a.createElement(p.n,{icon:f.a}))))}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userName:U.loadCredentials().username,availableUserNames:Array(),balance:0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"editExpenditure",value:function(e){this.setState({newItem:e,showModal:!0}),this.doRefresh()}},{key:"doRefresh",value:function(e){var t=this;fetch("".concat(I,"/api/current-status")).then((function(e){return e.json()})).then((function(e){return t.setState({availableUserNames:e.map((function(e){return e[0]}))}),e})).then((function(e){var n=e.find((function(e){return e[0]===t.state.userName})),a=e.find((function(e){return e[0]!==t.state.userName})),r=n[1]-a[1];return t.setState({balance:r/100}),e})).catch(console.error)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.D,null,r.a.createElement(p.m,null,r.a.createElement(p.N,null,r.a.createElement(p.L,{slot:"start",style:{marginLeft:"1rem"}},r.a.createElement(p.o,{src:"/assets/icon/android-chrome-192x192.png"})),r.a.createElement(p.M,null,"Letzte Ausgaben"))),r.a.createElement(p.j,{fullscreen:!0,className:"ion-padding",style:{"--padding-start":0,"--padding-end":0}},r.a.createElement(p.f,{routerLink:"/summary/",style:{bottom:"0",position:"fixed",width:"calc(100% - 4em)",margin:"2em"},routerDirection:"forward",slot:"fixed",color:this.state.balance<0?"warning":"success"},r.a.createElement(p.g,null,r.a.createElement(p.h,null,"Aktueller Stand"),r.a.createElement(p.i,null,this.state.balance.toLocaleString(void 0,{style:"currency",currency:"EUR"})))),r.a.createElement(k,{onEdit:function(t){return e.editExpenditure(t)},onDelete:function(t){return e.doRefresh()},onTagClick:function(t){return e.props.history.push("/tags/".concat(t.id))},userNames:this.state.availableUserNames,allowEdit:!0,allowAdd:!0})))}}]),t}(r.a.Component),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"handleChangeUsername",value:function(e){this.setState({username:e.detail.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.detail.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(this.state.username,this.state.password)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.C,{isOpen:!0},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(p.m,{translucent:!0},r.a.createElement(p.N,null,r.a.createElement(p.M,null,"Nutzer eintragen"),r.a.createElement(p.e,{slot:"end"},r.a.createElement(p.d,{color:"primary",type:"submit"},"Speichern")))),r.a.createElement(p.j,{fullscreen:!0},r.a.createElement(p.s,null,r.a.createElement(p.y,null,"Nutzer"),r.a.createElement(p.r,{required:!0,onIonChange:function(t){return e.handleChangeUsername(t)}})),r.a.createElement(p.s,null,r.a.createElement(p.y,null,"Passwort"),r.a.createElement(p.r,{required:!0,onIonChange:function(t){return e.handleChangePassword(t)},type:"password"})))))}}]),t}(r.a.Component),S=n(49),_=n(50),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={max_month:0,max_year:0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.A,null,r.a.createElement(p.u,null,r.a.createElement(p.t,null,r.a.createElement(p.y,null,"Nach Monat")),this.props.summary.by_month.map((function(t){var n=Object(_.a)(t,2),a=n[0],s=n[1];return r.a.createElement(p.s,{routerLink:"/expenditures/?date=".concat(a,"&tag=").concat(e.props.summary.id),routerDirection:"forward",key:"date-".concat(a)},r.a.createElement(p.y,{position:"fixed"},new Date(Date.parse(a)).toLocaleString(void 0,{month:"long"}),r.a.createElement("p",null,new Date(Date.parse(a)).toLocaleString(void 0,{year:"numeric"}))),r.a.createElement(p.y,null,r.a.createElement(p.E,{value:s/e.state.max_month})),r.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(s/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))}))),r.a.createElement(p.u,null,r.a.createElement(p.t,null,r.a.createElement(p.y,null,"Nach Jahr")),this.props.summary.by_year.map((function(t){var n=Object(_.a)(t,2),a=n[0],s=n[1];return r.a.createElement(p.s,{routerLink:"/expenditures/?date=".concat(a,"&tag=").concat(e.props.summary.id),routerDirection:"forward",key:"date-".concat(a)},r.a.createElement(p.y,null,new Date(Date.parse(a)).toLocaleString(void 0,{year:"numeric"})),r.a.createElement(p.y,null,r.a.createElement(p.E,{value:s/e.state.max_year})),r.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(s/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{max_month:Math.max.apply(Math,Object(S.a)(e.summary.by_month.map((function(e){return e[1]})))),max_year:Math.max.apply(Math,Object(S.a)(e.summary.by_year.map((function(e){return e[1]}))))}}}]),t}(r.a.Component),C=D,N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={tag:new g},n.tagId=-1,n.tagId=e.match.params.id,n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"doRefresh",value:function(e){var t=this;this.tagId>=0&&fetch("".concat(I,"/api/tags/").concat(this.tagId)).then((function(e){return e.json()})).then((function(e){t.setState({tag:e})})).catch(console.error)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.D,null,r.a.createElement(p.m,null,r.a.createElement(p.N,null,r.a.createElement(p.e,{slot:"start"},r.a.createElement(p.c,null)),r.a.createElement(p.M,null,r.a.createElement(p.y,null,"Ausgaben f\xfcr: ",this.state.tag.name)))),r.a.createElement(p.j,{fullscreen:!0,className:"ion-padding"},r.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},r.a.createElement(p.G,null)),r.a.createElement(p.f,{color:this.state.tag.color},r.a.createElement(p.g,{class:"ion-text-center"},r.a.createElement(p.n,{style:{fontSize:"4rem"},icon:n(26)("./".concat(this.state.tag.icon,".js"))}),r.a.createElement(p.i,null,this.state.tag.name),r.a.createElement(p.h,null,"Ausgaben gesamt"),r.a.createElement(p.i,null,(this.state.tag.total/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))),r.a.createElement(C,{summary:this.state.tag})))}}]),t}(r.a.Component),P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tags:Array(),summary:new y},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"doRefresh",value:function(e){var t=this;fetch("".concat(I,"/api/tags/summary")).then((function(e){return e.json()})).then((function(e){t.setState({tags:e})})).catch(console.error),fetch("".concat(I,"/api/expenditures/summary")).then((function(e){return e.json()})).then((function(e){t.setState({summary:e})})).catch(console.error)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.D,null,r.a.createElement(p.m,null,r.a.createElement(p.N,null,r.a.createElement(p.e,{slot:"start"},r.a.createElement(p.c,null)),r.a.createElement(p.M,null,"Ausgaben \xdcbersicht"))),r.a.createElement(p.j,{fullscreen:!0,className:"ion-padding"},r.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},r.a.createElement(p.G,null)),r.a.createElement(p.A,{style:{marginBottom:0}},r.a.createElement(p.u,null,r.a.createElement(p.t,null,r.a.createElement(p.y,null,"Nach Tag")),this.state.tags.map((function(e){return r.a.createElement(p.s,{routerLink:"/tags/"+e.id,routerDirection:"forward",key:e.id},r.a.createElement(p.n,{color:e.color,icon:n(26)("./".concat(e.icon,".js"))}),r.a.createElement(p.y,{position:"fixed"},e.name),r.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(e.sum/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))})))),r.a.createElement(D,{summary:this.state.summary})))}}]),t}(r.a.Component),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tag:new g,date:"",tagId:"",year:-1,month:-1},n.queryParams=new Map,n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.queryParams=this.props.location.search.split(/\?|&/g).reduce((function(e,t){var n=t.split("=");return 2===n.length?e.set(n[0],n[1]):1===n.length&&""!==n[0]&&e.set(n[0],""),e}),new Map);var t,n="";if(this.queryParams.get("date")){var a=this.queryParams.get("date").split("/");a.length>1?(t=a[0],n=a[1]):1===a.length&&(n=a[0])}this.setState({year:n,month:t,tagId:this.queryParams.get("tag"),date:this.queryParams.get("date")},(function(){e.doRefresh()}))}},{key:"doRefresh",value:function(){var e=this;this.queryParams.get("tag")&&fetch("".concat(I,"/api/tags/").concat(this.queryParams.get("tag"))).then((function(e){return e.json()})).then((function(t){e.setState({tag:t})})).catch(console.error)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.D,null,r.a.createElement(p.m,null,r.a.createElement(p.N,null,r.a.createElement(p.e,{slot:"start"},r.a.createElement(p.c,null)),r.a.createElement(p.M,null,r.a.createElement(p.y,null,"Ausgaben \xdcbersicht")))),r.a.createElement(p.j,{fullscreen:!0},r.a.createElement(p.f,{style:{position:"sticky"},color:this.state.tag.color},r.a.createElement(p.g,{class:"ion-text-center"},r.a.createElement(p.h,null,"Ausgaben f\xfcr ",this.queryParams.get("date")?new Date(Date.parse(this.queryParams.get("date"))).toLocaleString(void 0,{year:"numeric",month:"long"}):new Date(Date.parse(this.queryParams.get("date"))).toLocaleString(void 0,{year:"numeric"})," ",this.state.tag.id>=0&&"f\xfcr ".concat(this.state.tag.name)),r.a.createElement(p.i,null))),r.a.createElement(k,{onTagClick:function(t){return e.props.history.push("/tags/".concat(t.id))},allowAdd:!1,allowEdit:!0,date:this.state.date,tag:this.state.tagId})))}}]),t}(r.a.Component);n(1131),n(1132),n(1133),n(1134),n(1135),n(1136),n(1137),n(1138),n(1139),n(1140),n(1141);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I="",U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:t.loadCredentials()},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.fetch;window.fetch=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a=R({},a,{headers:R({},a.headers,{Authorization:"Basic ".concat(window.btoa("".concat(e.state.credentials.username,":").concat(e.state.credentials.password)))})}),t(n,a).then((function(t){return t.ok||401!==t.status||e.setState({credentials:{}}),t}))}}},{key:"saveSessionCredentials",value:function(e,n){t.persistCredentials(e,n),this.setState({credentials:{username:e,password:n}})}},{key:"render",value:function(){var e=this;return this.state.credentials.username&&this.state.credentials.password?r.a.createElement(p.b,null,r.a.createElement(h.a,null,r.a.createElement(p.H,null,r.a.createElement(d.b,{path:"/home",component:O,exact:!0}),r.a.createElement(d.b,{path:"/tags/:id/",component:N}),r.a.createElement(d.b,{path:"/summary/",component:P}),r.a.createElement(d.b,{path:"/expenditures/",component:L}),r.a.createElement(d.b,{path:"/",render:function(){return r.a.createElement(d.a,{to:"/home"})}})))):r.a.createElement(p.b,null,r.a.createElement(p.D,null,r.a.createElement(x,{onSave:function(t,n){return e.saveSessionCredentials(t,n)}})))}}],[{key:"persistCredentials",value:function(e,t){var n=new Date;n.setTime(n.getTime()+615168e5),document.cookie="username=".concat(e,"; expires=").concat(n.toUTCString()),document.cookie="password=".concat(t,"; expires=").concat(n.toUTCString())}},{key:"loadCredentials",value:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)password\s*=\s*([^;]*).*$)|^.*$/,"$1");return this.persistCredentials(e,t),{username:e,password:t}}}]),t}(r.a.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))},26:function(e,t,n){var a={"./add-circle-outline.js":74,"./add-circle.js":77,"./add.js":80,"./airplane.js":81,"./alarm.js":84,"./albums.js":87,"./alert.js":90,"./american-football.js":93,"./analytics.js":96,"./aperture.js":99,"./apps.js":102,"./appstore.js":105,"./archive.js":108,"./arrow-back.js":111,"./arrow-down.js":112,"./arrow-dropdown-circle.js":113,"./arrow-dropdown.js":116,"./arrow-dropleft-circle.js":119,"./arrow-dropleft.js":122,"./arrow-dropright-circle.js":125,"./arrow-dropright.js":128,"./arrow-dropup-circle.js":131,"./arrow-dropup.js":134,"./arrow-forward.js":137,"./arrow-round-back.js":138,"./arrow-round-down.js":141,"./arrow-round-forward.js":144,"./arrow-round-up.js":147,"./arrow-up.js":150,"./at.js":153,"./attach.js":156,"./backspace.js":159,"./barcode.js":162,"./baseball.js":165,"./basket.js":168,"./basketball.js":171,"./battery-charging.js":174,"./battery-dead.js":177,"./battery-full.js":180,"./beaker.js":183,"./bed.js":186,"./beer.js":189,"./bicycle.js":192,"./bluetooth.js":195,"./boat.js":198,"./body.js":201,"./bonfire.js":204,"./book.js":207,"./bookmark.js":210,"./bookmarks.js":213,"./bowtie.js":216,"./briefcase.js":219,"./browsers.js":222,"./brush.js":225,"./bug.js":228,"./build.js":231,"./bulb.js":234,"./bus.js":237,"./business.js":240,"./cafe.js":243,"./calculator.js":246,"./calendar.js":249,"./call.js":252,"./camera.js":255,"./car.js":258,"./card.js":261,"./cart.js":264,"./cash.js":267,"./cellular.js":270,"./chatboxes.js":273,"./chatbubbles.js":276,"./checkbox-outline.js":279,"./checkbox.js":282,"./checkmark-circle-outline.js":285,"./checkmark-circle.js":288,"./checkmark.js":291,"./clipboard.js":294,"./clock.js":297,"./close-circle-outline.js":300,"./close-circle.js":303,"./close.js":304,"./cloud-circle.js":305,"./cloud-done.js":308,"./cloud-download.js":311,"./cloud-outline.js":314,"./cloud-upload.js":317,"./cloud.js":320,"./cloudy-night.js":323,"./cloudy.js":326,"./code-download.js":329,"./code-working.js":332,"./code.js":335,"./cog.js":338,"./color-fill.js":341,"./color-filter.js":344,"./color-palette.js":347,"./color-wand.js":350,"./compass.js":353,"./construct.js":356,"./contact.js":359,"./contacts.js":362,"./contract.js":365,"./contrast.js":368,"./copy.js":371,"./create.js":374,"./crop.js":377,"./cube.js":380,"./cut.js":383,"./desktop.js":386,"./disc.js":389,"./document.js":392,"./done-all.js":395,"./download.js":398,"./easel.js":401,"./egg.js":404,"./exit.js":407,"./expand.js":410,"./eye-off.js":413,"./eye.js":416,"./fastforward.js":419,"./female.js":422,"./filing.js":425,"./film.js":428,"./finger-print.js":431,"./fitness.js":434,"./flag.js":437,"./flame.js":440,"./flash-off.js":443,"./flash.js":446,"./flashlight.js":449,"./flask.js":452,"./flower.js":455,"./folder-open.js":458,"./folder.js":461,"./football.js":464,"./funnel.js":467,"./gift.js":470,"./git-branch.js":473,"./git-commit.js":476,"./git-compare.js":479,"./git-merge.js":482,"./git-network.js":485,"./git-pull-request.js":488,"./glasses.js":491,"./globe.js":494,"./grid.js":497,"./hammer.js":500,"./hand.js":503,"./happy.js":506,"./headset.js":509,"./heart-dislike.js":512,"./heart-empty.js":515,"./heart-half.js":518,"./heart.js":521,"./help-buoy.js":524,"./help-circle-outline.js":527,"./help-circle.js":530,"./help.js":533,"./home.js":536,"./hourglass.js":539,"./ice-cream.js":542,"./image.js":545,"./images.js":548,"./infinite.js":551,"./information-circle-outline.js":554,"./information-circle.js":557,"./information.js":560,"./jet.js":563,"./journal.js":566,"./key.js":569,"./keypad.js":572,"./laptop.js":575,"./leaf.js":578,"./link.js":581,"./list-box.js":584,"./list.js":587,"./locate.js":590,"./lock.js":593,"./log-in.js":596,"./log-out.js":599,"./logo-android.js":602,"./logo-angular.js":604,"./logo-apple.js":606,"./logo-bitbucket.js":608,"./logo-bitcoin.js":610,"./logo-buffer.js":612,"./logo-chrome.js":614,"./logo-closed-captioning.js":616,"./logo-codepen.js":618,"./logo-css3.js":620,"./logo-designernews.js":622,"./logo-dribbble.js":624,"./logo-dropbox.js":626,"./logo-euro.js":628,"./logo-facebook.js":630,"./logo-flickr.js":632,"./logo-foursquare.js":634,"./logo-freebsd-devil.js":636,"./logo-game-controller-a.js":638,"./logo-game-controller-b.js":640,"./logo-github.js":642,"./logo-google.js":644,"./logo-googleplus.js":646,"./logo-hackernews.js":648,"./logo-html5.js":650,"./logo-instagram.js":652,"./logo-ionic.js":654,"./logo-ionitron.js":656,"./logo-javascript.js":658,"./logo-linkedin.js":660,"./logo-markdown.js":662,"./logo-model-s.js":664,"./logo-no-smoking.js":666,"./logo-nodejs.js":668,"./logo-npm.js":670,"./logo-octocat.js":672,"./logo-pinterest.js":674,"./logo-playstation.js":676,"./logo-polymer.js":678,"./logo-python.js":680,"./logo-reddit.js":682,"./logo-rss.js":684,"./logo-sass.js":686,"./logo-skype.js":688,"./logo-slack.js":690,"./logo-snapchat.js":692,"./logo-steam.js":694,"./logo-tumblr.js":696,"./logo-tux.js":698,"./logo-twitch.js":700,"./logo-twitter.js":702,"./logo-usd.js":704,"./logo-vimeo.js":706,"./logo-vk.js":708,"./logo-whatsapp.js":710,"./logo-windows.js":712,"./logo-wordpress.js":714,"./logo-xbox.js":716,"./logo-xing.js":718,"./logo-yahoo.js":720,"./logo-yen.js":722,"./logo-youtube.js":724,"./magnet.js":726,"./mail-open.js":729,"./mail-unread.js":732,"./mail.js":735,"./male.js":738,"./man.js":741,"./map.js":744,"./medal.js":747,"./medical.js":750,"./medkit.js":753,"./megaphone.js":756,"./menu.js":759,"./mic-off.js":760,"./mic.js":763,"./microphone.js":766,"./moon.js":769,"./more.js":772,"./move.js":775,"./musical-note.js":778,"./musical-notes.js":781,"./navigate.js":784,"./notifications-off.js":787,"./notifications-outline.js":790,"./notifications.js":793,"./nuclear.js":796,"./nutrition.js":799,"./open.js":802,"./options.js":805,"./outlet.js":808,"./paper-plane.js":811,"./paper.js":814,"./partly-sunny.js":817,"./pause.js":820,"./paw.js":823,"./people.js":826,"./person-add.js":829,"./person.js":832,"./phone-landscape.js":835,"./phone-portrait.js":838,"./photos.js":841,"./pie.js":844,"./pin.js":847,"./pint.js":850,"./pizza.js":853,"./planet.js":856,"./play-circle.js":859,"./play.js":862,"./podium.js":865,"./power.js":868,"./pricetag.js":871,"./pricetags.js":874,"./print.js":877,"./pulse.js":880,"./qr-scanner.js":883,"./quote.js":886,"./radio-button-off.js":889,"./radio-button-on.js":892,"./radio.js":895,"./rainy.js":898,"./recording.js":901,"./redo.js":904,"./refresh-circle.js":907,"./refresh.js":910,"./remove-circle-outline.js":913,"./remove-circle.js":916,"./remove.js":919,"./reorder.js":922,"./repeat.js":923,"./resize.js":926,"./restaurant.js":929,"./return-left.js":932,"./return-right.js":935,"./reverse-camera.js":938,"./rewind.js":941,"./ribbon.js":944,"./rocket.js":947,"./rose.js":950,"./sad.js":953,"./save.js":956,"./school.js":959,"./search.js":962,"./send.js":963,"./settings.js":966,"./share-alt.js":969,"./share.js":972,"./shirt.js":975,"./shuffle.js":978,"./skip-backward.js":981,"./skip-forward.js":984,"./snow.js":987,"./speedometer.js":990,"./square-outline.js":993,"./square.js":996,"./star-half.js":999,"./star-outline.js":1002,"./star.js":1005,"./stats.js":1008,"./stopwatch.js":1011,"./subway.js":1014,"./sunny.js":1017,"./swap.js":1020,"./switch.js":1023,"./sync.js":1026,"./tablet-landscape.js":1029,"./tablet-portrait.js":1032,"./tennisball.js":1035,"./text.js":1038,"./thermometer.js":1041,"./thumbs-down.js":1044,"./thumbs-up.js":1047,"./thunderstorm.js":1050,"./time.js":1053,"./timer.js":1056,"./today.js":1059,"./train.js":1062,"./transgender.js":1065,"./trash.js":1068,"./trending-down.js":1071,"./trending-up.js":1074,"./trophy.js":1077,"./tv.js":1080,"./umbrella.js":1083,"./undo.js":1086,"./unlock.js":1089,"./videocam.js":1092,"./volume-high.js":1095,"./volume-low.js":1098,"./volume-mute.js":1101,"./volume-off.js":1104,"./walk.js":1107,"./wallet.js":1110,"./warning.js":1113,"./watch.js":1116,"./water.js":1119,"./wifi.js":1122,"./wine.js":1125,"./woman.js":1128};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=26},61:function(e,t,n){e.exports=n(1142)},67:function(e,t,n){var a={"./ion-action-sheet-controller_8.entry.js":[1148,43],"./ion-action-sheet-ios.entry.js":[1149,44],"./ion-action-sheet-md.entry.js":[1150,45],"./ion-alert-ios.entry.js":[1151,24],"./ion-alert-md.entry.js":[1152,25],"./ion-app_8-ios.entry.js":[1153,11],"./ion-app_8-md.entry.js":[1154,12],"./ion-avatar_3-ios.entry.js":[1155,46],"./ion-avatar_3-md.entry.js":[1156,47],"./ion-back-button-ios.entry.js":[1157,48],"./ion-back-button-md.entry.js":[1158,49],"./ion-backdrop-ios.entry.js":[1159,81],"./ion-backdrop-md.entry.js":[1160,82],"./ion-button_2-ios.entry.js":[1161,50],"./ion-button_2-md.entry.js":[1162,51],"./ion-card_5-ios.entry.js":[1163,52],"./ion-card_5-md.entry.js":[1164,53],"./ion-checkbox-ios.entry.js":[1165,54],"./ion-checkbox-md.entry.js":[1166,55],"./ion-chip-ios.entry.js":[1167,56],"./ion-chip-md.entry.js":[1168,57],"./ion-col_3.entry.js":[1169,83],"./ion-datetime_3-ios.entry.js":[1170,20],"./ion-datetime_3-md.entry.js":[1171,21],"./ion-fab_3-ios.entry.js":[1172,58],"./ion-fab_3-md.entry.js":[1173,59],"./ion-img.entry.js":[1174,84],"./ion-infinite-scroll_2-ios.entry.js":[1175,39],"./ion-infinite-scroll_2-md.entry.js":[1176,40],"./ion-input-ios.entry.js":[1177,60],"./ion-input-md.entry.js":[1178,61],"./ion-item-option_3-ios.entry.js":[1179,62],"./ion-item-option_3-md.entry.js":[1180,63],"./ion-item_8-ios.entry.js":[1181,64],"./ion-item_8-md.entry.js":[1182,65],"./ion-loading-ios.entry.js":[1183,26],"./ion-loading-md.entry.js":[1184,27],"./ion-menu_4-ios.entry.js":[1185,18],"./ion-menu_4-md.entry.js":[1186,19],"./ion-modal-ios.entry.js":[1187,14],"./ion-modal-md.entry.js":[1188,15],"./ion-nav_5.entry.js":[1189,13],"./ion-popover-ios.entry.js":[1190,16],"./ion-popover-md.entry.js":[1191,17],"./ion-progress-bar-ios.entry.js":[1192,66],"./ion-progress-bar-md.entry.js":[1193,67],"./ion-radio_2-ios.entry.js":[1194,32],"./ion-radio_2-md.entry.js":[1195,33],"./ion-range-ios.entry.js":[1196,68],"./ion-range-md.entry.js":[1197,69],"./ion-refresher_2-ios.entry.js":[1198,41],"./ion-refresher_2-md.entry.js":[1199,42],"./ion-reorder_2-ios.entry.js":[1200,37],"./ion-reorder_2-md.entry.js":[1201,38],"./ion-ripple-effect.entry.js":[1202,85],"./ion-route_4.entry.js":[1203,70],"./ion-searchbar-ios.entry.js":[1204,28],"./ion-searchbar-md.entry.js":[1205,29],"./ion-segment_2-ios.entry.js":[1206,71],"./ion-segment_2-md.entry.js":[1207,72],"./ion-select_3-ios.entry.js":[1208,34],"./ion-select_3-md.entry.js":[1209,35],"./ion-slide_2-ios.entry.js":[1210,86],"./ion-slide_2-md.entry.js":[1211,87],"./ion-spinner.entry.js":[1212,73],"./ion-split-pane-ios.entry.js":[1213,88],"./ion-split-pane-md.entry.js":[1214,89],"./ion-tab-bar_2-ios.entry.js":[1215,74],"./ion-tab-bar_2-md.entry.js":[1216,75],"./ion-tab_2.entry.js":[1217,36],"./ion-text.entry.js":[1218,76],"./ion-textarea-ios.entry.js":[1219,77],"./ion-textarea-md.entry.js":[1220,78],"./ion-toast-ios.entry.js":[1221,30],"./ion-toast-md.entry.js":[1222,31],"./ion-toggle-ios.entry.js":[1223,22],"./ion-toggle-md.entry.js":[1224,23],"./ion-virtual-scroll.entry.js":[1225,90]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=67,e.exports=r},68:function(e,t,n){var a={"./ion-icon.entry.js":[1229,98]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=68,e.exports=r}},[[61,9,10]]]);
//# sourceMappingURL=main.de1f202e.chunk.js.map