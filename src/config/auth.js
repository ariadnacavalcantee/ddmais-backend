module.exports = {
  jwt: {
    secret: process.env.SECRET_JWT,
    expiresIn: '10d',
  },
};
