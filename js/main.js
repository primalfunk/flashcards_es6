$(document).ready(function () {
  const set_up = ( count, start_index = 1 ) => {
    const answers = [
      "Javascript",
      "ES6",
      "1997",
      "Let and Const",
      "Var",
      "Const",
      "Let",
      "Default parameters",
      "Named parameters",
      "Rest parameters",
      "Infinite",
      "Spread operator",
      "Arrow function",
      "Arrow function",
      "Object initializer"
    ]
    const questions = [
      "This is an implementation of ECMAscript.",
      "This is the newest version of ECMAscript.",
      "Before ES6, the last big update was this year.",
      "These are two new ways to declare variables in ES6.",
      `This variable declaration method is hoisted and scopes to the nearest function.`,
      `This variable declaration method results in a read-only value.`,
      `This variable declaration method scopes the variable to the nearest set of {}.`,
      `In: function exampleFunction( parameter = [] ) { code }, \"parameter=[]\" is an example of this new feature.`,
      `In: function exampleFunction( param1, { a, b, c } = {} ) { code } shows an example of this new feature.`,
      `In: function exampleFunction( param1, ...params ) { code } is an example of this new feature`,
      `How many parameters can you pass into a function which specifies a rest parameter as the last value?`,
      `This ES6 feature allows you to deconstruct arrays with a number of simplifying applications.`,
      `This function declaration syntax reduces key strokes, simplifies some scoping issues, and looks cooler.`,
      `In: const myConstFunction = (param) => { <code> }, the => is one of these.`,
      `In ES2015, when the keys and variable names match, we can use this new feature to clean up code.`
    ]

    for(let i = start_index; i < count + start_index; i++) {
      let qaIndex = Math.floor(Math.random() * 15)
      $('.wrapper').append(`<div class=\"card${i}\"></div>`)
      $('.card' + i).append(`<p class="question">${questions[qaIndex]}</p>`)
      $('.card' + i).append(`<p class="answer">${answers[qaIndex]}</p>`)
      $('.answer').hide()
    }

  }

  const wire_up = () => {
    // connect New button
    $('.new_button').click( () => {
      let indices = []
      new_index = 0
      $('.wrapper').children('div').each(function (i, obj) {
        //find the highest class number
        indices.push( ($( obj ).attr('class')).slice(4) )
      })
      set_up(1, Math.max(...indices) + 1)
      console.log("Creating new card element: card" + Math.max(...indices))
    })
    // connect Delete button
    $('.delete_button').click ( () => {
      let indices = []
      new_index = 0
      $('.wrapper').children('div').each(function (i, obj) {
        //find the lowest class number
        indices.push( ($( obj ).attr('class')).slice(4) )
      })
      console.log("Removing element class card" + Math.min(...indices))
      $('.card' + Math.min(...indices)).remove()
      indices = []
    })
    // connect the Edit button
    $('.edit_button').click ( () => {
      let to_update
      let indices = []
      new_index = 0
      $('.wrapper').children('div').each(function (i, obj) {
        //find the lowest class number
        indices.push(($(obj).attr('class')).slice(4))
      })
      to_update = $('.card' + Math.min(...indices))
      to_update.find('.question').remove()
      to_update.append(`<p class="question">${$('textarea').val()}</p>`)
    })
    // wire up the Cards
    $('.wrapper').children('div').each(function (i, obj) {
      $(obj).click( () => {
        if ($(obj).find('.question').is(":visible")) {
          $(obj).find('.question').hide()
          $(obj).find('.answer').show()
          console.log('This is happening.')
        } else {
          $(obj).find('.question').show()
          $(obj).find('.answer').hide()
        }
      })
    })
  }
  set_up(8)
  wire_up()
});