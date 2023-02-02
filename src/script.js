const form = document.getElementById('form')
const searchButton = document.getElementById('search-button')
let summonersName = document.getElementById('text-input')
let playerIcon = document.getElementById('player-icon')
let playerNameElement = document.getElementById('player-name')
let playerLevelElement  = document.getElementById('player-level')
let matchesContainer = document.getElementById('matches-container')

searchButton.addEventListener('click', (e) =>{
    e.preventDefault()
    
    // get player stats and puuid
    let summonerPuuid;
    let summonersNameValue = summonersName.value.toLowerCase().replace(/\s+/g, '')
    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=RGAPI-979706a4-e52a-4e5e-92aa-1ccc6b3a6737`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    summonerPuuid = response.puuid
    getRecentMatches(summonerPuuid)
    showPlayerStats(response.name, response.summonerLevel, response.profileIconId)
})

})

function getRecentMatches(summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=10&api_key=RGAPI-979706a4-e52a-4e5e-92aa-1ccc6b3a6737`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    response.forEach(element => {
        getSingleMatch(element, summonerPuuid)
    });
})
}

function getSingleMatch(matchId, summonerPuuid){
    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-979706a4-e52a-4e5e-92aa-1ccc6b3a6737`, {mode: 'cors'}).then(function(response){
    return response.json()
}).then(function(response){
    console.log(response)
    console.log(response.info.gameMode)
    showMatch(response, summonerPuuid)
})
}

function showPlayerStats(playerName, playerLevel, playerIconId){
    playerIcon.src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerIconId}.png`
    playerNameElement.innerHTML = `Nickname: ${playerName}`
    playerLevelElement.innerHTML = `Level: ${playerLevel}`
}

function showMatch(response, summonerPuuid){

    let playerStatsFiltered = response.info.participants.filter(element => element.puuid == summonerPuuid);
    console.log(playerStatsFiltered)
    let matchContainer = document.createElement('div')
    matchContainer.classList.add('match-container')
    matchesContainer.appendChild(matchContainer)

    let championIcon = document.createElement('img')
    
    championIcon.id = 'champion-player-icon'
    championIcon.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${playerStatsFiltered[0].championId}.png`
    matchContainer.appendChild(championIcon)
}


