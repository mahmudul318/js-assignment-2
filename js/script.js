$(document).ready(function(){

	alert("wellceome to ss");
	$("p").click(function(){
		$(this).hide();
	});

	$("#p1").mouseenter(function(){
   	 alert("You entered p1!");
  	});

  	$("#p2").mouseleave(function(){
   	 alert("Bye! You now leave p2!");
  	});

  	$("input").focus(function(){
   		$(this).css("background-color", "yellow");
  	});
 	$("input").blur(function(){
    	$(this).css("background-color", "green");
 	});

 	$("#flip").click(function(){
    	$("#panel").slideToggle("slow");
  	});

  	$("#flip1").click(function(){
    	$("#panel1").slideUp("slow");
  	});

  	$("#flip2").click(function(){
    	$("#panel2").slideDown("slow");
  	});

  	$(".ex .hide").click(function(){
    	$(this).parents(".ex").hide("slow");
  	});

  	$("#hide").click(function(){
    	$("#p3").hide();
 	});
  	$("#show").click(function(){
    	$("#p3").show();
  	});

  	$("#start").click(function(){
    	$("#div").animate({right: '1000px'}, 5000);
    	$("#div").animate({fontSize: '3em'}, 5000);
  	});
  
  	$("#stop").click(function(){
    	$("#div").stop();
  	});

  	$("#stop2").click(function(){
    	$("#div").stop(true);
  	});

  	$("#stop3").click(function(){
    	$("#div").stop(true, true);
  	}); 

  	$("#btn2").click(function(){
    var div = $("#div2");
    	div.animate({height: '300px', opacity: '0.4'}, "slow");
    	div.animate({width: '300px', opacity: '0.8'}, "slow");
    	div.animate({height: '100px', opacity: '0.4'}, "slow");
    	div.animate({width: '100px', opacity: '0.8'}, "slow");
  	});

  	$("#btn3").click(function(){
   	 $("#div3").animate({
     	 height: 'toggle'
  	  });
  	});

  	$("#btn4").click(function(){
    	$("#div4").animate({
      		left: '50px',
      		height: '+=50px',
      		width: '+=50px'
    	});
  	});

  	$("#btn5").click(function(){
    	$("#div5").animate({
      		right: '250px',
      		opacity: '0.5',
     		 height: '150px',
     		 width: '150px'
    	});
  	});

  	$("#btn8").click(function(){
   		$("#div6").fadeTo("slow", 0.15);
    	$("#div7").fadeTo("slow", 0.4);
    	$("#div8").fadeTo("slow", 0.7);
  	});

  	$("#btn11").click(function(){
    	$("#div9").fadeToggle();
    	$("#div10").fadeToggle("slow");
    	$("#div11").fadeToggle(3000);
  	});

  	$("#btn14").click(function(){
    	$("#div12").fadeIn();
    	$("#div13").fadeIn("slow");
    	$("#div14").fadeIn(3000);
  	});
});