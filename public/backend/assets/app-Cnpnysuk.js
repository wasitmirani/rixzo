setTimeout(() => {



    (function () { function t() { document.getElementById("loader").classList.add("d-none") } window.addEventListener("load", t), [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(e => new bootstrap.Tooltip(e)), flatpickr("#daterange", { mode: "range", dateFormat: "Y-m-d", defaultDate: ["2024-05-01", "2024-05-30"] }),flatpickr("#humanfrienndlydate",{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}), [...document.querySelectorAll('[data-bs-toggle="popover"]')].map(e => new bootstrap.Popover(e)); function c() { let e = document.querySelector("html"); e.getAttribute("data-theme-mode") === "dark" ? (e.setAttribute("data-theme-mode", "light"), e.setAttribute("data-header-styles", "light"), e.setAttribute("data-menu-styles", "dark"), localStorage.getItem("primaryRGB") || e.setAttribute("style", ""), e.removeAttribute("data-bg-theme"), document.querySelector("#switcher-canvas") && (document.querySelector("#switcher-light-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0), document.querySelector("html").style.removeProperty("--body-bg-rgb", localStorage.bodyBgRGB), e.style.removeProperty("--body-bg-rgb2"), e.style.removeProperty("--light-rgb"), e.style.removeProperty("--form-control-bg"), e.style.removeProperty("--input-border"), document.querySelector("#switcher-canvas") && (document.querySelector("#switcher-header-light").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-light-theme").checked = !0, document.querySelector("#switcher-background4").checked = !1, document.querySelector("#switcher-background3").checked = !1, document.querySelector("#switcher-background2").checked = !1, document.querySelector("#switcher-background1").checked = !1, document.querySelector("#switcher-background").checked = !1), localStorage.removeItem("rixzodarktheme"), localStorage.removeItem("rixzoMenu"), localStorage.removeItem("rixzoHeader"), localStorage.removeItem("bodylightRGB"), localStorage.removeItem("bodyBgRGB"), e.setAttribute("data-header-styles", "light")) : (e.setAttribute("data-theme-mode", "dark"), e.setAttribute("data-header-styles", "dark"), e.setAttribute("data-menu-styles", "dark"), localStorage.getItem("primaryRGB") || e.setAttribute("style", ""), document.querySelector("#switcher-canvas") && (document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, document.querySelector("#switcher-background4").checked = !1, document.querySelector("#switcher-background3").checked = !1, document.querySelector("#switcher-background2").checked = !1, document.querySelector("#switcher-background1").checked = !1, document.querySelector("#switcher-background").checked = !1), localStorage.setItem("rixzodarktheme", "true"), localStorage.setItem("rixzoMenu", "dark"), localStorage.setItem("rixzoHeader", "dark"), localStorage.removeItem("bodylightRGB"), localStorage.removeItem("bodyBgRGB")) } document.querySelector(".layout-setting").addEventListener("click", c), document.addEventListener("DOMContentLoaded", function () { var e = document.querySelectorAll("[data-trigger]"); for (let n = 0; n < e.length; ++n) { var o = e[n]; new Choices(o, { allowHTML: !0, placeholderValue: "This is a placeholder set in the config", searchPlaceholderValue: "Search" }) } }), document.getElementById("year").innerHTML = new Date().getFullYear(), Waves.attach(".btn-wave", ["waves-light"]), Waves.init(); let i = ".card"; document.querySelectorAll('[data-bs-toggle="card-remove"]').forEach(e => { e.addEventListener("click", function (o) { return o.preventDefault(), this.closest(i).remove(), !1 }) }), document.querySelectorAll('[data-bs-toggle="card-fullscreen"]').forEach(e => { e.addEventListener("click", function (o) { let u = this.closest(i); return u.classList.toggle("card-fullscreen"), u.classList.remove("card-collapsed"), o.preventDefault(), !1 }) }); var a = 1; setInterval(() => { document.querySelectorAll(".count-up").forEach(e => { e.getAttribute("data-count") >= a && (a = a + 1, e.innerText = a) }) }, 10); const s = document.querySelector(".scrollToTop"), m = document.documentElement; window.onscroll = () => { m.scrollHeight - m.clientHeight, window.scrollY > 100 ? s.style.display = "flex" : s.style.display = "none" }, s.onclick = () => { window.scrollTo(0, 0) }; var h = document.getElementById("header-notification-scroll"); new SimpleBar(h, { autoHide: !0 }); var g = document.getElementById("header-cart-items-scroll"); new SimpleBar(g, { autoHide: !0 }); const y = new autoComplete({ selector: "#header-search", data: { src: ["What is the meaning of life?", "How does gravity work?", "Why is the sky blue?", "What is the capital of France?", "Who painted the Mona Lisa?", "What is the speed of light?", "Why do we dream?", "How do birds fly?", "What is the largest mammal?", "Why do leaves change color in the fall?"], cache: !0 }, resultItem: { highlight: !0 }, events: { input: { selection: e => { const o = e.detail.selection.value; y.input.value = o } } } }) })(); var l = document.documentElement; window.openFullscreen = function () { !document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ? f() : p() }; function f() { l.requestFullscreen ? l.requestFullscreen() : l.webkitRequestFullscreen ? l.webkitRequestFullscreen() : l.msRequestFullscreen && l.msRequestFullscreen() } function p() { document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() } document.addEventListener("fullscreenchange", S); function S() { let t = document.querySelector(".full-screen-open"), r = document.querySelector(".full-screen-close"); document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? (r.classList.add("d-block"), r.classList.remove("d-none"), t.classList.add("d-none")) : (r.classList.remove("d-block"), t.classList.remove("d-none"), r.classList.add("d-none"), t.classList.add("d-block")) } let k = document.querySelectorAll(".toggle"); k.forEach(t => t.addEventListener("click", () => { t.classList.toggle("on") })); const v = document.querySelectorAll(".dropdown-item-close"); v.forEach(t => { t.addEventListener("click", r => { if (r.preventDefault(), r.stopPropagation(), t.parentNode.parentNode.parentNode.remove(), document.getElementById("cart-data").innerText = `${document.querySelectorAll(".dropdown-item-close").length}  Items`, document.getElementById("cart-icon-badge").innerText = `${document.querySelectorAll(".dropdown-item-close").length}`, console.log(document.getElementById("header-cart-items-scroll").children.length), document.querySelectorAll(".dropdown-item-close").length == 0) { let d = document.querySelector(".empty-header-item"), c = document.querySelector(".empty-item"); d.classList.add("d-none"), c.classList.remove("d-none") } }) }); const w = document.querySelectorAll(".dropdown-item-close1"); w.forEach(t => { t.addEventListener("click", r => { if (r.preventDefault(), r.stopPropagation(), t.parentNode.parentNode.parentNode.parentNode.remove(), document.getElementById("notifiation-data").innerText = `${document.querySelectorAll(".dropdown-item-close1").length} Unread`, document.querySelectorAll(".dropdown-item-close1").length == 0) { let d = document.querySelector(".empty-header-item1"), c = document.querySelector(".empty-item1"); d.classList.add("d-none"), c.classList.remove("d-none") } }) });
}, 1200);
