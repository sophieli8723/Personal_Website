$(document).scroll(function () {
   $("nav").toggleClass('colorChange', $(this).scrollTop() > 0.1*$("nav").height());
   if ($(this).scrollTop() > 0.1*$("nav").height()){
      $("nav").addClass('navbar-light');
      $("nav").removeClass('navbar-dark');
      $(".dropdown-menu").css("background-color", "white");
      $(".dropdown-item").css("color", "black")
   }
   else {
      $("nav").addClass('navbar-dark')
      $("nav").removeClass('navbar-light')
      $(".dropdown-menu").css("background-color", "rgba(0, 0, 0, 0.5)")
      $(".dropdown-item").css("color", "white")
   }
   });


   $(document).ready(function() {
      $('body').css('display', 'none');
      $('body').fadeIn(500);
      $('a:not(.dropdown-toggle)').click(function() {
      event.preventDefault();
      newLocation = this.href;
      $('body').fadeOut(300, newpage);
      });
      function newpage() {
      window.location = newLocation;
      }
      });
    
      
 