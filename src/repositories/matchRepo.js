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

async function update(matchData, matchId) {
    console.log(matchData);

    const match = await prisma.match.update({
        where: {
            id: matchId
        },
        data: matchData
    });

    return match;
}

async function like(userId, matchId) {
    const like = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            liked: {
                connect: { id: matchId }
            }
        }
    })

    return like;
};

async function checkIfLike(userId, matchId) {
    const checked = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            liked: {
                where: {
                    id: matchId
                },
                select: {
                    id: true
                },
            },
        },
    });

    return checked?.liked.length === 1;
};


async function getLikes(matchId) {
    const likes = await prisma.match.findUnique({
        where: {
            id: matchId
        },
        select: {
            _count: {
                select: {
                    likes: true
                }
            }
        }
    });

    return likes._count.likes;

}

const matchRepo = {
    createMatch,
    getAll,
    getById,
    remove,
    update,
    like,
    checkIfLike,
    getLikes
};

export default matchRepo