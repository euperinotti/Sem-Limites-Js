import { Router, Request, Response } from "express";
import { home } from "../controllers/homeController";

const router = Router();

router.get('/', home);

export default router