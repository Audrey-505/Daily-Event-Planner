// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. **document.ready()?
$(document).ready(function () {
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. **this is saying that if the id of time block 4pm for ex is '4o' than '4o' should be the key to retrieve the event
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //var dateEl = $('<h3>')
  var dateEl = $('#currentDay')
  var todayDate = moment().format('dddd')
  dateEl.text(`Today is: ${todayDate}`)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  /* var valueOfEvent = 10
  var saveBtn = $('.btn')
  saveBtn.on('click', function (event){
  var hourBlock = event.target.parentNode.id 
  console.log(hourBlock)
  //localStorage.setItem(hourBlock, valueOfEvent)
  //localStorage.getItem(hourBlock)
  }) */
  var valueOfEvent = 10
  $('.btn').on('click', function (){
    var hourBlock = $(this).parent().attr('id')
    //console.log(hourBlock)
    //localStorage.setItem(hourBlock, valueOfEvent)
    //localStorage.getItem(hourBlock)
    })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  $('.hour').each(function (){
    var classBlock = Number($(this).parent().attr('id').substring(5,7))
    //console.log(`classblock ${typeof(classBlock)}`)
    //var classHolder = $('.style')
    var currentHour = Number(moment().format("HH"))
    //var currentHour = 14 (used for playing with dif times)
    //console.log(typeof(currentHour))

    if(currentHour > classBlock){
      $(this).addClass('past')
      //$(this).addClass('present')
      /*classHolder.attr('class', 'table-danger')*/
    } else if (currentHour === classBlock){
      /*classHolder.attr('class', 'table-success')*/
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      $(this).removeClass('present')
      $(this).addClass('future')

    } 

    /*if(currentHour === classBlock){
      $(this).addClass('present')
      /*classHolder.attr('class', 'table-danger')
    } else if (currentHour > classBlock){
      /*classHolder.attr('class', 'table-success')
      $(this).removeClass('present')
      $(this).addClass('past')
    } else if (currentHour < classBlock){
      $(this).removeClass('past')
      $(this).addClass('future')
      
    }*/

  })
  
});
