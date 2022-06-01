'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
      },
      ref_id: {
        type:Sequelize.STRING,
      },
      twitch_user_id: {
        type:Sequelize.STRING,
      },
      login: {
        type:Sequelize.STRING,
      },
      display_name: {
        type:Sequelize.STRING,
      },
      type: {
        type:Sequelize.STRING,
      },
      broadcaster_type: {
        type:Sequelize.STRING,
      },
      description: {
        type:Sequelize.TEXT,
      },
      profile_image_url: {
        type:Sequelize.STRING,
      },
      offline_image_url: {
        type:Sequelize.STRING,
      },
      view_count: {
        type:Sequelize.INTEGER,
      },
      channel_created_at: {
        type:Sequelize.DATE,
      },
      created_at: {
        type:Sequelize.STRING,
        allowNull:false
      },
      updated_at: {
        type:Sequelize.STRING,
        allowNull:false
      }
      
    
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
