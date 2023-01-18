import { Router } from "express";
const route = Router();

import { create, findAll } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";

route.post("/", authMiddleware, create);
route.get("/", findAll);


export default route;