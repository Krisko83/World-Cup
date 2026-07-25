import matchRepo from "../repositories/matchRepo";

function createMatch(matchData) {
    return matchRepo.createMatch(matchData);
}

function getAll(){
    return matchRepo.getAll();
}

function getById(matchId){
    return matchRepo.getById(matchId);
};

function remove(matchId){ 
    return matchRepo.remove(matchId)
}

function update(matchData, matchId) {
    return matchRepo.update(matchData, matchId)
}

function like(userId, matchId) {
    return matchRepo.like(userId, matchId)
};

function checkIfLike(userId, matchId){
    return matchRepo.checkIfLike(userId, matchId)
}

function getLikes(matchId) { 
    return matchRepo.getLikes(matchId)
};

const matchService = {
    createMatch,
    getAll,
    getById,
    remove,
    update,
    like,
    checkIfLike,
    getLikes
};

export  default matchService;