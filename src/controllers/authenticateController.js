const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { Admin: AdminModel } = require('../models/admin');
const auth = require('../config/auth');

const authenticateController = {
  create: async (req, res) => {
    try {
      const { body: { email, password } } = req;

      const admin = await AdminModel.findOne({ email });

      if (!admin) return res.status(404).send();

      const passwordMatch = await compare(password, admin.password);

      if (!passwordMatch) return res.status(404).send();

      const token = sign(
        { id: admin.id },
        auth.jwt.secret,
        {
          subject: admin.id,
          expiresIn: auth.jwt.expiresIn,
        },
      );

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).send();
    }
  },

};
module.exports = authenticateController;
