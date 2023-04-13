class Usuario {
    constructor({ nome, email, senha, dn }) {
      // DN = data de nascimento
      //this.id utilizado para a geração de ID único e aleatório para novo usuário
      this.id = Math.floor(Math.random() * 1000);
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.dn = dn;
    }
  
    save() {
      const usuarios = Usuario.getAll();
      usuarios.push(this);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
  
    static getAll() {
      const usuarios = localStorage.getItem("usuarios");
      if (usuarios) {
        return JSON.parse(usuarios);
      } else {
        return [];
      }
    }
  
    static getOne(id) {
      const usuarios = Usuario.getAll();
      return usuarios.find((usuario) => usuario.id === parseInt(id));
    }
  
    static deleteOne(id) {
      const usuarios = Usuario.getAll();
      const novosUsuarios = usuarios.filter((usuario) => usuario.id !== parseInt(id));
      localStorage.setItem("usuarios", JSON.stringify(novosUsuarios));
    }
  }
  
  module.exports = Usuario;
  
  