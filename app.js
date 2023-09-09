const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");

closeButton.addEventListener("click", function (){
    if(sideBar.classList.contains("show-sidebar"))
        sideBar.classList.remove("show-sidebar");
});

openButton.addEventListener("click", function (){
    sideBar.classList.toggle("show-sidebar");
});