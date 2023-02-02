import { showMatch, showPlayerStats } from "../showInfo/showInfo";

export function searchBySummonersName(summonersNameValue){
    let summonerPuuid;
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    summonerPuuid = response.puuid
    getRecentMatches(summonerPuuid)

    showPlayerStats(response.name, response.summonerLevel, response.profileIconId)
})
}

export function getRecentMatches(summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=20&api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    response.forEach(element => {
        getSingleMatch(element, summonerPuuid)
    });
})
}

export function getSingleMatch(matchId, summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    console.log(response.info.gameMode)
    showMatch(response, summonerPuuid)
})
}

