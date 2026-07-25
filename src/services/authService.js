import authRepo from "../repositories/userRepo";

function register(userData){
    return authRepo.register(userData)
}

function login(userData){
     
}

const authService = {
    register,
    login
}