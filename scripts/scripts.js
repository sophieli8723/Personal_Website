$(document).scroll(function () {
   $("nav").toggleClass('colorChange', $(this).scrollTop() > 0.1*$("nav").height());
   if ($(this).scrollTop() > 0.1*$("nav").height()){
      $("nav").addClass('navbar-light');
      $("nav").removeClass('navbar-dark');
   }
   else {
      $("nav").addClass('navbar-dark')
      $("nav").removeClass('navbar-light')
   }
   });

   $(document).ready(function() {
      $('body').css('display', 'none');
      $('body').fadeIn(500);
      $('a').click(function() {
      event.preventDefault();
      newLocation = this.href;
      $('body').fadeOut(300, newpage);
      });
      function newpage() {
      window.location = newLocation;
      }
      });
    
      
 