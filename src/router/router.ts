import { Router} from "express";
import { Home } from "../controllers/home";
import Usuarios from "../controllers/Usuarios";
import Categorias from "../controllers/Categorias";

export const router: Router = Router()

router.get("/", Home.initial)

/**
 * Fluxo de Usuários
 */
router.post("/usuarios/login", Usuarios.login)
router.post("/usuarios/cadastro", Usuarios.cadastrarUsuario)
router.patch("/usuarios/:id/senha", Usuarios.atualizarSenha)
router.delete("/usuarios/:id", Usuarios.deletarUsuario)

/**
 * Fluxo de Categorias
 */
router.get("/categorias", Categorias.buscarCategorias)