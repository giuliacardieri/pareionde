const loadCardTemplate = function loadCardTemplate(id) {
  let template, html, db
  
  db = getElementDB(id)
  console.log(db)
  template = Handlebars.compile($('#details-template').html())
  html = template(db)

  $('.details').html(html)
}

$(function(){
	$('.main').on('click', '.card', function() {
		let id = $(this).attr('id')
		loadCardTemplate(id)
	  showWindow('details')
	})

  $('.window__icon').on('click', function() {
    hideWindow('details')
  })
})