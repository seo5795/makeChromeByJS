const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event){
//     event.preventDefault();
//     //브라우저에서 하려는 행동을 막음
//     console.log(event);
//     alert("clicked");
// }

loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);

// handleLinkClick({일어난 이벤트에 대한 정보를 객체로 전달함})

