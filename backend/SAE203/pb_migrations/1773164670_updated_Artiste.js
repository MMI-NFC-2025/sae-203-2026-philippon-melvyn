/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2638798251",
    "maxSelect": 10,
    "name": "genre_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Pop",
      "Rock",
      "Jazz",
      "Classique",
      "Électro",
      "Reggae",
      "Country",
      "Folk",
      "Soul",
      "Funk"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2638798251",
    "maxSelect": 1,
    "name": "genre_musical",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Pop",
      "Rock",
      "Jazz",
      "Classique",
      "Électro",
      "Reggae",
      "Country",
      "Folk",
      "Soul",
      "Funk"
    ]
  }))

  return app.save(collection)
})
