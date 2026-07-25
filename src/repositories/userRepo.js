import { prisma } from '../lib/prisma.js'

async function register(userData){
    const user = await prisma.user.create({ data: userData })
    
    return user;
}

async function getUserByEmail(email) {
    return await prisma.user.findUnique({
        where: { email }
    })
}

const userRepo = {
    register,
    getUserByEmail
}

export default userRepo;