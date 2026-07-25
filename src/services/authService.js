import userRepo from "../repositories/userRepo";
import { createAuthToken } from "../utils/tokenUtils";
import bcrypt from 'bcrypt';


async function register(userData) {
    const hashPass = await bcrypt.hash(userData.password, 10);
    userData.password = hashPass;

    const user = await userRepo.register(userData);

    if (!user) {
        throw new Error('User cannot be register!')
    }

    const token = createAuthToken(user);

    return token;
}

async function login(userData) {
    const user = await userRepo.getUserByEmail(userData.email);
 
    if (!user) {
        throw new Error('Invalid User or Password!')
    }

    const isPassValid = await bcrypt.compare(userData.password, user.password);
 
    if (!isPassValid) {
        throw new Error('Invalid User or Password!')
    };

    const token = createAuthToken(user);
    return token;
}

const authService = {
    register,
    login
}

export default authService;