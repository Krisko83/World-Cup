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

const matchService = {
    createMatch,
    getAll,
    getById,
    remove
};

export  default matchService;