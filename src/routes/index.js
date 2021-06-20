const cardDeckCtrl = require('../controllers/card-deck')
const cardCtrl = require('../controllers/card')

const routes = app => {
  app.route('/card-deck')
    .get(cardDeckCtrl.list)
    .post(cardDeckCtrl.create)

  app.route('/card-deck/:id')
    .get(cardDeckCtrl.retrieve)
    .patch(cardDeckCtrl.update)
    .delete(cardDeckCtrl.destroy)

  app.route('/card-deck/:id/get-cards/')
    .get(cardDeckCtrl.getCards)

  app.route('/card')
    .post(cardCtrl.create)

  app.route('/card/:id')
    .patch(cardCtrl.update)
    .delete(cardCtrl.destroy)
}

module.exports = {
  routes
}
