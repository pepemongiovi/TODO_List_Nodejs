module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
      title: DataTypes.STRING,
      status: DataTypes.STRING,
      description: DataTypes.TEXT
    });
  
    Task.associate = function (models) {
      models.task.belongsTo(models.user);
    };
  
    return Task;
};