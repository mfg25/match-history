import './mainContainer.css'

export function mainInfoContainer(){

    let mainContainer = document.createElement('main')
    mainContainer.id = 'main-info-container'

    let playerStatsDiv = document.createElement('section')
    playerStatsDiv.id = 'player-stats'

    let playerIconContainer = document.createElement('div')
    playerIconContainer.id = 'player-icon-container'

    let playerIconImage = document.createElement('img')
    playerIconImage.id = 'player-icon'

    let playerNameText = document.createElement('p')
    playerNameText.id = 'player-name'

    let matchesContainer = document.createElement('section')
    matchesContainer.id = 'matches-container'

    let recentMatchesText = document.createElement('h3')
    recentMatchesText.innerHTML = 'Recent matches'
    recentMatchesText.id = 'recent-matches-text'

    playerIconContainer.appendChild(playerIconImage)
    mainContainer.appendChild(playerStatsDiv)
    mainContainer.appendChild(playerIconContainer)
    mainContainer.appendChild(playerNameText)

    matchesContainer.appendChild(recentMatchesText)
    mainContainer.appendChild(matchesContainer)

    document.getElementById('content').appendChild(mainContainer)
    

}