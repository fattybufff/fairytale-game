 let button = document.querySelector("button");

let dblclickBtn = document.querySelector("#dblclickBtn");
 
 button.addEventListener("dblclick", function () {
  header.innerHTML = "Event: dblclick";
});