// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. **document.ready()?
$(document).ready(function () {
  
  var dateEl = $('#currentDay')
  var todayDate = moment().format('dddd')
  dateEl.text(`Today is: ${todayDate}`)

  
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
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  var textArea = $('<textarea>')
  var textSpace = $('.hour')
  textArea.addClass('text')
  textArea.attr('id', 'textid')
  textArea.attr('placeholder', 'Type your event here...')
  textSpace.append(textArea)

  $('.btn').click(function (){
    var event = $(this).siblings().children().val()
    //var event = $(this).siblings('.text').text() why did this not work 
    var hourBlock = $(this).parent().attr('id')
    localStorage.setItem(hourBlock, event)
  })

  $('.btn').each(function(){
    $(this).siblings().children().val(localStorage.getItem($(this).parent().attr('id')))
  })
  
  
});

var clearBtn = $('#delete')
clearBtn.on('click', function(){
  localStorage.clear();
  $('.btn').siblings().children().val('')
})
