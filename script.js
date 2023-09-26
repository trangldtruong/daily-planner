// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = document.querySelectorAll('.saveBtn')
let date = document.getElementById('currentDay')
let time = document.getElementById('currentTime')
date.textContent = dayjs().format('MMMM D, YYYY');
time.textContent = dayjs().format('h:mm A')

var hour = dayjs('H');

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


$(".saveBtn").click (function (event) {
  event.preventDefault();
  localStorage.getItem();
})
//$(function )
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
   

