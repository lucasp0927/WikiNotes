 $(document).ready(function(){
   $('.outline-2').toggle(function(){
     $('.outline-3',this).hide("slow");
     $('.outline-text-2',this).hide("slow");
   }, function(){
     $('.outline-3',this).show("slow");
     $('.outline-text-2',this).show("slow");
   });
   $('.outline-3').toggle(function(){
     $('.outline-4',this).hide("slow");
     $('.outline-text-3',this).hide("slow");
   }, function(){
     $('.outline-4',this).show("slow");
     $('.outline-text-3',this).show("slow");
   });
 });

