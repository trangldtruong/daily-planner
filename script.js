var saveBtn = document.querySelectorAll('.saveBtn')
let date = document.getElementById('currentDay')
let time = document.getElementById('currentTime')
date.textContent = dayjs().format('MMMM D, YYYY');
time.textContent = dayjs().format('h:mm A')

var hour = dayjs().format('h a');
console.log(hour);
//apply past, present, future to each time block
$('.time-block').each(function() {
  var currentTime = parseInt(hour);
  console.log(currentTime);
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);

if (timeBlock < currentTime) {
  $(this).addClass("past");
} else if (timeBlock === currentTime) {
  $(this).addClass("present");
} else if (timeBlock > currentTime) {
  $(this).addClass("future");
}
});

  
//add an event listener to btn to save list items in local storage
$(".saveBtn").click (function (event) {
  event.preventDefault()
  let value = $(this).siblings('.description').val();
  console.log(value);
  let timeChosen = $(this).parent().attr('id');
  console.log(timeChosen);
  localStorage.setItem(timeChosen, value);

})

//using jQuerry to get items from Local storage
var hourNine = localStorage.getItem('hour-9');
$("#hour-9 .description").val(hourNine)
var hourTen = localStorage.getItem('hour-10');
$("#hour-10 .description").val(hourTen)
var hourEleven = localStorage.getItem('hour-11');
$("#hour-11 .description").val(hourEleven)
var hourTwelve = localStorage.getItem('hour-12');
$("#hour-12 .description").val(hourTwelve)
var hourOne = localStorage.getItem('hour-1');
$("#hour-1 .description").val(hourOne)
var hourTwo = localStorage.getItem('hour-2');
$("#hour-2 .description").val(hourTwo)
var hourThree = localStorage.getItem('hour-3');
$("#hour-3 .description").val(hourThree)
var hourFour = localStorage.getItem('hour-4');
$("#hour-4 .description").val(hourFour)
var hourFive = localStorage.getItem('hour-5');
$("#hour-5 .description").val(hourFive)

  
  
   

