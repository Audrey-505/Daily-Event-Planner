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
  var currentHour = moment().format('h')
  var fullReadyHour = `hour-${currentHour}`
  var readyHour = fullReadyHour.substring(5,7)
  var timeNow = parseInt(readyHour)

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  //block 9
  var nineHour = $('#hour-9')
  var idOfNine = nineHour.attr('id')
  var nineHourReady = idOfNine.substring(5,7)
  var nineSelec = parseInt(nineHourReady)
  var classHolder9 = $('#nine')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === nineSelec){
  classHolder9.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < nineSelec){
    classHolder9.attr('class', 'table-success')
  } else {
    classHolder9.attr('class', 'table-secondary')
  }
  
  //block 10
  var tenHour = $('#hour-10')
  var idOfTen = tenHour.attr('id')
  var tenHourReady = idOfTen.substring(5,7)
  var tenSelec = parseInt(tenHourReady)
  var classHolder10 = $('#ten')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === tenSelec){
  classHolder10.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < tenSelec){
    classHolder10.attr('class', 'table-success')
  } else {
    classHolder10.attr('class', 'table-secondary')
  }

  //block 11
  var elevenHour = $('#hour-11')
  var idOfEleven = elevenHour.attr('id')
  var elevenHourReady = idOfEleven.substring(5,7)
  var elevenSelec = parseInt(elevenHourReady)
  var classHolder11 = $('#eleven')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === elevenSelec){
  classHolder11.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < elevenSelec){
    classHolder11.attr('class', 'table-success')
  } else {
    classHolder11.attr('class', 'table-secondary')
  }

  //block 12
  var tweleveHour = $('#hour-12')
  var idOfTweleve = tweleveHour.attr('id')
  var tweleveHourReady = idOfTweleve.substring(5,7)
  var tweleveSelec = parseInt(tweleveHourReady)
  var classHolder12 = $('#tweleve')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === tweleveSelec){
    classHolder12.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < tweleveSelec){
    classHolder12.attr('class', 'table-success')
  } else {
    classHolder12.attr('class', 'table-secondary')
  }

  //block 1
  var oneHour = $('#hour-1')
  var idOfOne = oneHour.attr('id')
  var oneHourReady = idOfOne.substring(5,7)
  var oneSelec = parseInt(oneHourReady)
  console.log(oneSelec)
  var classHolder1 = $('#one')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === oneSelec){
  classHolder1.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < oneSelec){
    classHolder1.attr('class', 'table-success')
  } else {
    classHolder1.attr('class', 'table-secondary')
  }

  //block 2
  var twoHour = $('#hour-2')
  var idOfTwo = twoHour.attr('id')
  var twoHourReady = idOfTwo.substring(5,7)
  var twoSelec = parseInt(twoHourReady)
  console.log(twoSelec)
  var classHolder2 = $('#two')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === twoSelec){
  classHolder2.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < twoSelec){
    classHolder2.attr('class', 'table-success')
  } else {
    classHolder2.attr('class', 'table-secondary')
  }

  //block 3
  var threeHour = $('#hour-3')
  var idOfThree = threeHour.attr('id')
  var threeHourReady = idOfThree.substring(5,7)
  var threeSelec = parseInt(threeHourReady)
  var classHolder3 = $('#three')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === threeSelec){
  classHolder3.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < threeSelec){
    classHolder3.attr('class', 'table-success')
  } else {
    classHolder3.attr('class', 'table-secondary')
  }

  //block 4
  var fourHour = $('#hour-4')
  var idOfFour = fourHour.attr('id')
  var fourHourReady = idOfFour.substring(5,7)
  var fourSelec = parseInt(fourHourReady)
  var classHolder4 = $('#four')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === fourSelec){
  classHolder4.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < fourSelec){
    classHolder4.attr('class', 'table-success')
  } else {
    classHolder4.attr('class', 'table-secondary')
  }

  //block 5
  var fiveHour = $('#hour-5')
  var idOfFive = fiveHour.attr('id')
  var fiveHourReady = idOfFive.substring(5,7)
  var fiveSelec = parseInt(fiveHourReady)
  var classHolder5 = $('#five')

  if(timeNow === 1 || 2 || 3 || 4 || 5){
    nineSelec = 0
    tenSelec = 0
    elevenSelec = 0
    tweleveSelec = 0 
  }

  if (timeNow === fiveSelec){
  classHolder5.attr('class', 'table-danger')//remove hardcoded past present and future classes from html
  } else if (timeNow < fiveSelec){
    classHolder5.attr('class', 'table-success')
  } else {
    classHolder5.attr('class', 'table-secondary')
  }
 
  
});
