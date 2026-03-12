/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update collection data
  unmarshal({
    "name": "artiste"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // update collection data
  unmarshal({
    "name": "Artiste"
  }, collection)

  return app.save(collection)
})
