module.exports = (req, res) => {
  if (!req.body.title || !req.body.content)
    return res
      .status(422)
      .json({ message: 'Requisição deve conter title e content ' });

      console.log('asdasd',req.user)

  return res.status(201).json({
    message: 'post fake inserido com sucesso',
    title: req.body.title,
    content: req.body.content,
    user: req.user.username,
  });
};
