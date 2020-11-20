const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await Model.findUser(username);

    if(userExists) return res.status(409).json({ message: 'username já existe' })

    const user = await Model.registerUser(
      username,
      password
    );

    if (!user) throw Error;
    
    res.status(201).json({ message: 'Novo usuário', user });
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
