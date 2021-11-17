const hellos =document.querySelector(".hello h1");
//querySelector : css방식으로 1개의element를 불러올 수 있음 , querySelectorAll: 조건에 맞는 모든 element를 불러옴 (array 형태로)
function handleTitleClick(){
    const currentColor = hellos.style.color;
    let newColor;
    if(currentColor ==="blue"){
        newColor = "tomato";
    }else{
        newColor="blue";
    }
    hellos.style.color=newColor;
}


hellos.addEventListener("click", handleTitleClick);
//자바 스크립트가 실행버튼을 누르기 때문에 handleTitleClick를 사용,
//handleTitleClick()은 내가 실행하는 것이기 때문
