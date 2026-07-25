import { Router } from "express";
import authService from "../services/authService";
import { getErrorMessage } from "../utils/errorUtils";
import { CreateUserSchema } from "../schemas/userSchema";
import { isAuth, isGuest } from "../middlewares/authMiddleware";

const authController = Router();

authController.get('/register',isGuest, (req, res) => {
    res.render('auth/register')
});

authController.post('/register',isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const user = CreateUserSchema.parse(userData);

        const token = await authService.register(user);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);

        res.render('auth/register', { userData, error })
    };
});


authController.get('/login',isGuest, (req, res) => {
    res.render('auth/login')
});

authController.post('/login',isGuest,async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.login(userData);
         
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const error = getErrorMessage(err);

        res.render('auth/login', { userData, error })
    }
    res.render('auth/login')
});


authController.get('/logout',isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})



export default authController;