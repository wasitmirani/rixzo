(function(){var t={chart:{height:225,type:"radialBar",responsive:"true",offsetX:0,offsetY:-10,zoom:{enabled:!1}},grid:{padding:{top:0,right:0,bottom:0,left:0}},plotOptions:{radialBar:{startAngle:-135,endAngle:135,track:{strokeWidth:"80%"},hollow:{size:"55%"},dataLabels:{name:{fontSize:"15px",color:void 0,offsetY:20,fontWeight:[400]},value:{offsetY:-20,fontSize:"22px",color:void 0,fontWeight:[600],formatter:function(e){return e+"%"}}}}},colors:["var(--primary-color)"],fill:{type:"gradient",gradient:{shadeIntensity:1,type:"horizontal",gradientToColors:["rgb(53, 189, 170)"],opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:4},labels:["Revenue"],series:[83]},t=new ApexCharts(document.querySelector("#revenue-statistics"),t);t.render();var a={series:[{name:"Profit",data:[30,25,30,36,32,36,36,34,39,42,33,37,30,31,35,38,33,37]}],chart:{type:"area",height:250,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["var(--primary-color)"],dataLabels:{enabled:!1},legend:{show:!1,position:"top"},stroke:{width:[0],curve:"smooth"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],type:"horizontal",colorStops:[[{offset:0,color:"var(--primary-color)",opacity:.05},{offset:25,color:"var(--primary-color)",opacity:.05},{offset:50,color:"var(--primary-color)",opacity:.05},{offset:75,color:"rgb(53, 189, 170)",opacity:.05},{offset:100,color:"rgb(53, 189, 170)",opacity:.05}]]}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#revenue-statistics1"),a);o.render();var r={series:[{name:"Profit",data:[24,22,20,26,28,35,28,23,28,34,30,34,34,32,37,40,31,35]}],chart:{type:"area",height:120,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["rgba(255,255,255,0.6)"],plotOptions:{bar:{columnWidth:"40%"}},stroke:{width:[0],curve:"smooth"},dataLabels:{enabled:!1},legend:{show:!1,position:"top"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"var(--primary-color)",opacity:.3},{offset:75,color:"var(--primary-color)",opacity:.3},{offset:100,color:"var(--primary-color)",opacity:.3}]]}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#profit-analysis"),r);o.render();var r={series:[{name:"Profit",data:[34,32,37,36,38,35,38,43,48,64,60,54,54,42,57,66,41,55,60,54,66,75,82,75,43,31,42,47,33,42,57,41,64,42,65,55]}],chart:{type:"bar",height:90,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["var(--primary-color)"],plotOptions:{bar:{columnWidth:"50%"}},dataLabels:{enabled:!1},legend:{show:!1,position:"top"},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#profit-analysis1"),r);o.render();var a={series:[{name:"Profit",data:[30,25,30,36,32,36,36,34,39,42,33,37,30,31,35,38,33,37]}],chart:{type:"area",height:140,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["var(--primary-color)"],dataLabels:{enabled:!1},legend:{show:!1,position:"top"},stroke:{width:[0],curve:"smooth"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"var(--primary-color)",opacity:.2},{offset:75,color:"var(--primary-color)",opacity:.2},{offset:100,color:"var(--primary-color)",opacity:.2}]]}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#profit-analysis2"),a);o.render();var l={series:[{name:"Profit",data:[44,55,41,67,42,22,43,21,41,56,27,43],type:"column"},{name:"Revenue",data:[30,25,46,28,21,45,35,64,52,59,36,39],type:"area"},{name:"Sales",data:[23,11,22,35,17,28,22,37,21,44,22,30],type:"area"}],chart:{height:352,type:"line",toolbar:{show:!1},zoom:{enabled:!1},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:6,left:0,blur:4,color:["transparent","rgb(255, 183, 72)","rgb(53, 189, 170)"],opacity:.15}},plotOptions:{bar:{borderRadius:3,columnWidth:"30%"}},grid:{borderColor:"#f1f1f1",strokeDashArray:2,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"var(--primary-color)",opacity:1},{offset:75,color:"var(--primary-color)",opacity:1},{offset:100,color:"var(--primary-color)",opacity:1}],[{offset:0,color:"rgb(255, 183, 72)",opacity:.025},{offset:75,color:"rgb(255, 183, 72)",opacity:.025},{offset:100,color:"rgb(255, 183, 72)",opacity:.025}],[{offset:0,color:"rgb(53, 189, 170)",opacity:.025},{offset:75,color:"rgb(53, 189, 170)",opacity:.025},{offset:100,color:"rgb(53, 189, 170)",opacity:.025}]]}},legend:{position:"top",fontSize:"14px",fontWeight:500,fontFamily:"Poppins, sans-serif",markers:{width:9,height:9,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},colors:["var(--primary-color)","rgb(255, 183, 72)","rgb(53, 189, 170)"],stroke:{width:[0,2.5,2.5],curve:"smooth"},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tooltip:{shared:!0}},n=new ApexCharts(document.querySelector("#sales-statistics"),l);n.render();var s={series:[75],chart:{type:"radialBar",width:65,height:65,sparkline:{enabled:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},plotOptions:{radialBar:{hollow:{margin:0,size:"70%"},track:{margin:0},dataLabels:{show:!1}}},colors:["rgb(255, 183, 72)"]},i=new ApexCharts(document.querySelector("#expense"),s);i.render();var s={series:[75],chart:{type:"radialBar",width:65,height:65,sparkline:{enabled:!0},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0},plotOptions:{radialBar:{hollow:{margin:0,size:"70%"},track:{margin:0},dataLabels:{show:!1}}},colors:["rgb(53, 189, 170)"]},i=new ApexCharts(document.querySelector("#income"),s);i.render();var r={series:[{name:"Profit",data:[34,32,37,36,38,35,38,43,48,64,60,54,54,42,57,66,41,55,60,54,66,75,82,75,43,31,42,47,33,42,57,41,64,42,65,55]}],chart:{type:"area",height:80,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["rgba(53, 189, 170,0.6)"],plotOptions:{bar:{columnWidth:"40%"}},stroke:{width:[0],curve:"smooth"},dataLabels:{enabled:!1},legend:{show:!1,position:"top"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"rgb(53, 189, 170)",opacity:.15},{offset:75,color:"rgb(53, 189, 170)",opacity:.15},{offset:100,color:"rgb(53, 189, 170)",opacity:.15}]]}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#income-chart"),r);o.render();var r={series:[{name:"Profit",data:[34,32,37,36,38,35,38,43,48,64,60,54,54,42,57,66,41,55,60,54,66,75,82,75,43,31,42,47,33,42,57,41,64,42,65,55]}],chart:{type:"bar",height:50,stacked:!0,sparkline:{enabled:!0},zoom:{enabled:!1}},grid:{borderColor:"#f2f6f7"},colors:["rgba(255, 183, 72, 0.15)"],plotOptions:{bar:{columnWidth:"40%"}},dataLabels:{enabled:!1},legend:{show:!1,position:"top"},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"poppins, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}},tooltip:{enabled:!1}},o=new ApexCharts(document.querySelector("#expenditure-chart"),r);o.render()})();
