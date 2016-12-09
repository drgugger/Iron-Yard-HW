// $('.container')
// console.log(container);
//
// $('.h1')
// console.log(h1);
//
// $(.'site-text')
// console.log(site-text);
//
//
// var container = $('.container');
// console.log(container);
//
// var h1 = $('.h1');
// console.log(h1);
//
// var sitetext = $('.site-text');
// console.log(sitetext);
//
// var h1 = $('h1')
// h1.css('background-color', 'green');

var button = $('.color-change');


function changeColor(){
  $('.box').css('background-color', 'red');
}

$('.color-change').click(changeColor);
