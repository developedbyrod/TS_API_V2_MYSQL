import { Router } from "express";
import { UserController } from "../../controllers/UserController";

const UserRoutes = Router();



UserRoutes.post("/users/create", UserController.register)
// UserRoutes.get("users/:id", UserController.findById)