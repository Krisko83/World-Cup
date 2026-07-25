import { Router } from "express";
import homeController from "./controllers/homeController";
import authController from "./controllers/authController";
import matchController from "./controllers/matchContoller";

const routes = Router();

routes.use('/', homeController);
routes.use('/auth', authController);
routes.use('/matches', matchController);


export default routes;