const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  event.preventDefault();
  //브라우저에서 default로 하려는 행동을 막음
  const username = loginInput.value;
  localStorage.setItem("username",username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onLoginSubmit);


// onLoginSubmit({일어난 이벤트에 대한 정보를 객체로 전달함})

