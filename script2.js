// let keydown = document.querySelector("#keydown");

// window.addEventListener("keydown", function (event) {
//   header.innerHTML = `Event: ArrowDown (Key: ${event.key})`;
//   window.location.replace("https://symmetrical-space-garbanzo-g4w65vg6xw44h9jj7-5500.app.github.dev/index.html");
// });

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        window.location.href = "index.html";
    }
});


