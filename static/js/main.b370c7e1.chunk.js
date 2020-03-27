(this.webpackJsonpexpense=this.webpackJsonpexpense||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),o=a(10),s=a(11),i=a(13),m=a(14),u=a(74),d=(a(44),a(12)),p=a(8);function f(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-center"},r.a.createElement(d.b,{to:"/about"},r.a.createElement("i",{className:"fas fa-dollar-sign text-primary"})," My ",r.a.createElement("span",{className:"text-primary"},"Expenses"))))}var E=a(38),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",amount:""},e.onChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTransaction(e.state.name,e.state.amount),e.setState({name:"",amount:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"add-transaction_form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Transaction Name:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Expense detail ...",onChange:this.onChange,value:this.state.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Amount (+:income / -:expense)"),r.a.createElement("input",{type:"number",name:"amount",className:"form-control",placeholder:"0.00",onChange:this.onChange,value:this.state.amount})),r.a.createElement("input",{type:"submit",value:"Add Transaction",className:"btn btn-primary btn-block"})))}}]),a}(n.Component);function h(e){var t=e.transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0),a=t<0?"-":"+";return 0===t&&(a=""),r.a.createElement("div",{className:"container mt-5 text-center"},r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},a,"\u0e3f",Math.abs(t)))}function v(e){var t=e.transactions.map((function(e){return e.amount})),a=t.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*t.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return console.log(a+", "+n),r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"\u0e3f",a)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"\u0e3f",n)))}var g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.transaction,t=e.name,a=e.amount,n=e.date,c=new Date(n),l=c.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()]+" "+(c.getYear()+1900);return r.a.createElement("tr",{className:a<0?"minus":"plus"},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,a<0?"expense":"income"),r.a.createElement("td",null,l))}}]),a}(n.Component);function y(e){var t=e.transactions;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Transaction History")),r.a.createElement("table",{className:"table table-striped mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",{id:"transaction-list"},t.map((function(e){return r.a.createElement(g,{key:e.id,transaction:e})})))),r.a.createElement("button",{id:"clear-history",className:"btn btn-danger btn-block",onClick:e.clearTransactions},"Clear History"))}function N(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/80983094_1238062119732846_1001734360820350976_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=rHZBHjuunBEAX8_vOmp&_nc_ht=scontent.fbkk23-1.fna&oh=86a24cb8bd67b4533dba5948ac94e4ed&oe=5EA42691",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Developer information"),r.a.createElement("p",null,"Kansinee Lee (610610568)"),r.a.createElement("p",null,"This app use Google Firebase as backend."),r.a.createElement(d.b,{to:"/"},r.a.createElement("h3",null,r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Home")))))))}var O=a(18),j=a.n(O),w=(a(65),a(67),a(72),{apiKey:"AIzaSyCh7wUsl9CRSaNuu0n3jsUbEm50m3AGPe0",authDomain:"surting-480af.firebaseapp.com",databaseURL:"https://surting-480af.firebaseio.com",projectId:"surting-480af",storageBucket:"surting-480af.appspot.com",messagingSenderId:"171187431465",appId:"1:171187431465:web:23d697b82da53ae59a9438",measurementId:"G-MGHTDYFP54"});j.a.apps.length||j.a.initializeApp(w);var S=j.a,T=(a(70),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={transactions:[]},e.loadData=function(){S.firestore().collection("transaction").orderBy("date").onSnapshot((function(t){var a=[];t.forEach((function(e){a.push({id:e.id,name:e.data().name,amount:e.data().amount,date:e.data().date})})),e.setState({transactions:a.reverse()})}))},e.loadJsonData=function(){S.firestore().collection("data").onSnapshot((function(t){var a=[];t.forEach((function(e){a.push(e.data())})),e.setState({transactions:a})}))},e.validateForm=function(e,t){return e&&t?isNaN(e)?0===+t?(window.alert("Amount CANNOT be zero!"),!1):!!Number.isInteger(Number(t))||(window.alert("Amount CANNOT be float !"),!1):(window.alert("Please fill only TEXT detail in transaction name."),!1):(window.alert("Please fill in ALL data fields."),!1)},e.addTransaction=function(t,a){if(!e.validateForm(t,a))return!1;var n={id:Object(u.a)(),name:t,amount:+a,date:(new Date).toISOString()};S.firestore().collection("transaction").add(n),e.state.transactions.unshift(n),e.setState({transactions:e.state.transactions})},e.clearTransactions=function(t){window.confirm("You are going to clear all transaction history!!!")&&(S.firestore().collection("transaction").onSnapshot((function(e){e.forEach((function(e){S.firestore().collection("transaction").doc(e.id).delete()}))})),e.setState({transactions:[]}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container mt-4 mb-5"},r.a.createElement(f,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",null,r.a.createElement(b,{addTransaction:e.addTransaction}),r.a.createElement(h,{transactions:e.state.transactions}),r.a.createElement(v,{transactions:e.state.transactions}),r.a.createElement(y,{transactions:e.state.transactions,clearTransactions:e.clearTransactions}))}}),r.a.createElement(p.a,{path:"/about",component:N})))}}]),a}(n.Component));l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b370c7e1.chunk.js.map