const h1 =document.querySelector("div.hello:first-child h1");
//querySelector : css방식으로 1개의element를 불러올 수 있음 , querySelectorAll: 조건에 맞는 모든 element를 불러옴 (array 형태로)
function handleTitleClick(){ 
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);

