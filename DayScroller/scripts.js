var winHeight = $(window).innerHeight();
$(document).ready(function () {
  $(".panel").height(winHeight);
  $("body").height(winHeight * $(".panel").length);

  // Create stars
  for (let i = 0; i < 5; i++) {
    let mathTop = Math.floor(Math.random() * (-90 - -70 + 1) + -70); // starString out of viewport//
    let mathLeft = Math.floor(Math.random() * 100);

    let starString = document.createElement("div");
    starString.classList.add("star-string");
    starString.style.height = $(window).innerHeight().toString() + "px"; // starString height to viewport height

    starString.style.top = `${mathTop}%`;
    starString.style.left = `${mathLeft}%`;

    let starClasses = ["fa", "fa-star", "checked"];
    let starElement = document.createElement("div");
    starElement.classList.add(...starClasses);
    starString.appendChild(starElement);
    document.getElementById("pane-4").appendChild(starString);
  }
});

window.addEventListener("resize", function (event) {
  console.log(document.getElementById("pane-4"));
  // Set panel height to window height //
  $(".panel").height($(window).innerHeight());
});
$(window).on("scroll", function () {
  // Reverse scroll
  $(".panelCon").css("bottom", $(window).scrollTop() * -1);
  $(".cloud").css("right", $(window).scrollTop() * 1);
  console.log($(window).scrollTop() * -1);
});
