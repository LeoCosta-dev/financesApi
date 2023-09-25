import { Router} from "express";
import { Home } from "../controllers/home";
import Usuarios from "../controllers/Usuarios";
import Categorias from "../controllers/Categorias";
import Transacoes from "../controllers/Transacoes";

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
router.post("/categorias", Categorias.cadastrar)

/**
 * Fluxo Transações
 */
router.post("/trasacoes/cadastro", Transacoes.cadastrar)
router.get("/transacoes/:id", Transacoes.obterPorId)
router.patch("/transacoes/:id", Transacoes.atualizar)
router.delete("/transacoes/:id", Transacoes.deletarTransacao)
router.get("/trasacoes/usuario/:id", Transacoes.buscarTodasPorUsuario)
router.get("/transacoes/usuario/:id/entrada", Transacoes.buscarTodasEntradasPorUsuario)
router.get("/transacoes/usuario/:id/saida", Transacoes.buscarTodasSaidasPorUsuario)