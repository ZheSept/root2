const toggleBtn = document.querySelector("#tog");
toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
        document.documentElement.removeAttribute("theme");
    }
    else{
        document.documentElement.setAttribute("theme", "dark");
    }
});