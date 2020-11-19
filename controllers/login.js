const User = require('../models/user');

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

    return res.status(200).json({ message: 'usuário registrado' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
