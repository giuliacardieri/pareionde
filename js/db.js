/* faz o sort no BD */
const sortDB = function sortDB(array, key) {
  return array.sort(function(a, b) {
    var x = a[key].toLowerCase()
    var y = b[key].toLowerCase()
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

/* filtra o BD e retorna um novo objeto com somente as séries favoritas */
const filterByFavorites = function filterByFavorites(array) {
  let new_db = []

  for (let i = 0; i < Object.keys(array).length; i++) {
    if (array[i].favorita === 1)
      new_db.push(array[i])
  }
  return new_db
}

/* marca uma série como favorita no BD */
const setAsFavorite = function setAsFavorite(id) {
  let db = getDB(),
  new_db = []

  for (let i = 0; i < Object.keys(db).length; i++) {
    if (db[i].id == id)
      db[i].favorita = 1
    new_db.push(db[i])
  }

  setDB(new_db)
}

/* desmarca uma série como favorita no BD */
const removeFromFavorites = function removeFromFavorites(id) {
  let db = getDB(),
  new_db = []

  for (let i = 0; i < Object.keys(db).length; i++) {
    if (db[i].id == id)
      db[i].favorita = null
    new_db.push(db[i])
  }

  setDB(new_db)
}

/* cria o BD no LocalStorage */
const setDB = function setDB(db) {
  localStorage.setItem('pareionde', JSON.stringify(db))
}

/* retorna o BD no LocalStorage */
const getDB = function getDB() {
  if (localStorage.getItem('pareionde'))
    return JSON.parse(localStorage.getItem('pareionde'))
  return null
}

/* retorna um elemento com determinada ID no BD */
const getElementDB = function getElementDB(id) {
	let db

  if (localStorage.getItem('pareionde')) {
    db = JSON.parse(localStorage.getItem('pareionde'))
    for (var i = 0; i < Object.keys(db).length; i++)
      if (db[i].id == id) {
        return db[i]
      }
  }
}

/* carrega/recarrega o template da aba Home com os dados do BD */
const loadHomeTemplate = function loadHomeTemplate() {  
  let template, html,
  db = []

  $('.main__wrapper').attr('hidden', true)

  if (getDB()) {
    db = getDB()
    template = Handlebars.compile($('#cards').html())
    html = template(sortDB(db, 'nome'))
    $('.main__home-wrapper').removeAttr('hidden').html(html)
  }  else
    $('.main__empty-wrapper').removeAttr('hidden')
}

/* carrega/recarrega o template da aba Favoritos com os dados do BD */
const loadFavoritesTemplate = function loadFavoriteTemplate() {
  let template, html, 
  db = []

  if (getDB())
    db = filterByFavorites(getDB())

  $('.main__wrapper').attr('hidden', true)

  if (db.length > 0) {
    template = Handlebars.compile($('#cards').html())
    html = template(sortDB(db, 'nome'))
    $('.main__favoritos-wrapper').removeAttr('hidden').html(html)
  } else {
    $('.main__empty-favorite-wrapper').removeAttr('hidden')
  }
}

/* carrega/recarrega o template da aba Meu Design com os dados do BD */
const loadDesignListaTemplate = function loadDesignListaTemplate() {
  let model,
  template,
  html

  $('.main__wrapper').attr('hidden', true)

  model = getModel().lista_tipos
  template = Handlebars.compile($('#meudesign-lista').html())
  html = template(model)
  $('.main__meudesign-wrapper').removeAttr('hidden')
  $('.accordion__lista-wrapper').html(html)
}

const loadDesignSeriesTemplate = function loadDesignListaTemplate() {
  let model,
  template,
  html

  $('.main__wrapper').attr('hidden', true)
  
  model = getModel().opcoes
  template = Handlebars.compile($('#meudesign-series').html())
  html = template(model)
  $('.main__meudesign-wrapper').removeAttr('hidden')
  $('.accordion__series-wrapper').html(html)
}

$(function(){
	if (getDB())
		loadHomeTemplate()
});