const User = require('../models/users');
const request = require('../functions/requestFromApi')
const apiSettings = require('../config/apiSettings')
module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const {
        id,
        ref_id,
        twitch_user_id,
        login,
        display_name,
        type,
        broadcast_type,
        description,
        profile_image_url,
        offline_image_url,
        view_count,
        channel_created_at
    } = req.body;

    const user = await User.create({ id,
      ref_id,
      twitch_user_id,
      login,
      display_name,
      type,
      broadcast_type,
      description,
      profile_image_url,
      offline_image_url,
      view_count,
      channel_created_at });

    return res.json(user);
  },
  async insertAll(req, res) {
    result = await request(apiSettings.endpoint,apiSettings.token);

    data = result.data['data']
    console.log(result)
    data.forEach(async (item,index,arr) => {
      let user = await User.create(item).then().catch((err)=> {
        return 
      })
    })
    return res.json({'message':'All data inserted into DB','status':200})
  }
};