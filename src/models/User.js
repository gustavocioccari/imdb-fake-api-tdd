module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    role: DataTypes.ENUM('admin', 'user'),
    is_active: DataTypes.BOOLEAN
  })
  return User
}
