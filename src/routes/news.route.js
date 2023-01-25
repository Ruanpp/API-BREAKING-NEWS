import { Router } from "express";
const route = Router();

import { create, findAll, topNews, findById, searchByTitle, byUser, upDate, erase, likeNews, addComment, deleteComment, } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";

route.post("/", authMiddleware, create);
route.get("/", findAll);
route.get("/top", topNews);
route.get("/search", searchByTitle);
route.get("/byUser", authMiddleware, byUser);
route.get("/:id", authMiddleware, findById);
route.patch("/:id", authMiddleware, upDate);
route.delete("/:id", authMiddleware, erase);
route.patch("/like/:id", authMiddleware, likeNews);
route.patch("/comment/:id", authMiddleware, addComment);
route.patch("/comment/:idNews/:idComment", authMiddleware, deleteComment);

export default route;