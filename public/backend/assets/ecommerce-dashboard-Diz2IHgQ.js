setTimeout(() => {

var a={series:[{name:"Total Orders",type:"line",data:[40,45,22,22,35,35,50,65,50,56,34,57]},{name:"Revenue",data:[20,46,46,28,28,55,30,45,60,30,46,16],type:"line"},{name:"Profit",data:[20,36,46,28,28,35,20,35,22,30,36,36],type:"bar"}],chart:{height:414,dropShadow:{enabled:!0,enabledOnSeries:void 0,top:5,left:0,blur:3,color:"#000",opacity:.1},toolbar:!1},grid:{borderColor:"#f2f6f7",strokeDashArray:5},colors:["var(--primary-color)","rgba(255, 183, 72, 1)","rgba(53, 189, 170, 1)"],dataLabels:{enabled:!1},legend:{show:!1},plotOptions:{bar:{columnWidth:"20%",borderRadius:"4"}},stroke:{curve:["smooth","straight","smooth"],width:[3,2,0],dashArray:[0,4,0]},yaxis:{title:{style:{color:"#adb5be",fontSize:"12px",fontFamily:"Poppins, sans-serif",fontWeight:500,cssClass:"apexcharts-yaxis-label"}},labels:{formatter:function(e){return e.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}};document.getElementById("earnings").innerHTML="";var r=new ApexCharts(document.querySelector("#earnings"),a);r.render();var t={series:[{name:"Last Week",data:[650,770,890,840,1380,1100]},{name:"This Week",data:[500,650,820,720,1280,1050]}],chart:{height:225,type:"bar",toolbar:{show:!1}},colors:["var(--primary-color)","rgba(53, 189, 170, 0.5)"],plotOptions:{bar:{barHeight:"70%",horizontal:!0,borderRadius:2}},stroke:{width:1},dataLabels:{enabled:!1},legend:{show:!0,position:"top",markers:{size:5,shape:"circle"}},grid:{borderColor:"#f1f1f1",strokeDashArray:3},xaxis:{categories:[["Monday"],["Tuesday"],["Wedensday"],["Thursday"],["Friday"],["Saturday"]],labels:{show:!1,style:{fontSize:"12px"}}},yaxis:{offsetX:30,offsetY:30,labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:500,cssClass:"apexcharts-yaxis-label"},offsetY:8}},tooltip:{enabled:!0,shared:!1,intersect:!0,x:{show:!1},theme:"dark"}},o=new ApexCharts(document.querySelector("#newCutomers"),t);o.render();

}, 1200);
