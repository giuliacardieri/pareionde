const showWindow = function showWindow(elem) {
  $('.window__' + elem).removeAttr('hidden')

  setTimeout(() => {
    $('.window__' + elem).removeClass('window--hidden')
    $('.main').attr('hidden', 'true')
  }, 100)
}

const hideWindow = function hideWindow(elem) {
  $('.window__' + elem).addClass('window--hidden')
}

$(function() {
  $('.window').on('transitionend', function() {
    if ($(this).hasClass('window--hidden')) {
      $('.window__add-form').attr('hidden', 'true')
      $('.main').removeAttr('hidden')
    }
  })
})