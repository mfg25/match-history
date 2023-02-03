import { showMatch, showPlayerStats } from "../showInfo/showInfo";

export function searchBySummonersName(summonersNameValue){
    let summonerPuuid;
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=RGAPI-8222681f-b4a9-4248-bd31-360a7ca03609`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    summonerPuuid = response.puuid
    getRecentMatches(summonerPuuid)

    showPlayerStats(response.name, response.summonerLevel, response.profileIconId)
})
}

export function getRecentMatches(summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=20&api_key=RGAPI-8222681f-b4a9-4248-bd31-360a7ca03609`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    response.forEach(element => {
        getSingleMatch(element, summonerPuuid)
    });
})
}

export function getSingleMatch(matchId, summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-8222681f-b4a9-4248-bd31-360a7ca03609`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    console.log(response.info.gameMode)
    showMatch(response, summonerPuuid)
})
}

