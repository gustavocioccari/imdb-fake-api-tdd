const { User } = require('../models')

module.exports = {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    if (!await user.checkPassword(password)) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    if (user.is_active === false) {
      await User.update({ is_active: true }, { where: { email } })
      user.is_active = true
    }

    return res.status(200).json({ user, token: user.generateToken() })
  }
}
