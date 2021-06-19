const cardDeckCtrl = require('../controllers/card-deck')

const routes = app => {
  app.route('/card-deck')
    .get(cardDeckCtrl.list)
    .post(cardDeckCtrl.create)

  app.route('/card-deck/:pk')
    .get(cardDeckCtrl.retrieve)
    .put(cardDeckCtrl.update)
    .delete(cardDeckCtrl.destroy)
}

module.exports = {
  routes
}
