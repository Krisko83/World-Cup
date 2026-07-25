import e, { Router } from "express";
import { CreateMatchSchema } from "../schemas/matchSchema";
import { isAuth } from "../middlewares/authMiddleware";
import matchService from "../services/matchService";
import { getErrorMessage } from "../utils/errorUtils";
import { createOptions } from "../utils/options";
import { err } from "@prisma/driver-adapter-utils";
import { error } from "node:console";

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
  
        const options = createOptions(data);
        res.render('matches/create', { data, options, error })
    }

});


matchController.get('/report', async (req, res) => {
    const matches = await matchService.getAll();

    res.render('matches/report', { matches });
})


matchController.get('/dashboard', async (req, res) => {
    const matches = await matchService.getAll();

    res.render('matches/dashboard', { matches });
})


matchController.get('/details/:matchId', async (req, res) => {
    const matchId = req.params.matchId;
    const userId = req.user.id;

    try {
        const match = await matchService.getById(matchId);

        const isOwner = match.ownerId === userId;
        const liked = await matchService.checkIfLike(userId, matchId);

        res.render('matches/details', { match, isOwner, liked })
    } catch (error) {
        res.render('404')
    }

})

matchController.get('/delete/:matchId', isAuth, async (req, res) => {
    const matchId = req.params.matchId;

    const match = await matchService.remove(matchId);

    res.redirect('/')
});

matchController.get('/edit/:matchId', isAuth, async (req, res) => {
    const matchId = req.params.matchId;

    const match = await matchService.getById(matchId);
    const options = createOptions(match)


    res.render('matches/edit', { match, options })
})


matchController.post('/edit/:matchId', isAuth, async (req, res) => {
    const matchData = req.body;
    const matchId = req.params.matchId


    try {
        const match = CreateMatchSchema.parse(matchData);

        await matchService.update(match, matchId);
        res.redirect('/')
    } catch (err) {
        const error = getErrorMessage(err)
        const options = createOptions(matchData);

        res.render('matches/edit', { match: matchData, options, error })
    };
});


matchController.get('/like/:matchId', isAuth, async (req, res) => {
    const userId = req.user.id;
    const matchId = req.params.matchId;

    await matchService.like(userId, matchId);

    res.redirect(`/matches/details/${matchId}`)
});

export default matchController;