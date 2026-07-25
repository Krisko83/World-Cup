import { prisma } from "../lib/prisma";

async function createMatch(matchData) {
    const match = await prisma.match.create({
        data: matchData
    });

    return match;
};

async function getAll(params) {
    const matches = await prisma.match.findMany({
        select: {
            id: true,
            imageUrl: true,
            homeGoals: true,
            awayGoals: true,
            homeTeam: true,
            awayTeam: true,
            stage: true
        }
    });

    return matches;
}

async function getById(matchId) {
    const match = await prisma.match.findUnique({
        where: { id: matchId }
    });

    return match;
}

async function remove(matchId) {
    const match = await prisma.match.delete({
        where: {
            id: matchId
        }
    });

    return match;
}


const matchRepo = {
    createMatch,
    getAll,
    getById,
    remove
};

export default matchRepo