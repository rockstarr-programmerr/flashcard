const { CardDeck } = require('../db/models')

const list = async (req, res) => {
  const decks = await CardDeck.findAll()
  return res.json(decks)
}

const create = async (req, res) => {
  const deck = await CardDeck.create(req.body)
  return res.status(201).json(deck)
}

const retrieve = async (req, res) => {
  const { pk } = req.params
  const deck = await CardDeck.findByPk(pk)
  if (deck !== null) {
    return res.json(deck)
  } else {
    return res.status(404).end()
  }
}

const update = async (req, res) => {
  const { pk } = req.params
  const [affectedRows, ] = await CardDeck.update(req.body, {
    where: { id: pk }
  })
  if (affectedRows > 0) {
    return res.status(204).end()
  } else {
    return res.status(404).end()
  }
}

const destroy = async (req, res) => {
  const { pk } = req.params
  const deletedRows = await CardDeck.destroy({
    where: { id: pk }
  })
  if (deletedRows > 0) {
    return res.status(204).end()
  } else {
    return res.status(404).end()
  }
}

module.exports = {
  list,
  create,
  retrieve,
  update,
  destroy
}
