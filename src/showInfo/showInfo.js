import './showInfo.css'
import creepScoreImg from '../assets/cs.png'
import goldScore from '../assets/gold.png'

export function showPlayerStats(playerName, playerLevel, playerIconId){
    document.getElementById('player-icon').src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerIconId}.png`
    document.getElementById('player-icon-container').setAttribute('data-value', playerLevel)
    document.getElementById('player-name').innerHTML = `${playerName}`
}

export function showMatch(response, summonerPuuid){

    let playerStatsFiltered = response.info.participants.filter(element => element.puuid == summonerPuuid);
    console.log(playerStatsFiltered)
    let matchContainer = document.createElement('div')
    matchContainer.classList.add('match-container')
    document.getElementById('matches-container').appendChild(matchContainer)

    let resultDivColor = document.createElement('div')
    if(playerStatsFiltered[0].win)resultDivColor.id = 'win'
    else resultDivColor.id = 'defeat'

    matchContainer.appendChild(resultDivColor)
    let championIconContainer = document.createElement('div')
    championIconContainer.id = 'champion-icon-container'
    championIconContainer.setAttribute('data-value', playerStatsFiltered[0].champLevel)
    
    let championIcon = document.createElement('img')
    championIcon.id = 'champion-player-icon'
    championIcon.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${playerStatsFiltered[0].championId}.png`
    championIconContainer.appendChild(championIcon)

    matchContainer.append(showGameAndSpells(playerStatsFiltered, response), championIconContainer);

    let itemsAndStatsContainer = document.createElement('div')
    itemsAndStatsContainer.id = 'items-and-stats-container'

    let itemsContainer = showPlayerItems(playerStatsFiltered)
    ////
    itemsAndStatsContainer.append(itemsContainer, showKdaCreepScoreGoldEarned(playerStatsFiltered))

    let matchStatsContainer = document.createElement('div')
    matchStatsContainer.id = 'match-stats-container'
    let mapPlayed = document.createElement('p')
    mapPlayed.innerHTML = getMapPlayed(response)
    

    let gameDurationAndDateContainer = document.createElement('div')
    gameDurationAndDateContainer.id = 'game-duration-and-date-container'
    let gameDuration = document.createElement('p')
    gameDuration.innerHTML = getGameDuration(response)

    let gameDate = document.createElement('p')
    gameDate.innerHTML = getGameDate(response)
    
    gameDurationAndDateContainer.append(gameDuration, gameDate)
    matchStatsContainer.append(mapPlayed, gameDurationAndDateContainer)
    matchContainer.append(itemsAndStatsContainer, matchStatsContainer)

}

function getGameDate(response){
    let date = new Date(response.info.gameEndTimestamp)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    let monthDateYear  = day + "/" + (month+1) + "/" + year;
    return monthDateYear
}

function getGameDuration(response){
    let duration = response.info.gameDuration
    let gameMinutes = Math.floor(duration/60)
    let gameSeconds = duration % 60
    let gameHours = Math.floor(gameMinutes/60)
    if(gameHours > 0) return `${gameHours}:${gameMinutes}:${gameSeconds}`
    else return `${gameMinutes}:${gameSeconds}`
}

function getMapPlayed(response){
    switch(response.info.mapId){
        case 11: return `Summoner's Rift`
        case 12: return `Howling Abyss`
    }
}

function showKdaCreepScoreGoldEarned(playerStatsFiltered){
    let statsContainer = document.createElement('div')
    statsContainer.id = 'stats-container'

    let kdaScore = document.createElement('p')
    kdaScore.innerHTML = `${playerStatsFiltered[0].kills} / ${playerStatsFiltered[0].deaths} / ${playerStatsFiltered[0].assists}`
    
    let creepScoreContainer = createScoreContainer(playerStatsFiltered, 'totalMinionsKilled', creepScoreImg)

    let goldScoreContainer = createScoreContainer(playerStatsFiltered, 'goldEarned', goldScore)
    statsContainer.append(kdaScore, creepScoreContainer, goldScoreContainer)
    
    return statsContainer
}

function createScoreContainer(playerStatsFiltered, scoreProperty, imageSelected){
    let scoreContainer = document.createElement('div')
    scoreContainer.classList.add('score-container')
    let scoreText = document.createElement('p')
    scoreText.innerHTML = playerStatsFiltered[0][scoreProperty].toLocaleString('pt-BR')
    

    let scoreImage = document.createElement('img')
    scoreImage.src = imageSelected

    scoreContainer.append(scoreText, scoreImage)

    return scoreContainer
}

function showPlayerItems(playerStatsFiltered){
    let itemsContainer = document.createElement('div')
    itemsContainer.id = 'player-items-container'
    for(let i = 0; i <= 6; i++){
        let objectProperty = 'item' + `${i}`
        let playerItem = document.createElement('img')
        playerItem.classList.add('player-item')
        if(playerStatsFiltered[0][objectProperty] == 0){
            playerItem.style.backgroundColor = 'rgb(224, 224, 224)'
            
        }
        else playerItem.src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${playerStatsFiltered[0][objectProperty]}.png`

        itemsContainer.appendChild(playerItem)
    }
    return itemsContainer
}

function showGameAndSpells(playerStatsFiltered, response){

    let gameAndSpellsContainer = document.createElement('div')
    gameAndSpellsContainer.id = 'game-and-spells-container'
    let winOrDefeat = document.createElement('h3')
    winOrDefeat.id = 'win-or-defeat-text'
    if(playerStatsFiltered[0].win){
        winOrDefeat.innerHTML = 'WIN'
        winOrDefeat.style.color = 'rgb(125, 166, 241)'
    }
    else {
        winOrDefeat.innerHTML = 'DEFEAT'
        winOrDefeat.style.color = 'rgb(199, 49, 49)'
    }

    let matchType = document.createElement('p')
    matchType.id = 'match-type-text'
    matchType.innerHTML = checkGameType(response)

    let spellsContainer = document.createElement('div')
    spellsContainer.id = 'spells-container'

    let summonerSpell1 = document.createElement('img')
    summonerSpell1.id = 'first-summoner-spell'
    summonerSpell1.src = checkSummonerSpells(playerStatsFiltered, 'summoner1Id')
    
    let summonerSpell2 = document.createElement('img')
    summonerSpell2.id = 'first-summoner-spell'
    summonerSpell2.src = checkSummonerSpells(playerStatsFiltered, 'summoner2Id')

    spellsContainer.append(summonerSpell1, summonerSpell2);

    gameAndSpellsContainer.append(winOrDefeat, matchType, spellsContainer);
    
    return gameAndSpellsContainer
}

function checkGameType(response){
    switch(response.info.queueId) {
        case 450: return 'ARAM'
        case 420: return 'RANKED SOLO/DUO'
        case 900: return 'RANDOM URF'
        case 440: return 'RANKED FLEX'
        case 430: return 'BLIND PICK'
        case 400: return 'DRAFT PICK'
        default:
      }
}

function checkSummonerSpells(playerStatsFiltered, SummonerSpellId){
    switch(playerStatsFiltered[0][SummonerSpellId]){
        case 4: return `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerFlash.png`
        case 14: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerDot.png`
        case 12: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerTeleport.png`
        case 1: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerBoost.png`
        case 32: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerSnowURFSnowball_Mark.png`
        case 3: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerExhaust.png`
        case 6: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerHaste.png`
        case 11: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerSmite.png`
        case 21: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerBarrier.png` 
        case 7: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerHeal.png`
    }
    
}