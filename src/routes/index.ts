import { Router, Request, Response } from "express";
import * as Catalog from "../controllers/catalogController";
import * as Home from "../controllers/homeController";

const router = Router();

router.get('/', Home.home);



router.get('/catalog', Catalog.home)

export default router