import { Router} from "express";
import { Home } from "../controllers/home";

export const router: Router = Router()

router.get("/", Home.initial)