const jwt = require('jsonwebtoken');

const Model = require('../models/user')

const segredo = 'babado';

module.exports = async (req, res, next) => {

  const token = req.headers.authorization;

  if(!token) return res.status(401).json({ message: 'token não encontrado'})

  try{
    
    const decoded = jwt.verify(token, segredo);
    const user = await Model.findUser(decoded.username);

    if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário do token'});

    req.user = user;
    
    next()

  } catch (e) {

    return res.status(401).json({ message: 'token inválido'})
  }


}
