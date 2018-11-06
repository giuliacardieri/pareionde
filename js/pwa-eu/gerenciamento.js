const deletePlatform = function deletePlataform(id) {
	let old_model = getModel(),
	new_model_lista = [],
	new_model = new Object(),
	j = 0

  for (let i = 0; i < Object.keys(old_model.lista_tipos).length; i++) {
    if (old_model.lista_tipos[i].id != id) {
      new_model_lista[j] = old_model.lista_tipos[i]
      j++
    }
  }
   
  new_model.opcoes = old_model.opcoes
  new_model.lista_tipos = new_model_lista

  changeModel(new_model)
  loadDesignListaTemplate()
}

const addPlatform = function addPlatform(data) {
	let old_model = getModel(),
	new_model_lista = [],
	new_model = new Object(),
	new_platform

	if (data[0].value.trim().length === 0 || data[0].value.trim() === '')
		return false

  for (let i = 0; i < Object.keys(old_model.lista_tipos).length; i++) {
    new_model_lista[i] = old_model.lista_tipos[i]
  }

  new_platform = {
  	id: old_model.lista_tipos.length,
  	nome: data[0].value
	}

  new_model_lista[old_model.lista_tipos.length] = new_platform
  new_model.opcoes = old_model.opcoes
  new_model.lista_tipos = new_model_lista

  changeModel(new_model)
  loadDesignListaTemplate()
  return true
}

$(function(){
	$('.main__meudesign-wrapper').on('click', '.accordion__btn-remove', function() {
		let id = $(this).attr('data-id')

		deletePlatform(id)
		$(this).parent().attr('hidden', true)
	})

	$('.main__meudesign-wrapper').on('click', '.btn-add-plataforma', function() {
		$( this ).attr('hidden', true)
		$('.btn-save-plataforma, .accordion__form').removeAttr('hidden')
	})

  $('.main__meudesign-wrapper').on('submit', '.accordion__form', function(e) {
    e.preventDefault()
    if (addPlatform($(this).serializeArray())) {
			$('.btn-save-plataforma, .accordion__form').attr('hidden', true)
			$('.btn-add-plataforma').removeAttr('hidden')
    	return false
    }
  })
})