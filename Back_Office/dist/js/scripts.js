/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function make() {
    var x = document.getElementById("make");
    var y = document.getElementById("show");
   if (x.style.display === "none" && y.style.display === "block") {
      x.style.display = "block";
      y.style.display = "none";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
      }
  }
  function show() {
    var x = document.getElementById("make");
    var y = document.getElementById("show");
  if (x.style.display === "block" && y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
    }
    else {
        x.style.display = "none";
      y.style.display = "block";
      }
  }