(()=>{"use strict";var e={8978:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var r,a=n(885),o=(n(7026),n(3292)),i=n(9526),l=n(1553),s=n(4333),u=n(1133),c=n(196),d=n(9233),f=s.default.create({amountSummary:{height:100,alignItems:"center",justifyContent:"center"},white:{color:"#fff"},roundTabButton:{backgroundColor:"#607d8b",borderRadius:40,elevation:6,paddingVertical:10,paddingHorizontal:20,marginRight:5,marginLeft:5},roundTabButtonSelected:{backgroundColor:"#e91e63"},roundTabButtonText:{},button:{alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:32,elevation:6,backgroundColor:"#FFD700"},vCenterContent:{marginTop:"auto",marginBottom:50},actionText:{color:"#303030",fontSize:20,textAlign:"center"},content:{backgroundColor:"#303030",flex:1},bgDark:{backgroundColor:"#303030"}}),g=n(5640),h=n(3455);!function(e){var t=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],n=(e.GetNumberOfDaysInCurrentMonth=function(e){console.log("GetNumberOfDaysInCurrentMonth"),console.log(e);var t=new Date(e.getFullYear(),e.getMonth()+1,0).getDate();return console.log(t),t},e.GetMonthAsString=function(e){return e?t[e.getMonth()]:""},e.AsString=function(e){if(!e)return"";var t=e.getFullYear(),n=e.getDate(),r=e.getMonth()+1,a="";return n<10&&(a="0"),a+=String(n)+"/",r<10&&(a+="0"),a+=String(r)+"/"+t},e.AsDatabaseString=function(e){if(!e)return"";var t=e.getFullYear(),n=e.getDate(),r=e.getMonth()+1,a=t+"-";return r<10&&(a+="0"),a+=String(r)+"-",n<10&&(a+="0"),a+=String(n)});e.GetFirstDayOfMonth=function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1);return n(t)},e.GetLastDayOfMonth=function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0);return n(t)},e.GetMonthKey=function(e){var t=Number(e.getMonth()+1).toString().padStart(2,"0");return e.getFullYear()+"_"+t},e.GetKeyDisplay=function(e){var n=e.split("_"),r=Number(n[1]),a=n[0];return t[r-1]+" "+a}}(r||(r={}));var y=n(83),m=n(1416),x=n(7557);function v(e){e.navigation;var t=new Date,n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate()-t.getDate()+1,a=(0,y.useSelector)((function(e){return e.transactions.availableMonthlyAmount})),o=(0,y.useSelector)((function(e){return e.transactions.availableDailyAmount})),l=(0,y.useSelector)((function(e){return e.transactions.realAvailableAmountPerDay})).at(t.getDate()-1),s=Number((l/n).toFixed(2)),c=(0,y.useSelector)((function(e){return e.transactions.currentMonthDailyTransactions})).reduce((function(e,t){return e+t.amount}),0)/t.getDate()*-1,f=(0,i.createRef)(),g=l/a*100;(0,i.useEffect)((function(){if(console.log("Use effect"),0!==a){var e,t=l/a*100;null==f||null==(e=f.current)||e.animate(t,400,h.default.ease)}}),[l,a]);var v=function(e){return e<1e5?e.toFixed(2):(e/1e3).toFixed()+"k"};return(0,x.jsxs)(u.default,{style:b.amountSummary,children:[(0,x.jsx)(d.default,{style:[b.white,{fontWeight:"bold",fontSize:20,textAlign:"center"}],children:r.GetMonthAsString(t)}),(0,x.jsxs)(u.default,{style:{flexDirection:"row",paddingBottom:5,marginTop:5},children:[(0,x.jsx)(u.default,{style:{flex:1}}),(0,x.jsx)(u.default,{style:{},children:(0,x.jsx)(m.AnimatedCircularProgress,{size:160,width:15,ref:f,fill:0,rotation:-100,arcSweepAngle:200,lineCap:"round",tintColor:g>=70?"#1ee9a4":g>=30?"#e9a41e":"#e91e63",backgroundColor:"#3d5875",children:function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d.default,{style:[b.white,{fontWeight:"bold",fontSize:18}],children:[v(l)," \u20ac"]}),(0,x.jsxs)(d.default,{style:[b.white,{fontSize:14}],children:[v(s)," \u20ac / jour "]}),(0,x.jsx)(d.default,{style:[b.white,{fontSize:12}],children:"D\xe9pens\xe9"}),(0,x.jsxs)(d.default,{style:[b.white,{fontSize:10,paddingBottom:15}],children:[null==c?void 0:c.toFixed(2)," \u20ac / jour "]})]})}})}),(0,x.jsx)(u.default,{style:{flex:1},children:(0,x.jsxs)(u.default,{style:{flex:1,marginLeft:"auto",marginRight:10},children:[(0,x.jsx)(d.default,{style:[b.white,{fontSize:12}],children:"Th\xe9orique"}),(0,x.jsxs)(d.default,{style:[b.white,{fontSize:13}],children:[null==a?void 0:a.toFixed(2)," \u20ac"]}),(0,x.jsxs)(d.default,{style:[b.white,{fontSize:12}],children:[null==o?void 0:o.toFixed(2)," \u20ac / jour"]})]})})]})]})}var b=s.default.create({amountSummary:{marginBottom:-50},white:{color:"#fff"}}),j=n(6337),p=n(5935);function D(){var e=(0,y.useSelector)((function(e){return e.transactions.theoriticalAvailableAmountPerDay})),t=(0,y.useSelector)((function(e){return e.transactions.realAvailableAmountPerDay})),n=new Date,r=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),a=function(){for(var e=[],t=0;t<r;++t)e.push((t+1).toString());return e}(),o=function(){var e=[1,2,3,5,6,7,8,10,11,12,13,15,16,17,18,20,21,22,23,25,26,27];return r>=30&&e.push(28),r>=31&&e.push(29),e}(),i=1===t.length;return(0,x.jsx)(u.default,{style:{alignSelf:"center"},children:e.length>0&&t.length>0&&a.length>0&&o.length>0&&(0,x.jsx)(p.LineChart,{data:{labels:a,datasets:[{data:e,withDots:!1,color:function(){return"rgba(255, 0, 0, "+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+")"}},{data:t,withDots:i},{data:a.map((function(e){return 0})),strokeWidth:1,withDots:!1,color:function(){return"rgba(255, 0, 0, 1)"}}]},width:Math.min(j.default.get("window").width-20,580),yLabelsOffset:5,height:220,yAxisSuffix:"\u20ac",hidePointsAtIndex:o,yAxisInterval:5,chartConfig:{backgroundGradientFrom:"#fff",backgroundGradientTo:"#fff",decimalPlaces:0,fillShadowGradientFrom:"#fff",fillShadowGradientTo:"#fff",color:function(){return"rgba(100, 100, 255, 1)"},labelColor:function(){return"rgba(0, 0, 0, 1)"},propsForBackgroundLines:{strokeOpacity:.3},useShadowColorFromDataset:!0,propsForDots:{r:"1",strokeWidth:"5",stroke:"blue"}},style:{borderRadius:8}})})}var S=n(9566),w=n(477),T=n(4637),A=n(2727);function P(e){var t=e.item,n=(0,A.useNavigation)();return(0,x.jsx)(u.default,{children:(0,x.jsx)(T.default,{onPress:function(){return function(){var e=t.amount<=0;n.navigate("EditTransactionItemPage",{item:t,isExpense:e,recurring:!1})}()},style:O.container,children:(0,x.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center"},children:[(0,x.jsxs)(u.default,{style:{flexDirection:"column"},children:[(0,x.jsx)(d.default,{style:{color:"#525174",fontSize:15},children:t.label}),(0,x.jsxs)(d.default,{style:{fontSize:10},children:[r.AsString(new Date(t.date))," "]})]}),(0,x.jsxs)(d.default,{style:[{marginLeft:"auto",fontWeight:"bold"},t.amount>0?{color:"#06d6a0"}:{color:"#ef476f"}],children:[t.amount.toFixed(2)," \u20ac"]})]})})})}var O=s.default.create({container:{backgroundColor:"#fff",borderColor:"#525174",borderWidth:1,padding:8}}),M=n(3915);function C(){var e=(0,A.useNavigation)(),t=(0,y.useSelector)((function(e){return e.transactions.currentMonthDailyTransactions}));return(0,x.jsx)(u.default,{style:f.content,children:(0,x.jsxs)(w.default,{style:[f.content,{marginTop:5}],children:[(0,x.jsxs)(T.default,{style:{flexDirection:"row",alignSelf:"flex-end",marginRight:10},onPress:function(){e.navigate("StatisticsPage")},children:[(0,x.jsx)(d.default,{style:{color:"#fff",marginRight:5,fontSize:10,alignSelf:"baseline"},children:"Voir statistiques"}),(0,x.jsx)(M.default,{name:"md-stats-chart",size:15,color:"#fff",style:{zIndex:3,height:15,marginBottom:5,alignSelf:"baseline"}})]}),(0,x.jsx)(S.default,{data:t.sort((function(e,t){return e.date&&t.date?new Date(e.date)<new Date(t.date)?1:new Date(e.date)>new Date(t.date)?-1:0:0})),renderItem:function(e){var t=e.item;return(0,x.jsx)(P,{item:t})}})]})})}function R(e){var t=e.recurring,n=e.navigation;return(0,x.jsxs)(u.default,{style:{flexDirection:"row",margin:5,alignItems:"center"},children:[(0,x.jsx)(u.default,{style:{flex:1},children:t?(0,x.jsx)(M.default,{name:"md-arrow-back",size:32,color:"#fff",onPress:function(){n.navigate("HomePage")}}):(0,x.jsxs)(T.default,{style:{flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"auto"},onPress:function(){},children:[(0,x.jsx)(M.default,{name:"md-settings",size:15,color:"#303030",style:{zIndex:4,height:15,marginBottom:5}}),(0,x.jsx)(d.default,{style:{color:"#303030",marginRight:5,fontSize:10,alignSelf:"baseline"},children:"Configuration"})]})}),(0,x.jsxs)(u.default,{style:{flexDirection:"row",marginLeft:"auto",marginRight:"auto",marginBottom:-20},children:[(0,x.jsx)(M.default,{name:"md-add-circle",size:70,style:{zIndex:3,bottom:25},color:"#1ee9a4",onPress:function(){n.navigate("EditTransactionItemPage",{item:null,isExpense:!1,recurring:t})}}),(0,x.jsx)(M.default,{name:"md-remove-circle",size:70,color:"#e91e63",style:{zIndex:3,bottom:25},onPress:function(){n.navigate("EditTransactionItemPage",{item:null,isExpense:!0,recurring:t})}})]}),(0,x.jsx)(u.default,{style:{flex:1},children:!t&&(0,x.jsxs)(T.default,{style:{marginLeft:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center",alignContent:"center"},onPress:function(){n.navigate("RecurringConfigurationPage")},children:[(0,x.jsx)(M.default,{name:"md-sync-circle-outline",size:15,color:"#fff",style:{zIndex:3,height:15,marginBottom:5}}),(0,x.jsx)(d.default,{style:{color:"#fff",marginRight:5,fontSize:10},children:"Transactions"}),(0,x.jsx)(d.default,{style:{color:"#fff",marginRight:5,fontSize:10},children:"r\xe9currentes"})]})})]})}function E(e){var t=e.navigation;return(0,x.jsxs)(u.default,{style:{flex:1,justifyContent:"space-between"},children:[(0,x.jsxs)(u.default,{children:[(0,x.jsx)(v,{navigation:t}),(0,x.jsx)(D,{})]}),(0,x.jsx)(C,{}),(0,x.jsx)(R,{navigation:t,recurring:!1})]})}var F="RESET_STORE",N="SET_TODAY",z=n(1459),I="INSERT_SAVING",_=function(e){var t=e.navigation,n=(0,y.useDispatch)(),o=(0,y.useSelector)((function(e){return e.transactions.recurringTransactions})),s=(0,y.useSelector)((function(e){return e.transactions.allTransactionPerMonth})),h=(0,y.useSelector)((function(e){return e.savings})),m=(0,i.useState)(!1),v=(0,a.default)(m,2),b=v[0],j=v[1],p=(0,i.useState)(0),D=(0,a.default)(p,2),S=D[0],w=D[1],T=(0,i.useState)(new Date),A=(0,a.default)(T,2),P=A[0],O=A[1];return(0,i.useEffect)((function(){0===o.length&&t.navigate("RecurringConfigurationPage")}),[o]),(0,i.useEffect)((function(){n(function(e){return{type:N,today:e}}(new Date));var e=new Date;e.setDate(1),e.setMonth(e.getMonth()-1);var t=r.GetMonthKey(e);if(O(e),!h[t]&&s[t]&&s[t].recurringTransactions&&s[t].dailyTransactions){var a=function(e,t){return e.reduce((function(e,t){return e+t.amount}),0)+t.reduce((function(e,t){return e+t.amount}),0)}(s[t].recurringTransactions,s[t].dailyTransactions);w(a),j(!0)}}),[]),(0,x.jsx)(g.SafeAreaView,{style:[f.content],children:(0,x.jsxs)(u.default,{style:{flex:1},children:[(0,x.jsx)(E,{navigation:t}),(0,x.jsx)(c.default,{animationType:"slide",transparent:!0,visible:b,onRequestClose:function(){j(!b)},children:(0,x.jsx)(u.default,{style:k.centeredView,children:(0,x.jsxs)(u.default,{style:k.modalView,children:[S>=0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.default,{style:k.modalHeader,children:"F\xe9lcitation !"}),(0,x.jsxs)(d.default,{style:k.modalText,children:[" En ",r.GetMonthAsString(P),", vous avez pu mettre de cot\xe9 ",S.toFixed(2)," \u20ac "]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.default,{style:k.modalHeader,children:"Attention !"}),(0,x.jsxs)(d.default,{style:k.modalText,children:["Pour le mois de ",r.GetMonthAsString(P),", vous \xeates en d\xe9ficit de ",S.toFixed(2)," \u20ac "]})]}),(0,x.jsx)(u.default,{style:{flexDirection:"row",justifyContent:"center"},children:(0,x.jsx)(l.default,{onPress:function(){var e,t;j(!1),n((e=P,t=S,{type:I,saving:{saving_id:z.randomUUID(),key:r.GetMonthKey(e),savingDate:e,amount:t}}))},title:"Fermer",color:"#2ec4b6"})})]})})})]})})},k=s.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:"#F194FF"},buttonClose:{backgroundColor:"#2196F3"},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"center"},modalHeader:{marginBottom:15,textAlign:"center",fontWeight:"bold",fontSize:20}}),G=n(5693),B=n(4931);function Y(e){var t=e.item,n=e.isExpense,a=(0,A.useNavigation)();return(0,x.jsx)(u.default,{children:(0,x.jsx)(T.default,{onPress:function(){a.navigate("EditTransactionItemPage",{item:t,isExpense:n,recurring:!0})},style:V.container,children:(0,x.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center"},children:[(0,x.jsxs)(u.default,{style:{flexDirection:"column"},children:[(0,x.jsx)(d.default,{style:{color:"#525174",fontSize:15},children:t.label}),t.date&&(0,x.jsxs)(d.default,{style:{fontSize:10},children:["du ",r.AsString(new Date(t.date))," au ",r.AsString(new Date(t.endDate))," "]})]}),(0,x.jsxs)(d.default,{style:[{marginLeft:"auto",fontWeight:"bold"},t.amount>0?{color:"#06d6a0"}:{color:"#ef476f"}],children:[t.amount.toFixed(2)," \u20ac"]})]})})})}var V=s.default.create({container:{backgroundColor:"#fff",borderColor:"#525174",borderWidth:1,padding:8}});function L(e){var t=e.transactions,n=e.isExpense;return(0,x.jsx)(u.default,{style:f.content,children:(0,x.jsx)(w.default,{style:[f.content,{marginTop:5}],children:(0,x.jsx)(S.default,{data:t,renderItem:function(e){var t=e.item;return(0,x.jsx)(Y,{item:t,isExpense:n})}})})})}function W(e){var t=e.navigation,n=(0,i.useState)(1),r=(0,a.default)(n,2),o=r[0],l=r[1],s=(0,y.useSelector)((function(e){return e.transactions.recurringTransactions})),c=(0,y.useSelector)((function(e){return e.transactions.availableMonthlyAmount})),h=(0,y.useSelector)((function(e){return e.transactions.availableDailyAmount})),m=(0,i.useState)([]),v=(0,a.default)(m,2),b=v[0],j=v[1],p=(0,i.useState)([]),D=(0,a.default)(p,2),S=D[0],w=D[1];return(0,i.useEffect)((function(){var e=s.filter((function(e){return e.amount<0})),t=s.filter((function(e){return e.amount>0}));j(e),w(t)}),[s]),(0,i.useEffect)((function(){return t.addListener("beforeRemove",(function(e){s.length>0||e.preventDefault()}))}),[t,s]),(0,x.jsxs)(g.SafeAreaView,{style:[f.content],children:[(0,x.jsxs)(u.default,{style:[{justifyContent:"center",alignItems:"center"}],children:[(0,x.jsx)(d.default,{style:[f.white,{fontWeight:"bold",fontSize:13}],children:"Reste \xe0 vivre"}),(0,x.jsxs)(d.default,{style:[f.white,{fontWeight:"bold",fontSize:20}],children:[null==c?void 0:c.toFixed(2)," \u20ac"]}),(0,x.jsxs)(d.default,{style:[f.white,{fontSize:15}],children:[null==h?void 0:h.toFixed(2)," \u20ac / jour"]})]}),(0,x.jsxs)(u.default,{style:[{flexDirection:"row",justifyContent:"center",marginTop:10}],children:[(0,x.jsx)(T.default,{style:[f.roundTabButton,1==o?f.roundTabButtonSelected:null],onPress:function(){return l(1)},children:(0,x.jsx)(d.default,{style:f.roundTabButtonText,children:"Revenus r\xe9guliers"})}),(0,x.jsx)(T.default,{style:[f.roundTabButton,,2==o?f.roundTabButtonSelected:null],onPress:function(){return l(2)},children:(0,x.jsx)(d.default,{style:f.roundTabButtonText,children:"D\xe9penses r\xe9guli\xe8res"})})]}),1==o&&0!=S.length&&(0,x.jsx)(u.default,{style:[f.content,{marginTop:10}],children:(0,x.jsx)(L,{transactions:S,isExpense:!1})}),1!=o&&0!=b.length&&(0,x.jsx)(u.default,{style:[f.content,{marginTop:10}],children:(0,x.jsx)(L,{transactions:b,isExpense:!0})}),0==S.length&&1==o&&(0,x.jsx)(u.default,{style:[f.content,{marginTop:10}],children:(0,x.jsxs)(d.default,{style:{color:"#fff",fontSize:25,textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"},children:[" Entrez vos revenus r\xe9gulier mensuel ","\n"," ","\n"," (Salaire, Allocations, ...) ","\n","\n"," \u2193"]})}),1!=o&&0==b.length&&(0,x.jsx)(u.default,{style:[f.content,{marginTop:10}],children:(0,x.jsxs)(d.default,{style:{width:"80%",color:"#fff",fontSize:25,textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"},children:[" Entrez vos d\xe9penses r\xe9guli\xe8res mensuelle ","\n"," ","\n","(Loyer, Electricit\xe9, Internet, ...) ","\n","\n"," \u2193"]})}),(0,x.jsx)(R,{navigation:t,recurring:!0})]})}var U=n(4152),K=n(3781),H=n(6032),q=n(8859),J=n(3497),Q=n(7132),X=n(2899),Z=n(4942);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,Z.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te="ADD_RECURRING_TRANSACTION",ne="UPDATE_RECURRING_TRANSACTION",re="REMOVE_RECURRING_TRANSACTION",ae="ADD_TRANSACTION",oe="UPDATE_TRANSACTION",ie="REMOVE_TRANSACTION",le=function(e,t,n,r,a){return{type:e.isReccuring?ne:oe,transaction:ee(ee({},e),{},{label:t,category:r,amount:n,date:a})}},se=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{type:a?te:ae,transaction:{transaction_id:z.randomUUID(),owner_id:"123",label:e,amount:t,category:n,date:r,month:a||!r?(new Date).getMonth():r.getMonth(),fullYear:a||!r?(new Date).getFullYear():r.getFullYear(),isReccuring:a}}},ue=function(e){return{type:e.isReccuring?re:ie,transaction:e}},ce="ADD_CATEGORY",de="REMOVE_CATEGORY",fe=["#f5a572","#f39893","#7a87a4","#abd194","#23888a","#51bab5","#b98ac0","#7ac2db","#84a1c1","#f1c85e"],ge=function(e){return{type:ce,category:{label:e,color:fe[Math.floor(10*Math.random())]}}},he=function(e){return{type:de,category:{label:e,color:fe[Math.floor(10*Math.random())]}}};function ye(e){var t=e.item;return(0,x.jsxs)(T.default,{style:[me.item,{backgroundColor:t.color,flexDirection:"row"}],onPress:function(){e.onCategorySelected(t.label)},children:[(0,x.jsx)(d.default,{style:me.text,children:t.label}),(0,x.jsx)(M.default,{name:"md-trash-bin",size:20,color:"#ff0054",style:{zIndex:3,height:20,marginLeft:"auto",alignSelf:"baseline"},onPress:function(){e.onCategoryRemoved(t.label)}})]})}var me=s.default.create({text:{color:"#fff",fontSize:15,fontWeight:"bold"},item:{backgroundColor:"#525174",color:"#fff",borderRadius:10,padding:10,margin:1}});function xe(e){var t=e.item,n=e.isExpense,o=(0,y.useDispatch)(),s=(0,y.useSelector)((function(e){return e.categories})),f=(0,i.useState)("Nouvelle cat\xe9gorie"),g=(0,a.default)(f,2),h=g[0],m=g[1],v=(0,i.useState)(t.amount.toString()),b=(0,a.default)(v,2),j=b[0],p=b[1],D=(0,i.useState)(new Date(t.date)),w=(0,a.default)(D,2),P=w[0],O=w[1],M=(0,i.useState)(t.category),C=(0,a.default)(M,2),R=C[0],E=C[1],F=(0,i.useState)(t.label),N=(0,a.default)(F,2),z=N[0],I=N[1],_=(0,i.useState)(!1),k=(0,a.default)(_,2),G=k[0],B=k[1],Y=(0,i.useState)(!1),V=(0,a.default)(Y,2),L=V[0],W=V[1],U=(0,i.useState)(!0),K=(0,a.default)(U,2),H=K[0],Z=K[1],$=(0,A.useNavigation)();function ee(){t.isReccuring?$.navigate("RecurringConfigurationPage"):$.navigate("HomePage")}(0,i.useEffect)((function(){Z(!j||!z)}),[j,z]);var te=function(e,t){O(t)},ne=function(){var e=Math.abs(Number(j));return n&&(e*=-1),e},re=function(){var e=ne();return Number.isNaN(e)?(p(t.amount.toFixed(2)),!1):(p(e.toFixed(2)),!0)};function ae(e){E(e),W(!1)}return(0,x.jsxs)(u.default,{style:{paddingTop:20},children:[(0,x.jsxs)(u.default,{style:{flexDirection:"row"},children:[n?(0,x.jsx)(d.default,{style:ve.header,children:"Nom de la d\xe9pense"}):(0,x.jsx)(d.default,{style:ve.header,children:"Nom du revenu"}),t.transaction_id&&(0,x.jsx)(T.default,{style:{marginLeft:"auto",marginRight:10},onPress:function(){B(!0)},children:(0,x.jsx)(d.default,{style:{color:"#ff0054"},children:"Supprimer"})})]}),(0,x.jsx)(J.default,{selectTextOnFocus:!0,autoFocus:!0,style:ve.container,value:z,onChangeText:function(e){I(e)}}),(0,x.jsx)(d.default,{style:ve.header,children:"Montant"}),(0,x.jsx)(J.default,{selectTextOnFocus:!0,keyboardType:"numeric",style:[ve.container],value:j,onChangeText:function(e){p(e)},onBlur:function(){return re()}}),!t.isReccuring&&"android"===Q.default.OS&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.default,{style:ve.header,children:"Date"}),(0,x.jsx)(T.default,{onPress:function(){return function(){re();var e=new Date;"android"===Q.default.OS&&X.DateTimePickerAndroid.open({value:P||new Date,onChange:te,mode:"date",maximumDate:e,minimumDate:new Date(e.getFullYear(),e.getMonth(),1)})}()},style:ve.container,children:(0,x.jsx)(d.default,{style:[{color:"#525174",fontSize:15}],children:r.AsString(P)})})]}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.default,{style:ve.header,children:"Cat\xe9gorie"}),(0,x.jsx)(T.default,{onPress:function(){return re(),void W(!0)},style:ve.container,children:(0,x.jsx)(d.default,{style:{color:"#525174",fontSize:15},children:R})})]}),(0,x.jsxs)(u.default,{style:{paddingTop:20,flexDirection:"row",justifyContent:"space-around"},children:[(0,x.jsx)(l.default,{onPress:function(){ee()},title:"Annuler",color:"#ff0054"}),(0,x.jsx)(l.default,{onPress:function(){if(re()&&!H){var e=ne(),n=t.isReccuring?void 0:P?new Date(P):new Date;console.log(n),t.transaction_id?o(le(t,z,e,R,n)):o(se(z,e,R,n,t.isReccuring)),ee()}},title:"Sauver",color:"#2ec4b6",disabled:H})]}),(0,x.jsx)(u.default,{style:be.centeredView,children:(0,x.jsx)(c.default,{animationType:"slide",transparent:!0,visible:G,onRequestClose:function(){q.default.alert("Modal has been closed."),B(!G)},children:(0,x.jsx)(u.default,{style:be.centeredView,children:(0,x.jsxs)(u.default,{style:be.modalView,children:[(0,x.jsx)(d.default,{style:be.modalText,children:"Supprimer cette transaction ?"}),(0,x.jsxs)(u.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,x.jsx)(l.default,{onPress:function(){return B(!1)},title:"Non",color:"#ff0054"}),(0,x.jsx)(l.default,{onPress:function(){B(!1),o(ue(t)),ee()},title:"Oui",color:"#2ec4b6"})]})]})})})}),(0,x.jsx)(u.default,{style:be.centeredView,children:(0,x.jsx)(c.default,{animationType:"slide",transparent:!0,visible:L,children:(0,x.jsx)(u.default,{style:be.centeredView,children:(0,x.jsxs)(u.default,{style:be.modalView,children:[(0,x.jsxs)(u.default,{style:{flex:1},children:[(0,x.jsx)(d.default,{children:"Choisissez une cat\xe9gorie existante"}),(0,x.jsx)(S.default,{data:s,renderItem:function(e){var t=e.item;return(0,x.jsx)(ye,{item:t,onCategorySelected:function(e){return ae(e)},onCategoryRemoved:function(e){return o(he(e))}})}})]}),(0,x.jsxs)(u.default,{style:{marginBottom:30},children:[(0,x.jsx)(d.default,{children:"Ou entrez une nouvelle cat\xe9gorie"}),(0,x.jsx)(J.default,{selectTextOnFocus:!0,style:[me.item],value:h,onChangeText:function(e){m(e)}})]}),(0,x.jsxs)(u.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,x.jsx)(l.default,{onPress:function(){return W(!1)},title:"Annuler",color:"#ff0054"}),(0,x.jsx)(l.default,{onPress:function(){return function(e){o(ge(e)),ae(e)}(h)},title:"Valider",color:"#2ec4b6"})]})]})})})})]})}var ve=s.default.create({container:{backgroundColor:"#fff",borderColor:"#525174",borderWidth:1,padding:8,margin:8,height:40},header:{color:"#fff",marginLeft:10,fontSize:17,fontWeight:"bold"}}),be=s.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:20,backgroundColor:"white",borderRadius:20,padding:35,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:"#F194FF"},buttonClose:{backgroundColor:"#2196F3"},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,textAlign:"center"}});function je(e){var t,n=e.route,r=n.params.recurring,a=null!=(t=n.params.item)?t:{label:"",amount:0,category:"Autre",date:r?void 0:new Date,isReccuring:r},o=n.params.isExpense;return(0,x.jsx)(g.SafeAreaView,{style:[f.content],children:(0,x.jsx)(xe,{item:a,isExpense:o})})}var pe=n(2175),De=n(6441),Se=n(2982),we=n(7670);function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){(0,Z.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}new Date;var Pe={today:void 0,recurringTransactions:[],currentMonthDailyTransactions:[],totalExpenses:0,totalIncomes:0,availableMonthlyAmount:0,availableDailyAmount:0,spentPerDay:[],theoriticalAvailableAmountPerDay:[],realAvailableAmountPerDay:[],allTransactionPerMonth:{}},Oe=function(e,t,n){var r=[],a=Number(e);if(n)for(var o=new Date(n),i=0;i<o.getDate();++i)t.length>i?(a=Number(a)+Number(t[i]),r.push(a)):r.push(a);return r};function Me(e,t){for(var n=[],r=0;r<e.getDate();++r)n.length<=r&&n.push(Number(0));return t.forEach((function(t){if(t.date){var r=new Date(t.date);r.getMonth()===e.getMonth()&&r.getFullYear()===e.getFullYear()&&(n[r.getDate()-1]+=t.amount)}})),n}var Ce=(0,we.combineReducers)({transactions:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;if(n.type!==N&&!t.today)return t;var a=new Date(null!=(e=n.today)?e:t.today),o=r.GetNumberOfDaysInCurrentMonth(a),i=[];switch(n.type){case N:console.log("================================ SET_TODAY ?? ");var l=t.currentMonthDailyTransactions.filter((function(e){var t=new Date(e.date);return t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()})),s=t.currentMonthDailyTransactions.filter((function(e){var t=new Date(e.date);return t.getMonth()!==a.getMonth()||t.getFullYear()!==a.getFullYear()})),u=r.GetMonthKey(a),c=t.allTransactionPerMonth;c[u]||(c[u]={dailyTransactions:l}),s.forEach((function(e){var t=new Date(e.date),n=r.GetMonthKey(t);c[n]?c[n].dailyTransactions.find((function(t){return t.transaction_id===e.transaction_id}))||c[n].dailyTransactions.push(e):c[n]={dailyTransactions:[e]}}));var d=new Date(a);d.setDate(1),d.setMonth(d.getMonth()-1);for(var f=r.GetMonthKey(d);c[f];)c[f].recurringTransactions||(c[f]=Ae(Ae({},c[f]),{},{recurringTransactions:t.recurringTransactions})),d.setMonth(d.getMonth()-1),f=r.GetMonthKey(d);return console.log("allTransactionPerMonth: ",c),i=Me(a,l),Ae(Ae({},t),{},{allTransactionPerMonth:c,today:n.today,currentMonthDailyTransactions:l,pastDailyTransactions:s,spentPerDay:i,realAvailableAmountPerDay:Oe(t.availableMonthlyAmount,i,a)});case te:for(var g=[].concat((0,Se.default)(t.recurringTransactions),[n.transaction]),h=t.availableMonthlyAmount+n.transaction.amount,y=Number(h/o),m=[],x=1;x<=o;++x)m.push(Number(h-x*y));return Ae(Ae({},t),{},{recurringTransactions:g,availableMonthlyAmount:h,availableDailyAmount:y,theoriticalAvailableAmountPerDay:m,realAvailableAmountPerDay:Oe(h,t.spentPerDay,t.today)});case ne:for(var v=n.transaction,b=t.recurringTransactions.map((function(e){return e.transaction_id===v.transaction_id?Ae(Ae({},e),{},{label:v.label,amount:v.amount,category:v.category,isReccuring:!0}):e})),j=b.reduce((function(e,t){return t.amount<0?e+t.amount:e}),0)+b.reduce((function(e,t){return t.amount>0?e+t.amount:e}),0),p=Number(j/o),D=[],S=1;S<=o;++S)D.push(Number(j-S*p));return Ae(Ae({},t),{},{recurringTransactions:b,availableMonthlyAmount:j,availableDailyAmount:p,theoriticalAvailableAmountPerDay:D,realAvailableAmountPerDay:Oe(j,t.spentPerDay,a)});case re:for(var w=t.recurringTransactions.filter((function(e){return e.transaction_id!==n.transaction.transaction_id})),T=w.reduce((function(e,t){return e+t.amount}),0),A=Number(T/o),P=[],O=1;O<=o;++O)P.push(Number(T-O*A));return Ae(Ae({},t),{},{recurringTransactions:w,availableMonthlyAmount:T,availableDailyAmount:A,theoriticalAvailableAmountPerDay:P,realAvailableAmountPerDay:Oe(T,t.spentPerDay,t.today)});case ae:var M=(0,Se.default)(t.currentMonthDailyTransactions);if(n.transaction.date){var C=n.transaction.date;C.getMonth()===a.getMonth()&&C.getFullYear()===a.getFullYear()&&M.push(n.transaction)}return i=Me(a,M),Ae(Ae({},t),{},{currentMonthDailyTransactions:M,spentPerDay:i,realAvailableAmountPerDay:Oe(t.availableMonthlyAmount,i,a)});case oe:var R=n.transaction,E=t.currentMonthDailyTransactions.map((function(e){return e.transaction_id===R.transaction_id?Ae(Ae({},e),{},{label:R.label,amount:R.amount,category:R.category,date:R.date}):e})),z=Me(a,E),I=Oe(t.availableMonthlyAmount,z,a);return Ae(Ae({},t),{},{currentMonthDailyTransactions:E,spentPerDay:z,realAvailableAmountPerDay:I});case ie:var _=n.transaction,k=t.currentMonthDailyTransactions.filter((function(e){return e.transaction_id!==_.transaction_id})),G=Me(a,k),B=Oe(t.availableMonthlyAmount,G,a);return Ae(Ae({},t),{},{currentMonthDailyTransactions:k,spentPerDay:G,realAvailableAmountPerDay:B});case F:return i=function(e,t){for(var n=(0,Se.default)(t),r=0;r<e.getDate();++r)n.length<=r&&n.push(Number(0));return n}(a,[]),Ae(Ae({},Pe),{},{today:n.today,spentPerDay:i,realAvailableAmountPerDay:Oe(t.availableMonthlyAmount,i,a)});default:return t}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return e.find((function(e){return e.label===t.category.label}))?e:[].concat((0,Se.default)(e),[t.category]);case de:return(0,Se.default)(e.filter((function(e){return e.label!==t.category.label})));default:return e}},savings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===I){var n=Ae({},e),r=t.saving;return n[r.key]=r,n}return e}});const Re=Ce;var Ee=n(6562),Fe=n(6728),Ne={key:"root",storage:n(5519).default,stateReconciler:Fe.default,version:1},ze=(0,Ee.persistReducer)(Ne,Re),Ie=(0,pe.configureStore)({reducer:ze,middleware:[De.default]});(0,Ee.persistStore)(Ie);console.log("   --- store.getState() --- ",Ie.getState());var _e=function(){var e=(0,A.useNavigation)(),t=(0,y.useSelector)((function(e){return e.savings})),n=(0,y.useSelector)((function(e){return e.transactions.allTransactionPerMonth}));return console.log(">> allTransactionPerMonth ",n),console.log(">> savings ",t),(0,x.jsxs)(g.SafeAreaView,{style:[f.content],children:[(0,x.jsxs)(u.default,{style:{flex:1},children:[function(){var e=[];for(var n of Object.keys(t))e.push((0,x.jsxs)(d.default,{style:{color:"#fff"},children:[r.GetKeyDisplay(n)," : ",t[n].amount]},n));return e}(),function(){var e=[];console.log(">>>  renderAllTransactions: ",n);var t=function(){var t;e.push((0,x.jsx)(d.default,{style:{color:"#fff"},children:"---------------------------------------"},a+"SEP01")),e.push((0,x.jsxs)(d.default,{style:{color:"#fff"},children:[r.GetKeyDisplay(a)," "]},a));var o=n[a];e.push((0,x.jsx)(d.default,{style:{color:"#fff"},children:" ---- DAILY TRANSACTIONS ---- "},a+"SEP001"));var i=0;o.dailyTransactions.forEach((function(e){i+=e.amount})),e.push((0,x.jsxs)(d.default,{style:{color:"#fff"},children:[i," "]},a+"TOTAL")),e.push((0,x.jsx)(d.default,{style:{color:"#fff"},children:" ---- RECURRING TRANSACTIONS ---- "},a+"SEP002"));var l=0;null==(t=o.recurringTransactions)||t.forEach((function(e){l+=e.amount})),e.push((0,x.jsxs)(d.default,{style:{color:"#fff"},children:[l," "]},a+"TOTAL2"))};for(var a of Object.keys(n))t();return e}()]}),(0,x.jsx)(R,{navigation:e,recurring:!1})]})},ke=function(){return(0,x.jsx)(w.default,{style:[f.content],children:(0,x.jsx)(u.default,{style:{flex:1,justifyContent:"center"},children:(0,x.jsx)(H.default,{size:"large"})})})};const Ge=function(){(0,K.default)();var e=(0,B.default)(),t=(0,i.useState)(!1),n=(0,a.default)(t,2),r=n[0],l=n[1];return(0,i.useEffect)((function(){l(!0)}),[]),(0,x.jsx)(y.Provider,{store:Ie,children:(0,x.jsxs)(U.SafeAreaProvider,{style:{maxWidth:600,justifyContent:"center",marginRight:"auto",marginLeft:"auto"},children:[(0,x.jsx)(o.default,{style:"auto"}),r?(0,x.jsx)(G.default,{children:(0,x.jsxs)(e.Navigator,{screenOptions:{headerShown:!1},children:[(0,x.jsx)(e.Screen,{name:"HomePage",component:_}),(0,x.jsx)(e.Screen,{name:"StatisticsPage",component:_e}),(0,x.jsx)(e.Screen,{name:"RecurringConfigurationPage",component:W}),(0,x.jsx)(e.Screen,{name:"EditTransactionItemPage",component:je})]})}):(0,x.jsx)(ke,{})]})})}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,s]=r,u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[530],(()=>n(9386)));r=n.O(r)})();
//# sourceMappingURL=main.b334712c.js.map