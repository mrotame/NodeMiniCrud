module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'TwitchTrackingApp',
  define: {
    timestamps: true,
    underscored: true,
  },
};