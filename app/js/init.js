(function($){
  $(function(){

    $('.parallax').parallax();
    $('.modal').modal();
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space
