const { hash } = require('bcryptjs');
const { Admin: AdminModel } = require('../models/admin');

const adminController = {
  create: async (req, res) => {
    try {
      const { body } = req;

      const password = await hash(body.password, 12);
      const admin = await AdminModel.create({ ...body, password });

      res.json(admin);
    } catch (error) {
      // console.log(error);
    }
  },

};
module.exports = adminController;
