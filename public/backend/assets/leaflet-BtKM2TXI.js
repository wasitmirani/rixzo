(function(){var i=L.map("map").setView([51.505,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap"}).addTo(i);var a=L.map("map1").setView([51.505,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap"}).addTo(a);var e=L.marker([51.5,-.09]).addTo(a),p=L.circle([51.508,-.11],{color:"#35bdaa",fillColor:"#35bdaa",fillOpacity:.5,radius:500}).addTo(a),t=L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#e6533c",fillColor:"#e6533c"}).addTo(a),o=L.map("map-popup").setView([51.505,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap"}).addTo(o);var e=L.marker([51.5,-.09]).addTo(o),p=L.circle([51.508,-.11],{color:"#ffc102",fillColor:"#ffc102",fillOpacity:.5,radius:500}).addTo(o),t=L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#5b67c7",fillColor:"#5b67c7"}).addTo(o);e.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(),p.bindPopup("I am a circle."),t.bindPopup("I am a polygon."),L.popup().setLatLng([51.513,-.09]).setContent("I am a standalone popup.").openOn(o);var r=L.map("map-custom-icon").setView([51.505,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap"}).addTo(r);var n=L.icon({iconUrl:"https://laravelui.spruko.com/rixzo/build/assets/images/brand-logos/desktop-logo.png",iconSize:[80,25],iconAnchor:[22,94],popupAnchor:[-3,-76]});L.marker([51.5,-.09],{icon:n}).addTo(r);var l=L.map("interactive-map").setView([37.8,-96],4);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(l)})();
