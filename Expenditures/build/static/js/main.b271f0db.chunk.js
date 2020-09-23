(this.webpackJsonpExpenditures=this.webpackJsonpExpenditures||[]).push([[8],{1151:function(e,t,n){},1152:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(25),o=n.n(r),i=n(14),c=n(3),l=n(4),u=n(6),m=n(5),j=n(7),d=n(8),p=n(1),h=n(57),f=function e(){Object(c.a)(this,e),this.total=0,this.by_year=[],this.by_month=[]},y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).id=-1,n.name="",n.color="",n.icon="cash",n.sum=0,n}return Object(j.a)(t,e),t}(f),g=function e(){Object(c.a)(this,e),this.username="",this.amount=0,this.reason="",this.id=-1,this.tags=[],this.created_date=""},b=n(1240),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={icon:void 0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.doRefresh()}},{key:"doRefresh",value:function(){var e=void 0;e=void 0!==this.props.name?n(83)("./".concat(this.props.name,".js")):b.a,this.setState({icon:e})}},{key:"render",value:function(){return s.a.createElement(p.n,{icon:this.state.icon,style:this.props.style,color:this.props.color})}}]),t}(s.a.Component),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={tags:Array(),showModal:!0,isSaving:!1},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"getUsername",value:function(){return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1")}},{key:"handleChangeAmount",value:function(e){this.props.item.amount=Number.parseFloat((e.detail.value||"0").replace(",","."))}},{key:"handleChangeReason",value:function(e){this.props.item.reason=e.detail.value||"",this.props.onEdit(this.props.item)}},{key:"handleChangeUser",value:function(e){this.props.item.username=e.detail.value,this.props.onEdit(this.props.item)}},{key:"handleToggleTag",value:function(e){var t=this.props.item.tags.map((function(e){return e.name})).indexOf(e.name),n=this.props.item.tags;t>=0?n.splice(t,1):n.push(e),this.props.item.tags=n,this.props.onEdit(this.props.item)}},{key:"doRefresh",value:function(e){var t=this;this.setState({isLoading:!0}),fetch("".concat(M,"/api/tags")).then((function(e){return e.json()})).then((function(e){t.setState({tags:e})})).catch(console.error)}},{key:"itemHasTag",value:function(e){return this.props.item.tags.map((function(e){return e.name})).indexOf(e.name)>=0}},{key:"handleSubmit",value:function(e){var t=this;this.setState({isSaving:!0}),e.preventDefault();var n=this.props.item;this.addOrUpdateExpenditure(n).then((function(){t.props.onSave(n),t.props.onDismiss()})).finally((function(){t.setState({isSaving:!1})}))}},{key:"addOrUpdateExpenditure",value:function(e){var t={amount:(100*e.amount).toFixed(0),reason:e.reason,username:e.username,tags:e.tags},n="".concat(M,"/api/expenditures"),a="POST";return-1!==e.id&&(n="".concat(M,"/api/expenditures/").concat(e.id),a="PUT"),fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.error(e),alert("Speichern fehlgeschlagen")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(p.C,{isOpen:this.props.show,onDidDismiss:this.props.onDismiss},s.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement(p.m,{translucent:!0},s.a.createElement(p.N,null,s.a.createElement(p.M,null,-1===this.props.item.id?"Ausgabe eintragen":"Ausgabe bearbeiten"),s.a.createElement(p.e,{slot:"start"},s.a.createElement(p.d,{onClick:this.props.onDismiss},"Abbrechen")),s.a.createElement(p.e,{slot:"end"},s.a.createElement(p.d,{color:"primary",type:"submit",disabled:this.state.isSaving},"Speichern")))),s.a.createElement(p.j,{fullscreen:!0},s.a.createElement(p.s,null,s.a.createElement(p.y,null,"Betrag"),s.a.createElement(p.r,{value:this.props.item.amount>0?this.props.item.amount.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}):"",inputMode:"decimal",pattern:"^[0-9]+([\\.,][0-9]{1,2})?$",required:!0,onIonBlur:function(t){return e.props.onEdit(e.props.item)},onIonChange:function(t){return e.handleChangeAmount(t)},placeholder:"0.00"})," \u20ac"),s.a.createElement(p.s,null,s.a.createElement(p.y,null,"Grund"),s.a.createElement(p.r,{required:!0,value:this.props.item.reason,onIonChange:function(t){return e.handleChangeReason(t)},placeholder:"Shop oder Zweck",autocapitalize:"on"})),s.a.createElement(p.s,null,s.a.createElement(p.y,null,"Gezahlt von"),s.a.createElement(p.I,{slot:"end",style:{width:"50%"},onIonChange:function(t){return e.handleChangeUser(t)},value:this.props.item.username},this.props.userNames.map((function(e){return s.a.createElement(p.J,{key:e,value:e},s.a.createElement(p.y,null,e))})))),s.a.createElement(p.s,null,s.a.createElement(p.y,{className:"ion-text-wrap"},this.state.tags.map((function(t){return s.a.createElement(p.d,{key:t.id,onClick:function(n){return e.handleToggleTag(t)},color:t.color,fill:e.itemHasTag(t)?"solid":"outline",size:"small",style:{width:"40%",margin:"0.4rem calc(20%/4)"}},s.a.createElement(p.y,null,t.name),s.a.createElement(v,{name:t.icon}))})))))))}}]),t}(s.a.Component);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={showEditor:!1,expenditures:Array(),expenditureLimit:20,newItem:new g,isLoading:!1},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh(),this.setState({newItem:k({},this.state.newItem,{username:this.getUsername()})})}},{key:"getUsername",value:function(){return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1")}},{key:"deleteExpenditure",value:function(e){var t=this;fetch("".concat(M,"/api/expenditures/").concat(e.id),{method:"DELETE"}).then((function(e){t.doRefresh()})).catch(console.error)}},{key:"editExpenditure",value:function(e){this.setState({newItem:e,showEditor:!0})}},{key:"addExpenditure",value:function(){var e=new g;e.username=this.getUsername(),this.setState({newItem:e,showEditor:!0})}},{key:"doRefresh",value:function(e){var t=this;this.setState({isLoading:!0});var n=["limit=".concat(this.state.expenditureLimit)];return void 0!==this.props.date&&""!==this.props.date&&n.push("date=".concat(this.props.date)),void 0!==this.props.tag&&"undefined"!==this.props.tag&&""!==this.props.tag&&"-1"!==this.props.tag&&n.push("tag=".concat(this.props.tag)),fetch("".concat(M,"/api/expenditures?").concat(n.join("&"))).then((function(e){return e.json()})).then((function(e){t.setState({expenditures:e.map((function(e){return e.amount=e.amount/100,e}))})})).then((function(){t.props.onListChanged(),t.setState({isLoading:!1}),e&&e.detail.complete()})).catch(console.error)}},{key:"searchNext",value:function(e){var t=this;this.setState({expenditureLimit:this.state.expenditureLimit+20},(function(){t.doRefresh().finally((function(){e&&e.target.complete()}))}))}},{key:"onSaveExpenditure",value:function(e){this.doRefresh()}},{key:"render",value:function(){var e=this;return s.a.createElement(p.j,null,s.a.createElement(p.B,{isOpen:this.state.isLoading,message:"Laden..."}),s.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},s.a.createElement(p.G,null)),s.a.createElement(p.A,{style:{marginBottom:"3rem"}},this.state.expenditures.map((function(t){return s.a.createElement(p.x,{key:t.id.toString()},s.a.createElement(p.s,null,s.a.createElement(p.y,null,t.reason,s.a.createElement("p",null,t.username),s.a.createElement("p",null,new Date(Date.parse(t.created_date)).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric"}))),s.a.createElement(p.y,{color:"success",className:"ion-text-wrap",style:{textAlign:"right"}},s.a.createElement(p.K,{color:"success"},t.amount.toLocaleString(void 0,{style:"currency",currency:"EUR"})),s.a.createElement("p",null,t.tags.map((function(t){return s.a.createElement(p.d,{color:t.color,onClick:function(){return e.props.onTagClick(t)},key:t.id},s.a.createElement(v,{name:t.icon}))}))))),s.a.createElement(p.w,{side:"end"},s.a.createElement(p.v,{color:"primary",onClick:function(){document.querySelector("ion-item-sliding").closeOpened(),e.editExpenditure(t)}},"Bearbeiten"),s.a.createElement(p.v,{color:"danger",onClick:function(){e.deleteExpenditure(t)}},"L\xf6schen")))})),s.a.createElement(p.p,{threshold:"100px",disabled:!1,onIonInfinite:function(t){return e.searchNext(t)}},s.a.createElement(p.q,null))),this.props.allowEdit&&s.a.createElement(E,{show:this.state.showEditor,onDismiss:function(){e.setState({showEditor:!1})},onSave:function(t){return e.onSaveExpenditure(t)},userNames:this.props.userNames||[],onEdit:function(t){e.setState({newItem:t})},item:this.state.newItem}),this.props.allowAdd&&s.a.createElement(p.k,{vertical:"bottom",horizontal:"end",slot:"fixed"},s.a.createElement(p.l,{onClick:function(){return e.addExpenditure()}},s.a.createElement(v,{name:"add"}))))}}]),t}(s.a.Component),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={userName:P.loadCredentials().username,availableUserNames:Array(),balance:0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"doRefresh",value:function(e){var t=this;fetch("".concat(M,"/api/current-status")).then((function(e){return e.json()})).then((function(e){return t.setState({availableUserNames:e.map((function(e){return e[0]}))}),e})).then((function(e){var n=e.find((function(e){return e[0]===t.state.userName})),a=e.find((function(e){return e[0]!==t.state.userName})),s=n[1]-a[1];return t.setState({balance:s/100}),e})).catch(console.error)}},{key:"render",value:function(){var e=this;return s.a.createElement(p.D,null,s.a.createElement(p.m,null,s.a.createElement(p.N,null,s.a.createElement(p.L,{slot:"start",style:{marginLeft:"1rem"}},s.a.createElement(p.o,{src:"/assets/icon/android-chrome-192x192.png"})),s.a.createElement(p.M,null,"Letzte Ausgaben"))),s.a.createElement(O,{onListChanged:function(){return e.doRefresh()},onTagClick:function(t){return e.props.history.push("/tags/".concat(t.id))},userNames:this.state.availableUserNames,allowEdit:!0,allowAdd:!0}),s.a.createElement(p.f,{routerLink:"/summary/",style:{bottom:"0",position:"absolute",width:"calc(100% - 4em)",margin:"2em"},routerDirection:"forward",slot:"fixed",color:this.state.balance<0?"warning":"success"},s.a.createElement(p.g,null,s.a.createElement(p.h,null,"Aktueller Stand"),s.a.createElement(p.i,null,this.state.balance.toLocaleString(void 0,{style:"currency",currency:"EUR"})))))}}]),t}(s.a.Component),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:""},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"handleChangeUsername",value:function(e){this.setState({username:e.detail.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.detail.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(this.state.username,this.state.password)}},{key:"render",value:function(){var e=this;return s.a.createElement(p.C,{isOpen:!0},s.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},s.a.createElement(p.m,{translucent:!0},s.a.createElement(p.N,null,s.a.createElement(p.M,null,"Nutzer eintragen"),s.a.createElement(p.e,{slot:"end"},s.a.createElement(p.d,{color:"primary",type:"submit"},"Speichern")))),s.a.createElement(p.j,{fullscreen:!0},s.a.createElement(p.s,null,s.a.createElement(p.y,null,"Nutzer"),s.a.createElement(p.r,{required:!0,onIonChange:function(t){return e.handleChangeUsername(t)}})),s.a.createElement(p.s,null,s.a.createElement(p.y,null,"Passwort"),s.a.createElement(p.r,{required:!0,onIonChange:function(t){return e.handleChangePassword(t)},type:"password"})))))}}]),t}(s.a.Component),D=n(49),_=n(50),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={max_month:0,max_year:0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"componentDidUpdate",value:function(e){this.props.summary!==e.summary&&this.doRefresh()}},{key:"doRefresh",value:function(){var e=Math.max.apply(Math,Object(_.a)(this.props.summary.by_month.map((function(e){return e[1]})))),t=Math.max.apply(Math,Object(_.a)(this.props.summary.by_year.map((function(e){return e[1]}))));this.setState({max_month:e,max_year:t})}},{key:"getExpenditureLink",value:function(e){var t=["date=".concat(e)];return this.props.summary.id>=0&&t.push("tag=".concat(this.props.summary.id)),"/expenditures/?".concat(t.join("&"))}},{key:"render",value:function(){var e=this;return s.a.createElement(p.A,null,s.a.createElement(p.u,null,s.a.createElement(p.t,null,s.a.createElement(p.y,null,"Nach Monat")),this.props.summary.by_month.map((function(t){var n=Object(D.a)(t,2),a=n[0],r=n[1];return s.a.createElement(p.s,{routerLink:e.getExpenditureLink(a),routerDirection:"forward",key:"date-".concat(a)},s.a.createElement(p.y,{position:"fixed"},new Date(Date.parse(a)).toLocaleString(void 0,{month:"long"}),s.a.createElement("p",null,new Date(Date.parse(a)).toLocaleString(void 0,{year:"numeric"}))),s.a.createElement(p.y,null,s.a.createElement(p.E,{value:r/e.state.max_month})),s.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(r/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))}))),s.a.createElement(p.u,null,s.a.createElement(p.t,null,s.a.createElement(p.y,null,"Nach Jahr")),this.props.summary.by_year.map((function(t){var n=Object(D.a)(t,2),a=n[0],r=n[1];return s.a.createElement(p.s,{routerLink:e.getExpenditureLink(a),routerDirection:"forward",key:"date-".concat(a)},s.a.createElement(p.y,null,new Date(Date.parse(a)).toLocaleString(void 0,{year:"numeric"})),s.a.createElement(p.y,null,s.a.createElement(p.E,{value:r/e.state.max_year})),s.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(r/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))}))))}}]),t}(s.a.Component),L=C,R=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={tag:new y,isLoading:!0,tagId:""},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({tagId:this.props.match.params.id},(function(){e.doRefresh()}))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.match.params.id!==e.match.params.id&&this.setState({tagId:this.props.match.params.id},(function(){t.doRefresh()}))}},{key:"doRefresh",value:function(e){var t=this;""!==this.state.tagId&&(this.setState({isLoading:!0}),fetch("".concat(M,"/api/tags/").concat(this.state.tagId)).then((function(e){return e.json()})).then((function(e){t.setState({tag:e})})).catch(console.error).finally((function(){t.setState({isLoading:!1})})))}},{key:"render",value:function(){var e=this;return s.a.createElement(p.D,null,s.a.createElement(p.m,null,s.a.createElement(p.N,null,s.a.createElement(p.e,{slot:"start"},s.a.createElement(p.c,null)),s.a.createElement(p.M,null,s.a.createElement(p.y,null,"Ausgaben f\xfcr: ",this.state.tag.name)))),s.a.createElement(p.j,{fullscreen:!0,className:"ion-padding"},s.a.createElement(p.B,{isOpen:this.state.isLoading,message:"Laden..."}),s.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},s.a.createElement(p.G,null)),s.a.createElement(p.f,{color:this.state.tag.color},s.a.createElement(p.g,{class:"ion-text-center"},s.a.createElement(v,{style:{fontSize:"4rem"},name:this.state.tag.icon}),s.a.createElement(p.i,null,this.state.tag.name),s.a.createElement(p.h,null,"Ausgaben gesamt"),s.a.createElement(p.i,null,(this.state.tag.total/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))),s.a.createElement(L,{summary:this.state.tag})))}}]),t}(s.a.Component),A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={tags:Array(),summary:new f,isLoading:!0},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"doRefresh",value:function(e){var t=this;this.setState({isLoading:!0}),Promise.all([fetch("".concat(M,"/api/tags/summary")).then((function(e){return e.json()})).then((function(e){t.setState({tags:e})})).catch(console.error),fetch("".concat(M,"/api/expenditures/summary")).then((function(e){return e.json()})).then((function(e){t.setState({summary:e})})).catch(console.error)]).finally((function(){t.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(p.D,null,s.a.createElement(p.m,null,s.a.createElement(p.N,null,s.a.createElement(p.e,{slot:"start"},s.a.createElement(p.c,null)),s.a.createElement(p.M,null,"Ausgaben \xdcbersicht"))),s.a.createElement(p.j,{fullscreen:!0,className:"ion-padding"},s.a.createElement(p.B,{isOpen:this.state.isLoading,message:"Laden..."}),s.a.createElement(p.F,{slot:"fixed",onIonRefresh:function(t){return e.doRefresh(t)}},s.a.createElement(p.G,null)),s.a.createElement(p.A,{style:{marginBottom:0}},s.a.createElement(p.u,null,s.a.createElement(p.t,null,s.a.createElement(p.y,null,"Nach Tag")),this.state.tags.map((function(e){return s.a.createElement(p.s,{routerLink:"/tags/"+e.id,routerDirection:"forward",key:e.id},s.a.createElement(v,{color:e.color,name:e.icon}),s.a.createElement(p.y,{position:"fixed"},e.name),s.a.createElement(p.y,{slot:"end",color:"success",position:"fixed"},(e.sum/100).toLocaleString(void 0,{style:"currency",currency:"EUR"})))})))),s.a.createElement(C,{summary:this.state.summary})))}}]),t}(s.a.Component),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={tag:new y,date:"",tagId:"",year:-1,month:-1,queryParams:new Map},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.doRefresh()}},{key:"componentDidUpdate",value:function(e){this.props.location.search!==e.location.search&&this.doRefresh()}},{key:"doRefresh",value:function(){var e,t=this,n=this.props.location.search.split(/\?|&/g).reduce((function(e,t){var n=t.split("=");return 2===n.length?e.set(n[0],n[1]):1===n.length&&""!==n[0]&&e.set(n[0],""),e}),new Map),a="";if(n.get("date")){var s=n.get("date").split("/");s.length>1?(e=s[0],a=s[1]):1===s.length&&(a=s[0])}this.setState({year:a,month:e,tagId:n.get("tag"),date:n.get("date")},(function(){void 0!==t.state.tagId?fetch("".concat(M,"/api/tags/").concat(t.state.tagId)).then((function(e){return e.json()})).then((function(e){t.setState({tag:e})})).catch(console.error):t.setState({tag:new y})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(p.D,null,s.a.createElement(p.m,null,s.a.createElement(p.N,null,s.a.createElement(p.e,{slot:"start"},s.a.createElement(p.c,null)),s.a.createElement(p.M,null,s.a.createElement(p.y,null,"Ausgaben \xdcbersicht")))),s.a.createElement(p.j,{fullscreen:!0},s.a.createElement(p.f,{style:{position:"sticky"},color:this.state.tag.color||"dark"},s.a.createElement(p.g,{class:"ion-text-center"},s.a.createElement(v,{style:{fontSize:"4rem"},name:this.state.tag.icon}),s.a.createElement(p.h,null,"Ausgaben ",this.state.date&&this.state.date.split("-").length>1?"im ".concat(new Date(Date.parse(this.state.date)).toLocaleString(void 0,{year:"numeric",month:"long"})):"in ".concat(new Date(Date.parse(this.state.date)).toLocaleString(void 0,{year:"numeric"}))," ",this.state.tag.id>=0&&"f\xfcr"),this.state.tag.id>=0&&s.a.createElement(p.i,null,this.state.tag.name),s.a.createElement(p.i,null))),s.a.createElement(O,{onListChanged:function(){return e.doRefresh()},onTagClick:function(t){return e.props.history.push("/tags/".concat(t.id))},allowAdd:!1,allowEdit:!0,date:this.state.date,tag:this.state.tagId})))}}]),t}(s.a.Component);n(1141),n(1142),n(1143),n(1144),n(1145),n(1146),n(1147),n(1148),n(1149),n(1150),n(1151);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M="",P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={credentials:t.loadCredentials()},n}return Object(j.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.fetch;window.fetch=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a=I({},a,{headers:I({},a.headers,{Authorization:"Basic ".concat(window.btoa("".concat(e.state.credentials.username,":").concat(e.state.credentials.password)))})}),t(n,a).then((function(t){return t.ok||401!==t.status||e.setState({credentials:{}}),t}))}}},{key:"saveSessionCredentials",value:function(e,n){t.persistCredentials(e,n),this.setState({credentials:{username:e,password:n}})}},{key:"render",value:function(){var e=this;return this.state.credentials.username&&this.state.credentials.password?s.a.createElement(p.b,null,s.a.createElement(h.a,null,s.a.createElement(p.H,null,s.a.createElement(d.c,{path:"/home",component:x,exact:!0}),s.a.createElement(d.c,{path:"/tags/:id/",component:R}),s.a.createElement(d.c,{path:"/summary/",component:A}),s.a.createElement(d.c,{path:"/expenditures/",component:N}),s.a.createElement(d.c,{path:"/",render:function(){return s.a.createElement(d.b,{to:"/home"})}})))):s.a.createElement(p.b,null,s.a.createElement(p.D,null,s.a.createElement(S,{onSave:function(t,n){return e.saveSessionCredentials(t,n)}})))}}],[{key:"persistCredentials",value:function(e,t){var n=new Date;n.setTime(n.getTime()+615168e5),document.cookie="username=".concat(e,"; expires=").concat(n.toUTCString()),document.cookie="password=".concat(t,"; expires=").concat(n.toUTCString())}},{key:"loadCredentials",value:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)password\s*=\s*([^;]*).*$)|^.*$/,"$1");return this.persistCredentials(e,t),{username:e,password:t}}}]),t}(s.a.Component);o.a.render(s.a.createElement(P,null),document.getElementById("root"))},70:function(e,t,n){e.exports=n(1152)},76:function(e,t,n){var a={"./ion-action-sheet-controller_8.entry.js":[1157,43],"./ion-action-sheet-ios.entry.js":[1158,44],"./ion-action-sheet-md.entry.js":[1159,45],"./ion-alert-ios.entry.js":[1160,24],"./ion-alert-md.entry.js":[1161,25],"./ion-app_8-ios.entry.js":[1162,11],"./ion-app_8-md.entry.js":[1163,12],"./ion-avatar_3-ios.entry.js":[1164,46],"./ion-avatar_3-md.entry.js":[1165,47],"./ion-back-button-ios.entry.js":[1166,48],"./ion-back-button-md.entry.js":[1167,49],"./ion-backdrop-ios.entry.js":[1168,81],"./ion-backdrop-md.entry.js":[1169,82],"./ion-button_2-ios.entry.js":[1170,50],"./ion-button_2-md.entry.js":[1171,51],"./ion-card_5-ios.entry.js":[1172,52],"./ion-card_5-md.entry.js":[1173,53],"./ion-checkbox-ios.entry.js":[1174,54],"./ion-checkbox-md.entry.js":[1175,55],"./ion-chip-ios.entry.js":[1176,56],"./ion-chip-md.entry.js":[1177,57],"./ion-col_3.entry.js":[1178,83],"./ion-datetime_3-ios.entry.js":[1179,20],"./ion-datetime_3-md.entry.js":[1180,21],"./ion-fab_3-ios.entry.js":[1181,58],"./ion-fab_3-md.entry.js":[1182,59],"./ion-img.entry.js":[1183,84],"./ion-infinite-scroll_2-ios.entry.js":[1184,39],"./ion-infinite-scroll_2-md.entry.js":[1185,40],"./ion-input-ios.entry.js":[1186,60],"./ion-input-md.entry.js":[1187,61],"./ion-item-option_3-ios.entry.js":[1188,62],"./ion-item-option_3-md.entry.js":[1189,63],"./ion-item_8-ios.entry.js":[1190,64],"./ion-item_8-md.entry.js":[1191,65],"./ion-loading-ios.entry.js":[1192,26],"./ion-loading-md.entry.js":[1193,27],"./ion-menu_4-ios.entry.js":[1194,18],"./ion-menu_4-md.entry.js":[1195,19],"./ion-modal-ios.entry.js":[1196,14],"./ion-modal-md.entry.js":[1197,15],"./ion-nav_5.entry.js":[1198,13],"./ion-popover-ios.entry.js":[1199,16],"./ion-popover-md.entry.js":[1200,17],"./ion-progress-bar-ios.entry.js":[1201,66],"./ion-progress-bar-md.entry.js":[1202,67],"./ion-radio_2-ios.entry.js":[1203,32],"./ion-radio_2-md.entry.js":[1204,33],"./ion-range-ios.entry.js":[1205,68],"./ion-range-md.entry.js":[1206,69],"./ion-refresher_2-ios.entry.js":[1207,41],"./ion-refresher_2-md.entry.js":[1208,42],"./ion-reorder_2-ios.entry.js":[1209,37],"./ion-reorder_2-md.entry.js":[1210,38],"./ion-ripple-effect.entry.js":[1211,85],"./ion-route_4.entry.js":[1212,70],"./ion-searchbar-ios.entry.js":[1213,28],"./ion-searchbar-md.entry.js":[1214,29],"./ion-segment_2-ios.entry.js":[1215,71],"./ion-segment_2-md.entry.js":[1216,72],"./ion-select_3-ios.entry.js":[1217,34],"./ion-select_3-md.entry.js":[1218,35],"./ion-slide_2-ios.entry.js":[1219,86],"./ion-slide_2-md.entry.js":[1220,87],"./ion-spinner.entry.js":[1221,73],"./ion-split-pane-ios.entry.js":[1222,88],"./ion-split-pane-md.entry.js":[1223,89],"./ion-tab-bar_2-ios.entry.js":[1224,74],"./ion-tab-bar_2-md.entry.js":[1225,75],"./ion-tab_2.entry.js":[1226,36],"./ion-text.entry.js":[1227,76],"./ion-textarea-ios.entry.js":[1228,77],"./ion-textarea-md.entry.js":[1229,78],"./ion-toast-ios.entry.js":[1230,30],"./ion-toast-md.entry.js":[1231,31],"./ion-toggle-ios.entry.js":[1232,22],"./ion-toggle-md.entry.js":[1233,23],"./ion-virtual-scroll.entry.js":[1234,90]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id=76,e.exports=s},78:function(e,t,n){var a={"./ion-icon.entry.js":[1238,98]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id=78,e.exports=s},83:function(e,t,n){var a={"./add-circle-outline.js":84,"./add-circle.js":87,"./add.js":90,"./airplane.js":93,"./alarm.js":96,"./albums.js":99,"./alert.js":102,"./american-football.js":105,"./analytics.js":108,"./aperture.js":111,"./apps.js":114,"./appstore.js":117,"./archive.js":120,"./arrow-back.js":123,"./arrow-down.js":124,"./arrow-dropdown-circle.js":125,"./arrow-dropdown.js":128,"./arrow-dropleft-circle.js":131,"./arrow-dropleft.js":134,"./arrow-dropright-circle.js":137,"./arrow-dropright.js":140,"./arrow-dropup-circle.js":143,"./arrow-dropup.js":146,"./arrow-forward.js":149,"./arrow-round-back.js":150,"./arrow-round-down.js":153,"./arrow-round-forward.js":156,"./arrow-round-up.js":159,"./arrow-up.js":162,"./at.js":165,"./attach.js":168,"./backspace.js":171,"./barcode.js":174,"./baseball.js":177,"./basket.js":180,"./basketball.js":183,"./battery-charging.js":186,"./battery-dead.js":189,"./battery-full.js":192,"./beaker.js":195,"./bed.js":198,"./beer.js":201,"./bicycle.js":204,"./bluetooth.js":207,"./boat.js":210,"./body.js":213,"./bonfire.js":216,"./book.js":219,"./bookmark.js":222,"./bookmarks.js":225,"./bowtie.js":228,"./briefcase.js":231,"./browsers.js":234,"./brush.js":237,"./bug.js":240,"./build.js":243,"./bulb.js":246,"./bus.js":249,"./business.js":252,"./cafe.js":255,"./calculator.js":258,"./calendar.js":261,"./call.js":264,"./camera.js":267,"./car.js":270,"./card.js":273,"./cart.js":276,"./cash.js":279,"./cellular.js":282,"./chatboxes.js":285,"./chatbubbles.js":288,"./checkbox-outline.js":291,"./checkbox.js":294,"./checkmark-circle-outline.js":297,"./checkmark-circle.js":300,"./checkmark.js":303,"./clipboard.js":306,"./clock.js":309,"./close-circle-outline.js":312,"./close-circle.js":315,"./close.js":316,"./cloud-circle.js":317,"./cloud-done.js":320,"./cloud-download.js":323,"./cloud-outline.js":326,"./cloud-upload.js":329,"./cloud.js":332,"./cloudy-night.js":335,"./cloudy.js":338,"./code-download.js":341,"./code-working.js":344,"./code.js":347,"./cog.js":350,"./color-fill.js":353,"./color-filter.js":356,"./color-palette.js":359,"./color-wand.js":362,"./compass.js":365,"./construct.js":368,"./contact.js":371,"./contacts.js":374,"./contract.js":377,"./contrast.js":380,"./copy.js":383,"./create.js":386,"./crop.js":389,"./cube.js":392,"./cut.js":395,"./desktop.js":398,"./disc.js":401,"./document.js":404,"./done-all.js":407,"./download.js":410,"./easel.js":413,"./egg.js":416,"./exit.js":419,"./expand.js":422,"./eye-off.js":425,"./eye.js":428,"./fastforward.js":431,"./female.js":434,"./filing.js":437,"./film.js":440,"./finger-print.js":443,"./fitness.js":446,"./flag.js":449,"./flame.js":452,"./flash-off.js":455,"./flash.js":458,"./flashlight.js":461,"./flask.js":464,"./flower.js":467,"./folder-open.js":470,"./folder.js":473,"./football.js":476,"./funnel.js":479,"./gift.js":482,"./git-branch.js":485,"./git-commit.js":488,"./git-compare.js":491,"./git-merge.js":494,"./git-network.js":497,"./git-pull-request.js":500,"./glasses.js":503,"./globe.js":506,"./grid.js":509,"./hammer.js":512,"./hand.js":515,"./happy.js":518,"./headset.js":521,"./heart-dislike.js":524,"./heart-empty.js":527,"./heart-half.js":530,"./heart.js":533,"./help-buoy.js":536,"./help-circle-outline.js":539,"./help-circle.js":542,"./help.js":545,"./home.js":546,"./hourglass.js":549,"./ice-cream.js":552,"./image.js":555,"./images.js":558,"./infinite.js":561,"./information-circle-outline.js":564,"./information-circle.js":567,"./information.js":570,"./jet.js":573,"./journal.js":576,"./key.js":579,"./keypad.js":582,"./laptop.js":585,"./leaf.js":588,"./link.js":591,"./list-box.js":594,"./list.js":597,"./locate.js":600,"./lock.js":603,"./log-in.js":606,"./log-out.js":609,"./logo-android.js":612,"./logo-angular.js":614,"./logo-apple.js":616,"./logo-bitbucket.js":618,"./logo-bitcoin.js":620,"./logo-buffer.js":622,"./logo-chrome.js":624,"./logo-closed-captioning.js":626,"./logo-codepen.js":628,"./logo-css3.js":630,"./logo-designernews.js":632,"./logo-dribbble.js":634,"./logo-dropbox.js":636,"./logo-euro.js":638,"./logo-facebook.js":640,"./logo-flickr.js":642,"./logo-foursquare.js":644,"./logo-freebsd-devil.js":646,"./logo-game-controller-a.js":648,"./logo-game-controller-b.js":650,"./logo-github.js":652,"./logo-google.js":654,"./logo-googleplus.js":656,"./logo-hackernews.js":658,"./logo-html5.js":660,"./logo-instagram.js":662,"./logo-ionic.js":664,"./logo-ionitron.js":666,"./logo-javascript.js":668,"./logo-linkedin.js":670,"./logo-markdown.js":672,"./logo-model-s.js":674,"./logo-no-smoking.js":676,"./logo-nodejs.js":678,"./logo-npm.js":680,"./logo-octocat.js":682,"./logo-pinterest.js":684,"./logo-playstation.js":686,"./logo-polymer.js":688,"./logo-python.js":690,"./logo-reddit.js":692,"./logo-rss.js":694,"./logo-sass.js":696,"./logo-skype.js":698,"./logo-slack.js":700,"./logo-snapchat.js":702,"./logo-steam.js":704,"./logo-tumblr.js":706,"./logo-tux.js":708,"./logo-twitch.js":710,"./logo-twitter.js":712,"./logo-usd.js":714,"./logo-vimeo.js":716,"./logo-vk.js":718,"./logo-whatsapp.js":720,"./logo-windows.js":722,"./logo-wordpress.js":724,"./logo-xbox.js":726,"./logo-xing.js":728,"./logo-yahoo.js":730,"./logo-yen.js":732,"./logo-youtube.js":734,"./magnet.js":736,"./mail-open.js":739,"./mail-unread.js":742,"./mail.js":745,"./male.js":748,"./man.js":751,"./map.js":754,"./medal.js":757,"./medical.js":760,"./medkit.js":763,"./megaphone.js":766,"./menu.js":769,"./mic-off.js":770,"./mic.js":773,"./microphone.js":776,"./moon.js":779,"./more.js":782,"./move.js":785,"./musical-note.js":788,"./musical-notes.js":791,"./navigate.js":794,"./notifications-off.js":797,"./notifications-outline.js":800,"./notifications.js":803,"./nuclear.js":806,"./nutrition.js":809,"./open.js":812,"./options.js":815,"./outlet.js":818,"./paper-plane.js":821,"./paper.js":824,"./partly-sunny.js":827,"./pause.js":830,"./paw.js":833,"./people.js":836,"./person-add.js":839,"./person.js":842,"./phone-landscape.js":845,"./phone-portrait.js":848,"./photos.js":851,"./pie.js":854,"./pin.js":857,"./pint.js":860,"./pizza.js":863,"./planet.js":866,"./play-circle.js":869,"./play.js":872,"./podium.js":875,"./power.js":878,"./pricetag.js":881,"./pricetags.js":884,"./print.js":887,"./pulse.js":890,"./qr-scanner.js":893,"./quote.js":896,"./radio-button-off.js":899,"./radio-button-on.js":902,"./radio.js":905,"./rainy.js":908,"./recording.js":911,"./redo.js":914,"./refresh-circle.js":917,"./refresh.js":920,"./remove-circle-outline.js":923,"./remove-circle.js":926,"./remove.js":929,"./reorder.js":932,"./repeat.js":933,"./resize.js":936,"./restaurant.js":939,"./return-left.js":942,"./return-right.js":945,"./reverse-camera.js":948,"./rewind.js":951,"./ribbon.js":954,"./rocket.js":957,"./rose.js":960,"./sad.js":963,"./save.js":966,"./school.js":969,"./search.js":972,"./send.js":973,"./settings.js":976,"./share-alt.js":979,"./share.js":982,"./shirt.js":985,"./shuffle.js":988,"./skip-backward.js":991,"./skip-forward.js":994,"./snow.js":997,"./speedometer.js":1e3,"./square-outline.js":1003,"./square.js":1006,"./star-half.js":1009,"./star-outline.js":1012,"./star.js":1015,"./stats.js":1018,"./stopwatch.js":1021,"./subway.js":1024,"./sunny.js":1027,"./swap.js":1030,"./switch.js":1033,"./sync.js":1036,"./tablet-landscape.js":1039,"./tablet-portrait.js":1042,"./tennisball.js":1045,"./text.js":1048,"./thermometer.js":1051,"./thumbs-down.js":1054,"./thumbs-up.js":1057,"./thunderstorm.js":1060,"./time.js":1063,"./timer.js":1066,"./today.js":1069,"./train.js":1072,"./transgender.js":1075,"./trash.js":1078,"./trending-down.js":1081,"./trending-up.js":1084,"./trophy.js":1087,"./tv.js":1090,"./umbrella.js":1093,"./undo.js":1096,"./unlock.js":1099,"./videocam.js":1102,"./volume-high.js":1105,"./volume-low.js":1108,"./volume-mute.js":1111,"./volume-off.js":1114,"./walk.js":1117,"./wallet.js":1120,"./warning.js":1123,"./watch.js":1126,"./water.js":1129,"./wifi.js":1132,"./wine.js":1135,"./woman.js":1138};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=83}},[[70,9,10]]]);
//# sourceMappingURL=main.b271f0db.chunk.js.map