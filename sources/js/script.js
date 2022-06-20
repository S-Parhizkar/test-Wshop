$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
  });
});

$(".log-button").on("click", function () {
  $(".modal").css("display", "block");
});

$(".log-button_close").on("click", function () {
  $(".modal").css("display", "none");
});

$(".sub-modal").submit(function (event) {
  event.preventDefault();
  $("#modal1").css("display", "none");
  $("#modal2").css("display", "block");
});

$(".montres").on("click", function () {
  $(".sub-menu ").css("display", "block");
});

// start Email validation by REGEX
$(document).ready(function () {
  $("#input-mail").keyup(function () {
    if (verif_mail()) {
      $("#input-mail").css("color", "green");
      $("#emailLogin").html($("#input-mail").val().toUpperCase());
    } else {
      $("#input-mail").css({ color: "red", "font-weight": "bold" });
      $("#ok").on("click", function () {
        $("#emailLogin")
          .html("EMAIL NOT VALID")
          .css({ color: "#fff", "font-weight": "bold" });
        location.reload();
      });
    }
  });
});

function verif_mail() {
  var email = $("#input-mail").val();
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
// End Email validation by REGEX
