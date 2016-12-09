var n = 0


function clickbuynow(){
  $('.buynow').css('background-color', 'yellow');
  $('.buynow').text('Added to Cart!');
n = n + 1
$('.count').text(n);

function changeBack (){
  $('.buynow').css('background-color', 'white');
  $('.buynow').text('Buy Now!');
}
setTimeout(changeBack,600);
}
$('.buynow').click(clickbuynow);
