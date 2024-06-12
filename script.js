
const showMore = document.getElementById("showMore");
const btn = document.getElementById("btn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const daftarMenu = document.querySelector(".dftr-mnu")

sideMenu.style.width = "0";
sideMenu.style.paddingLeft = "0";


function openMenus(){
    sideMenu.style.width = "60%";
    sideMenu.style.paddingLeft = "20px";
    daftarMenu.style.display = "block"
}

closeBtn.addEventListener("click", function(){
    sideMenu.style.width = "0";
    sideMenu.style.paddingLeft = "0";
    daftarMenu.style.display = "none"
});

function show() {
    showMore.classList.toggle("active");
    if(btn.innerHTML == "NDELOK LIYANE"){
        btn.innerHTML = "SEMBUNYIKAN"
    }else{
        btn.innerHTML = "NDELOK LIYANE"
    }
}
