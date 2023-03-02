"use strict"
let btnEnviar = document.querySelector("#submitComment");
btnEnviar.addEventListener("click", submitComment);
let userName = document.querySelector("#userName");
let comment = document.querySelector("#comment");
let userComment = document.querySelector("#userComment");

function submitComment(){
    userComment.innerHTML += `<p class="contactInfoText"> ${userName.value} comentó: ${comment.value} </p>`
   
}

