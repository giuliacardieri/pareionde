/* mostra uma das janelas de sobrepor - formulário ou detalhes */
const showWindow = function showWindow(elem) {
  $('.window__' + elem).removeAttr('hidden')
  $('.btn-add').attr('hidden', true)

  setTimeout(() => {
    $('.window__' + elem).removeClass('window--hidden')
    $('.main').attr('hidden', true)
  }, 100)
}

/* esconde uma das janelas de sobrepor - formulário ou detalhes */
const hideWindow = function hideWindow(elem) {
  $('.window__' + elem).addClass('window--hidden')
  $('.btn-add').removeAttr('hidden')
}

/* fecha todas as janelas de sobrepor abertas */
const closeWindows = function closeWindows() {
  $('.window').addClass('window--hidden')
  $('.btn-add').removeAttr('hidden')
}

$(function() {
  $('.window').on('transitionend', function() {
    if ($(this).hasClass('window--hidden')) {
      $('.window').attr('hidden', 'true')
      $('.main').removeAttr('hidden')
    }
  })
})