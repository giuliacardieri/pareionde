const getModel = function getModel() {
  if (!localStorage.getItem('pareionde-modelo'))
	  setModel()
  return JSON.parse(localStorage.getItem('pareionde-modelo'))
}

const setModel = function setModel() {
	let model = new Object(),
	options, 
	lista_tipos

	opcoes = [
			{ id: 0, campo: 'nome', nome: 'Nome', input: true, checkbox: false, select: false, tipo: 'text', editavel: false, ativo: true },
			{ id: 1, campo: 'temporada', nome: 'Temporada', input: true, checkbox: false, select: false, tipo: 'number', editavel: true, ativo: true },
			{ id: 2, campo: 'episodio', nome: 'Episódio', input: true, checkbox: false, select: false, tipo: 'number', editavel: true, ativo: true },
			{ id: 3, campo: 'data', nome: 'Assistida por último em', input: true, checkbox: false, select: false, tipo: 'date', editavel: true, descricao: 'Data em que a série foi assistida pela última vez', ativo: true },
			{ id: 4, campo: 'tipo', nome: 'Como você assiste?', input: false, checkbox: false, select: true, tipo: null, editavel: true, descricao: 'Plataforma que você costuma assistir a série', ativo: true },
			{ id: 5, campo: 'motivacao', nome: 'Motivação para continuar assistindo', input: true, checkbox: false, select: false, tipo: 'number', editavel: true, descricao: 'Valor entre 0-10 que indica o quanto você quer continuar assistindo essa série', ativo: true },
			{ id: 6, campo: 'comentario', nome: 'Por que você parou de assistir?', input: true, checkbox: false, select: false, tipo: 'text', editavel: true, descricao: 'Comentário sobre o motivo de você parar de assistir a série', ativo: true },
			{ id: 6, campo: 'favorita', nome: 'Marcar como favorita', input: false, checkbox: true, select: false, tipo: null, editavel: false, ativo: true }
	]

	lista_tipos = [
		{ id: 'Amazon Prime', nome: 'Amazon Prime'},
		{ id: 'Baixada', nome: 'Baixada'},
		{ id: 'HBOgo', nome: 'HBOgo'},
		{ id: 'Hulu', nome: 'Hulu'},
		{ id: 'Netflix', nome: 'Netflix'},
		{ id: 'Now', nome: 'Now'},
		{ id: 'Online', nome: 'Online'},
		{ id: 'TV', nome: 'TV'},	
		{ id: 'YouTube', nome: 'YouTube'}
	]

	model.lista_tipos = lista_tipos
	model.opcoes = opcoes

	localStorage.setItem('pareionde-modelo', JSON.stringify(model))
}

const changeModel = function changeModel(new_model) {
	localStorage.setItem('pareionde-modelo', JSON.stringify(new_model))
}

const loadListaTemplate = function loadListaTemplate() {
  let model,
  template,
  html
  
  model = getModel().lista_tipos
  template = Handlebars.compile($('#lista-de-series').html())
  html = template(model)

  $('.lista__wrapper').html(html)
}