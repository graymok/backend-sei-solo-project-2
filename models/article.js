'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.article.belongsToMany(models.user, {through: 'user_article'})
    }
  };
  article.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};