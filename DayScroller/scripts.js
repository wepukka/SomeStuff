var winHeight = $(window).innerHeight();
$(document).ready(function () {
  $(".panel").height(winHeight);
  $("body").height(winHeight * $(".panel").length);

  console.log($(window).innerHeight());
  // Create stars

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < 5; i++) {
    let starString = document.createElement("div");

    let starStringPosition = Math.floor(Math.random() * 100);
    let starStringHeight = getRandomArbitrary(
      // Min one sixth of viewport height, Max one fourth
      $(window).innerHeight() / 6,
      $(window).innerHeight() / 4
    );

    starString.style.left = `${starStringPosition}%`;
    starString.style.height = `${starStringHeight.toString()}px`;

    starString.classList.add("star-string");

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
