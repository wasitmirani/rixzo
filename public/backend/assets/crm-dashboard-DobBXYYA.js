var a={chart:{type:"line",height:30,width:140,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"var(--primary-color)",opacity:.5}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.5,dashArray:0},fill:{gradient:{enabled:!1}},series:[{name:"Value",data:[14,58,20,94,25,55,35,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["var(--primary-color)"]},a=new ApexCharts(document.querySelector("#crmchart01"),a);a.render();var s={chart:{type:"line",height:30,width:140,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"#ffb748",opacity:.5}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.5,dashArray:0},fill:{gradient:{enabled:!1}},series:[{name:"Value",data:[14,58,20,94,25,55,35,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["#ffb748"]},s=new ApexCharts(document.querySelector("#crmchart02"),s);s.render();var o={chart:{type:"line",height:30,width:140,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"#35bdaa",opacity:.5}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.5,dashArray:0},fill:{gradient:{enabled:!1}},series:[{name:"Value",data:[14,58,20,94,25,55,35,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["#35bdaa"]},o=new ApexCharts(document.querySelector("#crmchart03"),o);o.render();var t={chart:{type:"line",height:30,width:140,stacked:!0,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"#2e8ef7",opacity:.5}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.5,dashArray:0},fill:{gradient:{enabled:!1}},series:[{name:"Value",data:[14,58,20,94,25,55,35,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["#2e8ef7"]},t=new ApexCharts(document.querySelector("#crmchart04"),t);t.render();var e={series:[{name:"This Year",data:[25,40,32,59,32,45,30,55,65,45,35,45]},{name:"Last Year",data:[-8,-30,-25,-32,-45,-30,-20,-35,-28,-43,-30,-40]}],chart:{type:"bar",height:300,toolbar:{show:!1},stacked:!0},colors:["var(--primary-color)","rgba(var(--success-rgb), 1)"],fill:{type:["gradient","gradient"],gradient:{type:"vertical",opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"var(--primary09)",opacity:1},{offset:75,color:"var(--primary08)",opacity:1},{offset:100,color:"var(--primary09)",opacity:1}],[{offset:0,color:"rgba(var(--success-rgb), 0.9)",opacity:1},{offset:75,color:"rgba(var(--success-rgb), 0.8)",opacity:1},{offset:100,color:"rgba(var(--success-rgb), 0.9)",opacity:1}]]}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"26%"}},legend:{show:!0,position:"top",offsetX:0,offsetY:8,markers:{size:5,shape:"circle",strokeWidth:0}},stroke:{curve:"smooth",lineCap:"round"},grid:{borderColor:"#edeef1",strokeDashArray:2},yaxis:{axisBorder:{show:!0,color:"rgba(70, 216, 227, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(70, 216, 227, 0.05)",width:6,offsetX:0,offsetY:0},labels:{formatter:function(r){return r.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!1,color:"rgba(70, 216, 227, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!1,borderType:"solid",color:"rgba(70, 216, 227, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}},i=new ApexCharts(document.querySelector("#salerevenue"),e);i.render();var e={series:[1624,1267,1153],labels:["Profit","Revenue","Expenses"],chart:{height:150,type:"donut"},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},fill:{type:"solid"},plotOptions:{pie:{expandOnClick:!1,donut:{size:"85%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"20px",color:"#495057",offsetY:-4},value:{show:!0,fontSize:"18px",color:void 0,offsetY:8,formatter:function(r){return r+"%"}},total:{show:!0,showAlways:!0,label:"Total",fontSize:"22px",fontWeight:600,color:"#495057"}}}}},colors:["var(--primary-color)","rgba(var(--success-rgb), 1)","rgba(var(--secondary-rgb), 1)"]};document.querySelector("#crmprofit-report").innerHTML=" ";var l=new ApexCharts(document.querySelector("#crmprofit-report"),e);l.render();var e={series:[{name:"Total Visits",data:[15e3]},{name:"Unique Visitors",data:[8e3]},{name:"Bounce Rate",data:[4e3]}],chart:{type:"bar",height:340,toolbar:{show:!1}},xaxis:{categories:["Traffic Metrics"],labels:{show:!0}},yaxis:{title:{text:"Number of Visitors"},min:0,max:16e3,labels:{show:!1}},dataLabels:{enabled:!0},plotOptions:{bar:{horizontal:!1,columnWidth:"78%",endingShape:"rounded",borderRadius:0}},legend:{position:"top",horizontalAlign:"center",floating:!1,markers:{size:6,shape:"circle"}},fill:{opacity:.9},colors:["var(--primary-color)","rgba(var(--success-rgb), 1)","rgba(var(--secondary-rgb), 1)"]};document.querySelector("#crm-webtraffic").innerHTML=" ";var n=new ApexCharts(document.querySelector("#crm-webtraffic"),e);n.render();
