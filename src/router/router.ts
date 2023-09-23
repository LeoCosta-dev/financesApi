import { Router} from "express";
import { Home } from "../controllers/home";
import Usuarios from "../controllers/Usuarios";

export const router: Router = Router()

router.get("/", Home.initial)
router.post("/usuarios/login", Usuarios.login)
router.post("/usuarios/create", Usuarios.cadastrarUsuario)