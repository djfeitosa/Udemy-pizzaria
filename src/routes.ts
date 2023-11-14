import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { AddItemController } from "./controllers/order/AddItemController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { IsAuthenticated } from "./middleware/IsAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

//definition of authentication middleware
router.get("/me", IsAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --
router.post("/category", IsAuthenticated, new CreateCategoryController().handle);

router.get("/category", IsAuthenticated, new ListCategoryController().handle);

//-- ROTAS PRODUCT --
router.post(
    "/product",
    IsAuthenticated,
    upload.single("file"),
    new CreateProductController().handle
);

router.get("/category/product", IsAuthenticated, new ListByCategoryController().handle);

//-- ROTAS ORDER --

router.post("/order", IsAuthenticated, new CreateOrderController().handle);
router.delete("/order", IsAuthenticated, new RemoveOrderController().handle);
router.post("/order/add", IsAuthenticated, new AddItemController().handle);
router.put("/order/send", IsAuthenticated, new SendOrderController().handle);
router.put("/order/finish", IsAuthenticated, new FinishOrderController().handle);
router.delete("/order/remove", IsAuthenticated, new RemoveItemController().handle);
router.put("/order/send", IsAuthenticated, new SendOrderController().handle);
router.get("/orders", IsAuthenticated, new ListOrdersController().handle);
router.get("/order/detail", IsAuthenticated, new DetailOrderController().handle);

//------------------------------------------//

export { router };
