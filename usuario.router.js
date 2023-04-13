const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get("/", usuarioController.index);

router.get("/new", usuarioController.new);

router.post("/", usuarioController.create);

router.get("/:id", usuarioController.show);

router.get("/:id/edit", usuarioController.edit);

router.put("/:id", usuarioController.update);

router.delete("/:id", usuarioController.delete);

module.exports = router;
