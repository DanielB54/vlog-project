const User = require('./user');
const Vidpost = require('./vidpost');

User.hasMany(Vidpost, {
  foreignKey: 'user_id',
});
Vidpost.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Vidpost };