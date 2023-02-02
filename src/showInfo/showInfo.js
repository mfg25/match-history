import './showInfo.css'

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

    matchContainer.append(gameAndSpellsContainer, championIconContainer);
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