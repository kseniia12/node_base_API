const jwt = require('jsonwebtoken');

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}