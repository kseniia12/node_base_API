const jwt = require('jsonwebtoken');

export const generateAccessToken = (username) => {
  console.log(">>",jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' }))
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }
  