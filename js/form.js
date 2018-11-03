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

  setDB(old_db)
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

  $('.add-form__icon, .btn-save').on('click', function() {
    hideWindow('add-form')
  })

})