(function(){let c=document.querySelector(".check-all");c.addEventListener("click",l);function l(){c.checked?document.querySelectorAll(".wishlist-checkbox input").forEach(function(e){e.closest(".wishlist-list").classList.add("selected"),e.checked=!0}):document.querySelectorAll(".wishlist-checkbox input").forEach(function(e){e.closest(".wishlist-list").classList.remove("selected"),e.checked=!1})}document.querySelectorAll(".wishlist-btn").forEach(e=>{e.onclick=()=>{e.closest(".wishlist-list").remove()}})})();
