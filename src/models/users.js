const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
        id:{type:DataTypes.INTEGER,primaryKey:true,field:"id",allowNull:false},
        ref_id:DataTypes.STRING,
        twitch_user_id:DataTypes.STRING,
        login:DataTypes.STRING,
        display_name:DataTypes.STRING,
        type:DataTypes.STRING,
        broadcaster_type:DataTypes.STRING,
        description:DataTypes.TEXT,
        profile_image_url:DataTypes.STRING,
        offline_image_url:DataTypes.STRING,
        view_count:DataTypes.INTEGER,
        channel_created_at:DataTypes.DATE,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
  }
}

module.exports = User;