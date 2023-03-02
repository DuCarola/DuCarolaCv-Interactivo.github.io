"use strict"
let btnEnviar = document.querySelector("#submitComment");
btnEnviar.addEventListener("click", submitComment);
let userName = document.querySelector("#userName");
let comment = document.querySelector("#comment");
let userComment = document.querySelector("#userComment");
let contactContainer = document.querySelector("#contactContainer")
let backgroundColor = document.querySelector("#backgroundColor")
backgroundColor.addEventListener("click", changeBackgroundColor)

function submitComment(){
    userComment.innerHTML += `<p class="contactInfoText"> ${userName.value} comentó: ${comment.value} </p>`
   
}
function changeBackgroundColor(){
    contactContainer.style.backgroundColor = "darkgreen";
}

