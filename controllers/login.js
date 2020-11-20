const User = require('../models/user');

const jwt = require('jsonwebtoken');

const segredo = 'babado';

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.findUser(username);

    if (!user || user.password !== password)
      return res
        .status(401)
        .json({ message: 'Usuário não existe ou senha inválida' });

    const jwtOptions = {
      expiresIn: '15m',
      algorithm: 'HS256'
    }
    const { password: _, ...userWithoutPassword } = user;
    const token = jwt.sign(userWithoutPassword, segredo, jwtOptions);

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
