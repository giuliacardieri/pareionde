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
			{ id: 0, campo: 'nome', ativo: true },
			{ id: 1, campo: 'temporada', ativo: true },
			{ id: 2, campo: 'episodio', ativo: true },
			{ id: 3, campo: 'data', ativo: true },
			{ id: 4, campo: 'tipo', ativo: true },
			{ id: 5, campo: 'motivacao', ativo: true },
			{ id: 6, campo: 'comentario', ativo: true },
			{ id: 6, campo: 'favorita', ativo: true }
	]

	lista_tipos = [
		{ id: 0, nome: 'Amazon Prime'},
		{ id: 1, nome: 'Baixada'},
		{ id: 2, nome: 'HBOgo'},
		{ id: 3, nome: 'Hulu'},
		{ id: 4, nome: 'Netflix'},
		{ id: 5, nome: 'Now'},
		{ id: 6, nome: 'Online'},
		{ id: 7, nome: 'TV'},	
		{ id: 8, nome: 'YouTube'}
	]

	model.lista_tipos = lista_tipos
	model.opcoes = opcoes

	localStorage.setItem('pareionde-modelo', JSON.stringify(model))
}

const changeModel = function changeModel(new_model) {
	localStorage.setItem('pareionde-modelo', JSON.stringify(new_model))
}