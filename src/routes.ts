import { Router } from "express";

import { IsAuthenticated } from "./middleware/IsAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

//definição de um middleware de autenticaçào
router.get("/me", IsAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --
router.post(
  "/category",
  IsAuthenticated,
  new CreateCategoryController().handle
);

export { router };
