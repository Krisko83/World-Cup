import { Router } from "express"; 
import matchService from "../services/matchService";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const matches = await matchService.getAll();
    res.render('home', { matches });
})

export default homeController;