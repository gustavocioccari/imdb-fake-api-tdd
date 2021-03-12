const { User } = require('../models')

module.exports = {
  async store (req, res) {
    const { name, email, password, role } = req.body
    try {
      if (await User.findOne({ where: { email } })) {
        return res.status(400).send('This email is already registered')
      }

      const user = await User.create({
        name,
        email,
        password,
        role,
        is_active: true // could be set as default when making migrations
      })

      user.password_hash = undefined

      return res.status(201).json({ user, token: user.generateToken() })
    } catch (err) {
      return console.log(err)
    }
  },

  async update (req, res) {
    const userId = req.userId
    try {
      const user = await User.findOne({ where: { id: userId } })

      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      }

      await User.update(req.body, { where: { id: userId } })

      const userUpdated = await User.findOne({ where: { id: userId } })
      userUpdated.password_hash = undefined

      return res.status(200).json({ userUpdated })
    } catch (err) {
      return console.log(err)
    }
  },

  async deactivate (req, res) {
    const userId = req.userId

    try {
      const user = await User.findOne({ where: { id: userId } })

      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      }

      await User.update({ is_active: false }, { where: { id: userId } })

      const userUpdated = await User.findOne({ where: { id: userId } })
      userUpdated.password_hash = undefined

      return res.status(200).json({ userUpdated })
    } catch (err) {
      return console.log(err)
    }
  }
}
