var r={series:[{name:"Followers",data:[56,44,66,55,68,90,55,68,55,66,44,56],type:"area"},{name:"Total Views",data:[45,50,42,59,53,74,43,43,30,55,74,49],type:"area"}],chart:{type:"area",height:348,toolbar:{show:!1},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:7,left:0,blur:1,color:["var(--primary-color)","rgba(var(--success-rgb), 1)"],opacity:.05}},grid:{borderColor:"rgba(167, 180, 201 ,0.2)",strokeDashArray:3},colors:["var(--primary-color)","rgba(var(--success-rgb), 1)"],stroke:{width:[3,2],curve:["smooth","smooth"],dashArray:[0,4]},dataLabels:{enabled:!1},legend:{show:!0,position:"top",labels:{colors:"#74767c"},markers:{size:5,shape:"circle",strokeWidth:0}},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60],colorStops:[[{offset:0,color:"var(--primary01)",opacity:.2},{offset:50,color:"var(--primary01)",opacity:.2},{offset:100,color:"var(--primary01)",opacity:.5}],[{offset:0,color:"rgba(var(--success-rgb), .05)",opacity:1},{offset:50,color:"rgba(var(--success-rgb), .05)",opacity:1},{offset:100,color:"rgba(var(--success-rgb), .05)",opacity:.5}]]}},yaxis:{labels:{formatter:function(e){return e.toFixed(0)+""}},labels:{style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}},max:90,min:20},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(167, 180, 201 ,0.2)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(167, 180, 201 ,0.2)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}}},o=new ApexCharts(document.querySelector("#audience"),r);o.render();var a={series:[{type:"bar",name:"Profit",data:[20,25,30,26,32,26,26,24,29,25,33,27]},{type:"bar",name:"Revenue",data:[37,33,38,35,31,30,37,33,42,39,34,36]}],chart:{type:"bar",height:258,stacked:!0,sparkline:{enabled:!0}},grid:{borderColor:"#f2f6f7"},colors:["var(--primary-color)","var(--primary02)"],dataLabels:{enabled:!1},legend:{show:!0,position:"top",offsetY:-5,markers:{size:5,shape:"circle"}},stroke:{width:0},plotOptions:{bar:{columnWidth:"30%",borderRadius:2}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)"},axisTicks:{show:!0,color:"rgba(119, 119, 142, 0.05)"},labels:{rotate:-45}},tooltip:{enabled:!0}},t=new ApexCharts(document.querySelector("#profit-earn-social"),a);t.render();var r={series:[1754,1234],labels:["This Month","Last Month"],chart:{height:209,type:"donut"},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},plotOptions:{pie:{expandOnClick:!1,donut:{size:"80%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"20px",color:"#495057",offsetY:-4},value:{show:!0,fontSize:"18px",color:void 0,offsetY:8,formatter:function(e){return e+"%"}},total:{show:!0,showAlways:!0,label:"Facebook",fontSize:"20px",fontWeight:600,color:"#495057"}}}}},colors:["var(--primary-color)","var(--primary01)"]},s=new ApexCharts(document.querySelector("#media-traffic"),r);s.render();
