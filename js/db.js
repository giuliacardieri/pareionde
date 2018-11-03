const sortDB = function sortDB(array, key) {
  return array.sort(function(a, b) {
    var x = a[key].toLowerCase()
    var y = b[key].toLowerCase()
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

const setDB = function setDB(db) {
   localStorage.setItem('pareionde', JSON.stringify(db))
   loadDBTemplate($('#home-template').html())
}

const getDB = function getDB() {
  if (localStorage.getItem('pareionde'))
    return JSON.parse(localStorage.getItem('pareionde'));
  return null;
}

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

const loadDBTemplate = function loadDBTemplate(source) {
  let template, html, db
  
  db = getDB()
  template = Handlebars.compile(source)
  html = template(sortDB(db, 'nome'))

  $('.main').html(html)
}

$(function(){
	if (getDB())
		loadDBTemplate($('#home-template').html())

});