var color = ""; 
$("input[type=color]").addClass("hide");
$(".fa-font").addClass("hide");
$(".fa-icons").addClass("hide");
$(".fa-camera").addClass("hide");

$(".fa-cog").click(function(event){

	$("input[type=color]").toggleClass("hide");
	$(".fa-font").toggleClass("hide");
	$(".fa-icons").toggleClass("hide");
	$(".fa-camera").toggleClass("hide");
	event.stopPropagation(); 
});

$("input[type=color]").click(function(event){
	event.stopPropagation();
});


$("input[type=color]").change(function(event){
	//console.log(event.target.value);
	color = event.target.value;
	$("body").css("background-color", color);
});

	//can't be body, body only ref content???
$(document).click(function(){
	color =  pickRandomColor()
	$(".quote").text(pickRandomQuote());
	$("body").css("background-color", color);
	$("input[type=color]").val(color);

});

function pickRandomColor(){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	var a = Math.random(); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickRandomQuote(){
	var quotes = [
		"You must expect great things of yourself before you can do them.", 
		"Motivation is what gets you started. Habit is what keeps you going.",
		"People rarely succeed unless they have fun in what they are doing.",
		"There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
		"Our greatest fear should not be of failure but of succeeding at things in life that don't really matter." ,
		"You've got to get up every morning with determination if you're going to go to bed with satisfaction." ,
		"You've got to get up every morning with determination if you're going to go to bed with satisfaction.", 
		"Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.", 
		"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
		"To accomplish great things, we must not only act, but also dream, not only plan, but also believe."
	];
	var num = Math.floor(Math.random()*quotes.length); 
	return quotes[num];
} 
