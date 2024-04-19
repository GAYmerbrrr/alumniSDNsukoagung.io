const showMore = document.getElementById("showMore");
const btn = document.getElementById("btn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

sideMenu.style.width = "0";
sideMenu.style.paddingLeft = "0";


function openMenus(){
    sideMenu.style.width = "100%";
    sideMenu.style.paddingLeft = "20px";
}

closeBtn.addEventListener("click", function(){
    sideMenu.style.width = "0";
    sideMenu.style.paddingLeft = "0";
});

function show() {
    showMore.classList.toggle("active");
    if(btn.innerHTML == "NDELOK LIYANE"){
        btn.innerHTML = "SEMBUNYIKAN"
    }else{
        btn.innerHTML = "NDELOK LIYANE"
    }
}
