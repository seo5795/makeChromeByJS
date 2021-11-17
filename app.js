const h1 =document.querySelector("div.hello:first-child h1");
//querySelector : css방식으로 1개의element를 불러올 수 있음 , querySelectorAll: 조건에 맞는 모든 element를 불러옴 (array 형태로)
function handleTitleClick(){ 
    h1.classList.toggle("clicked");
}
//const clickedClass = "clicked";
// if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
// }else{
//     h1.classList.add(clickedClass);
// }와 같은 역할

h1.addEventListener("click", handleTitleClick);

