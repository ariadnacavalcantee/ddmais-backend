const { verify } = require('jsonwebtoken');

const authConfig = require('../config/auth');

module.exports = function enduredAuthentication(request, response, next) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send('unauthorized!');
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub } = verify(token, authConfig.jwt.secret);

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).send('unauthorized!');
  }
};
