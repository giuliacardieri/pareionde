/* carrega/recarrega o template que mostra os detalhes de uma série */
const loadDetailsTemplate = function loadCardTemplate(id) {
  let template, html, db
  
  db = getElementDB(id)
  template = Handlebars.compile($('#details-template').html())
  html = template(db)

  $('.details').html(html)
}

$(function(){
	$('.main').on('click', '.card--serie', function() {
		let id = $(this).attr('id')
		loadDetailsTemplate(id)
	  showWindow('details')
	})

  $('.window__icon--details').on('click', function() {
    hideWindow('details')
  })

  $('.window__details').on('click', '.btn-fav', function() {
    let id = $(this).attr('data-id')
    setAsFavorite(id)
    loadDetailsTemplate(id)
  })

  $('.window__details').on('click', '.btn-remove-fav', function() {
    let id = $(this).attr('data-id')
    removeFromFavorites(id)
    loadDetailsTemplate(id)
  })
})