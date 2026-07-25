import { Router } from "express";
import { CreateMatchSchema } from "../schemas/matchSchema";
import { isAuth } from "../middlewares/authMiddleware";
import matchService from "../services/matchService";
import { getErrorMessage } from "../utils/errorUtils";
import { createOptions } from "../utils/options";

const matchController = Router();

matchController.get('/create', (req, res) => {
    const options = createOptions()
    res.render('matches/create', { options });
});

matchController.post('/create', isAuth, async (req, res) => {
    const userId = req.user.id;
    const data = req.body

    try {
        const matchData = CreateMatchSchema.parse(data);
        matchData.ownerId = userId;

        const match = await matchService.createMatch(matchData);

        res.redirect('/')
    } catch (err) {
        const error = getErrorMessage(err);
        console.log(error);

        const options = createOptions(data)
        res.render('matches/create', { data, options })
    }

});


matchController.get('/report', async (req, res) => { 
    const matches = await matchService.getAll(); 

    res.render('matches/report', { matches });
})


matchController.get('/dashboard',async (req, res) => {
    const matches = await matchService.getAll(); 
    
    res.render('matches/dashboard', { matches });
})


matchController.get('/details/:matchId',async (req, res) => {
    const matchId = req.params.matchId;

    const match = await matchService.getById(matchId);

    res.render('matches/details', { match })
})

matchController.get('/delete/:matchId', async (req, res) => {
    const matchId = req.params.matchId;

    const match = await matchService.remove(matchId);

    res.redirect('/')
});

 

export default matchController;