import { Router } from "express";

const matchController = Router();

matchController.get('/create', (req, res) => {
    res.render('matches/create');
})


matchController.get('/report', (req, res) => {
    res.render('matches/report');
})


matchController.get('/dashboard', (req, res) => {
    res.render('matches/dashboard');
})

export default matchController;