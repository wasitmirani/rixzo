(function(){var e=document.getElementById("filemanager-file-details");new SimpleBar(e,{autoHide:!0});var r={series:[38,36,27,32],labels:["Media","Downloads","Apps","Documents"],chart:{height:220,type:"donut"},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},plotOptions:{pie:{startAngle:-90,endAngle:90,offsetY:10,expandOnClick:!1,donut:{size:"75%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"20px",color:"#495057",offsetY:-3},value:{show:!0,fontSize:"28px",fontWeight:600,color:void 0,offsetY:-40,formatter:function(t){return t+"%"}},total:{show:!0,showAlways:!0,label:"Used of 720 GB",fontSize:"12px",fontWeight:400}},borderRadius:"8px"}}},grid:{padding:{bottom:-100}},colors:["var(--primary-color)","rgba(var(--secondary-rgb), 1)","rgba(var(--success-rgb), 1)","rgba(var(--info-rgb), 1)"]},o=new ApexCharts(document.querySelector("#file-manager-storage"),r);o.render()})();
