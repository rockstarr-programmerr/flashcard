const { CardDeck, Card } = require('../db/models')


const create = async (req, res) => {
  const card = await Card.create(req.body)
  return res.status(201).json(card)
}

const update = async (req, res) => {
  const { id } = req.params
  const [affectedRows, ] = await Card.update(req.body, {
    where: { id }
  })
  if (affectedRows > 0) {
    return res.status(204).end()
  } else {
    return res.status(404).end()
  }
}

const destroy = async (req, res) => {
  const { id } = req.params
  const deletedRows = await Card.destroy({
    where: { id }
  })
  if (deletedRows > 0) {
    return res.status(204).end()
  } else {
    return res.status(404).end()
  }
}


module.exports = {
  create,
  update,
  destroy
}
