/* pega os dados do form e muda pro formato necessário do JSON do BD */
/* checa se os dados são válidos antes de submeter, se sim ele coloca no BD e mostra novamente a lista do Home */
const submitForm = function submitForm(data) {
  let final_data = {}
  let old_db = []

  final_data.nome = data[0].value
  final_data.temporada = data[1].value
  final_data.episodio = data[2].value
  final_data.tipo = data[4].value
  final_data.motivacao = data[5].value
  final_data.comentario = data[6].value

  if (!data[3].value)
    final_data.data = null
  else
    final_data.data = data[3].value

  if (data[4].value === '')
    final_data.tipo = null
  else
    final_data.tipo = data[4].value
  
  if (data.length > 7)
  	final_data.favorita = 1
 	else
 		final_data.favorita = null

 	if (getDB()) {
  	old_db = getDB()
 		final_data.id = old_db.length
 	} else {
 		final_data.id = 0
 	}

  old_db.push(final_data)

  if (formValid(final_data)) {
    setDB(old_db)
    loadHomeTemplate()
    hideWindow('add-form')
    $('.add-form__form').trigger('reset')
  }
}

/* checa se o formulário é válido (se os elementos com required não estão vazios) */
const formValid = function formValid(data) {
  console.log(JSON.stringify(data))
  if (data.nome.trim().length === 0 || data.temporada.trim().length === 0 
    || data.episodio.trim().length === 0 || data.motivacao.trim().length === 0)
    return false
  return true
}

$(function(){

  $('.btn-add').on('click', function() {
    showWindow('add-form')
  })

  $('.add-form__form').on('submit', function(e) {
    e.preventDefault()
    submitForm($(this).serializeArray())
    return false
  })

  $('.window__icon--add-form').on('click', function() {
    hideWindow('add-form')
  })

})