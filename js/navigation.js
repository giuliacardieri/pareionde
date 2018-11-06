/* chama a função de carregar o template de acordo com o link clicado no menu */
const setTemplate = function setTemplate(id) {
	if (id === 'meudesign') {
		loadDesignListaTemplate()
		loadDesignSeriesTemplate()
  	$('.btn-add').attr('hidden', true)
	}
	else if (id === 'home') {
		loadHomeTemplate()
  		$('.btn-add').removeAttr('hidden')
	} else {
		loadFavoritesTemplate()
  		$('.btn-add').removeAttr('hidden')
	}
}

/* atualiza visualmente qual o link ativo no menu */
const setActiveLink = function setActiveLink(id) {
	$('.nav-link').removeClass('active')
	$('.nav-link#' + id ).addClass('active')
}

$(function(){
	$('.header__h1').on('click', function() {
		loadHomeTemplate()
	})

	$('.nav-link').on('click', function() {
		let id = $(this).attr('id')

		closeWindows()
		setTemplate(id)
		setActiveLink(id)
	})
})