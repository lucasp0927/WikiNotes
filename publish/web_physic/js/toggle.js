 $(document).ready(function(){
   $('h2').toggle(function(){
     $(this).parent().find('.outline-3').hide("slow");
     $(this).parent().find('.outline-text-2').hide("slow");
   }, function(){
     $(this).parent().find('.outline-3').show("slow");
     $(this).parent().find('.outline-text-2').show("slow");
   });
   $('h3').toggle(function(){
     $(this).parent().find('.outline-4').hide("slow");
     $(this).parent().find('.outline-text-3').hide("slow");
   }, function(){
     $(this).parent().find('.outline-4').show("slow");
     $(this).parent().find('.outline-text-3').show("slow");
   });
 });

