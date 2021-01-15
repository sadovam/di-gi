$(document).ready(function() {
 
    var owl = $("#intro__owl");

    $("#intro__owl").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });

  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".previous").click(function(){
    owl.trigger('owl.prev');
  })

  $("#testimonial__owl").owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });
   
  });