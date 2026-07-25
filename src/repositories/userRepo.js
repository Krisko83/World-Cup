import { prisma } from '../lib/prisma.js'

async function register(userData){
    const user = await prisma.user.create({ data: userData })
    
}

const authRepo = {
    register
}

export default authRepo;