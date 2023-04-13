const Usuario = require("../model/usuario.model");

const usuarioController = {};

usuarioController.index = (req, res) => {
  const usuarios = Usuario.getAll();
  res.render("index", { usuarios });
};

usuarioController.show = (req, res) => {
  const { id } = req.params;
  const usuario = Usuario.getOne(id);
  if (!usuario) {
    res.status(404).send("Usuario não encontrado");
  } else {
    res.render("mostrar-usuario", { usuario });
  }
};

usuarioController.new = (req, res) => {
  res.render("criar-usuario");
};

usuarioController.create = (req, res) => {
    const { nome, email, senha, dn } = req.body;
    const usuario = new Usuario({ nome, email, senha, dn });
    usuario.save();
    res.redirect("/usuarios");
  };
  

usuarioController.edit = (req, res) => {
  const { id } = req.params;
  const usuario = Usuario.getOne(id);
  if (!usuario) {
    res.status(404).send("Usuário não encontrado");
  } else {
    res.render("editar-usuario", { usuario });
  }
};

usuarioController.update = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, dn } = req.body;
    const usuario = Usuario.getOne(id);
    if (!usuario) {
      res.status(404).send("Usuário não encontrado");
    } else {
      usuario.nome = nome;
      usuario.email = email;
      usuario.senha = senha;
      usuario.dn = dn;
      usuario.save();
      res.redirect("/usuarios");
    }
  };
  
usuarioController.delete = (req, res) => {
  const { id } = req.params;
  User.deleteOne(id);
  res.redirect("/usuarios");
};

module.exports = usuarioController;
