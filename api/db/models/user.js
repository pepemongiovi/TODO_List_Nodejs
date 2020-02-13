module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    User.associate = function(models) {
      models.user.hasMany(models.task);
    };
  
    return User;
};