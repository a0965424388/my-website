const reveal=document.querySelectorAll(".reveal");

function showReveal(){

reveal.forEach(item=>{

let top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",showReveal);

// 網頁載入時先執行一次
showReveal();
