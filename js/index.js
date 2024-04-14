 const responsive = {
  0:{
    items:1
  } ,
  360:{
     items:1
   },
   640:{
     items:2
   },
   945:{
     items:3
   }
 }
 $(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

  $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
      });
   
     $('.owl-carousel').owlCarousel({
       loop:true,
       autoplay:true,
       autoplayTimeout:3000,
       responsive:responsive
       
      
     });
     $('.move a').click(function(){
       $('html,body').animate({
         scrollTop:0
       },1000)
     })

     AOS.init();
        

});