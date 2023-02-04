/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main-container/mainContainer.css":
/*!**********************************************!*\
  !*** ./src/main-container/mainContainer.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://callbacks/./src/main-container/mainContainer.css?");

/***/ }),

/***/ "./src/pressets.css":
/*!**************************!*\
  !*** ./src/pressets.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://callbacks/./src/pressets.css?");

/***/ }),

/***/ "./src/searchDiv/searchDiv.css":
/*!*************************************!*\
  !*** ./src/searchDiv/searchDiv.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://callbacks/./src/searchDiv/searchDiv.css?");

/***/ }),

/***/ "./src/showInfo/showInfo.css":
/*!***********************************!*\
  !*** ./src/showInfo/showInfo.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://callbacks/./src/showInfo/showInfo.css?");

/***/ }),

/***/ "./src/getApiInfo/getResponse.js":
/*!***************************************!*\
  !*** ./src/getApiInfo/getResponse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecentMatches\": () => (/* binding */ getRecentMatches),\n/* harmony export */   \"getSingleMatch\": () => (/* binding */ getSingleMatch),\n/* harmony export */   \"searchBySummonersName\": () => (/* binding */ searchBySummonersName)\n/* harmony export */ });\n/* harmony import */ var _showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showInfo/showInfo */ \"./src/showInfo/showInfo.js\");\n\r\n\r\nfunction searchBySummonersName(summonersNameValue, regionSelected){\r\n    let summonerPuuid;\r\n    fetch(`https://${regionSelected}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=RGAPI-a2d6e418-4619-4ad7-8d34-8ed446ad68e9`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    document.getElementById('error-message').innerHTML = ''\r\n    console.log(response)\r\n    summonerPuuid = response.puuid\r\n    getRecentMatches(summonerPuuid, regionSelected)\r\n    ;(0,_showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__.showPlayerStats)(response.name, response.summonerLevel, response.profileIconId)\r\n}).catch((err) => {\r\n    document.getElementById('error-message').innerHTML = 'Jogador não encontrado / API inválida.'\r\n})\r\n}\r\n\r\nfunction getRecentMatches(summonerPuuid, regionSelected){\r\n    fetch(`https://${getRegionName(regionSelected)}.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=20&api_key=RGAPI-a2d6e418-4619-4ad7-8d34-8ed446ad68e9`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    response.forEach(element => {\r\n        getSingleMatch(element, summonerPuuid, regionSelected)\r\n    });\r\n})\r\n}\r\n\r\nfunction getSingleMatch(matchId, summonerPuuid, regionSelected){\r\n    fetch(`https://${getRegionName(regionSelected)}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-a2d6e418-4619-4ad7-8d34-8ed446ad68e9`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    console.log(response)\r\n    console.log(response.info.gameMode)\r\n    ;(0,_showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__.showMatch)(response, summonerPuuid)\r\n})\r\n}\r\n\r\nfunction getRegionName(region){\r\n    if(region == 'BR1' || region == 'LA1' || region == 'LA2' || region == 'NA1') return 'americas'\r\n    else if(region == 'PH2' || region == 'SG2' || region == 'TW2, ' || region == 'TH2, ' || region == 'VN2') return 'sea'\r\n    else if(region == 'EUN1' || region == 'EUW1' || region == 'RU1' || region == 'TR1') return 'europe'\r\n    else if(region == 'KR' || region == 'JP1' || region == 'OC1') return 'asia'\r\n}\r\n\r\n\n\n//# sourceURL=webpack://callbacks/./src/getApiInfo/getResponse.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchDiv_searchDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchDiv/searchDiv.js */ \"./src/searchDiv/searchDiv.js\");\n/* harmony import */ var _pressets_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pressets.css */ \"./src/pressets.css\");\n\r\n\r\n\r\nfunction loadPage(){\r\n\r\n    let searchDiv = new _searchDiv_searchDiv_js__WEBPACK_IMPORTED_MODULE_0__.insertSearchDiv()\r\n    document.getElementById('content').appendChild(searchDiv)\r\n    \r\n}\r\n\r\nloadPage()\n\n//# sourceURL=webpack://callbacks/./src/index.js?");

/***/ }),

/***/ "./src/main-container/mainContainer.js":
/*!*********************************************!*\
  !*** ./src/main-container/mainContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainInfoContainer\": () => (/* binding */ mainInfoContainer)\n/* harmony export */ });\n/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContainer.css */ \"./src/main-container/mainContainer.css\");\n\r\n\r\nfunction mainInfoContainer(){\r\n\r\n    let mainContainer = document.createElement('main')\r\n    mainContainer.id = 'main-info-container'\r\n\r\n    let playerStatsDiv = document.createElement('section')\r\n    playerStatsDiv.id = 'player-stats'\r\n\r\n    let playerIconContainer = document.createElement('div')\r\n    playerIconContainer.id = 'player-icon-container'\r\n\r\n    let playerIconImage = document.createElement('img')\r\n    playerIconImage.id = 'player-icon'\r\n\r\n    let playerNameText = document.createElement('p')\r\n    playerNameText.id = 'player-name'\r\n\r\n    let matchesContainer = document.createElement('section')\r\n    matchesContainer.id = 'matches-container'\r\n\r\n    let recentMatchesText = document.createElement('h3')\r\n    recentMatchesText.innerHTML = 'Recent matches'\r\n    recentMatchesText.id = 'recent-matches-text'\r\n\r\n    playerIconContainer.appendChild(playerIconImage)\r\n    mainContainer.appendChild(playerStatsDiv)\r\n    mainContainer.appendChild(playerIconContainer)\r\n    mainContainer.appendChild(playerNameText)\r\n\r\n    matchesContainer.appendChild(recentMatchesText)\r\n    mainContainer.appendChild(matchesContainer)\r\n\r\n    document.getElementById('content').appendChild(mainContainer)\r\n    \r\n    /* <div id=\"main-info-container\">\r\n            <div id=\"player-stats\">\r\n            <img src=\"\" alt=\"\" id=\"player-icon\" />\r\n            <p id=\"player-name\"></p>\r\n            <p id=\"player-level\"></p>\r\n            </div>\r\n        <div id=\"matches-container\">\r\n            <h3>Recent matches</h3>\r\n        </div>\r\n      </div> */\r\n}\n\n//# sourceURL=webpack://callbacks/./src/main-container/mainContainer.js?");

/***/ }),

/***/ "./src/searchDiv/searchDiv.js":
/*!************************************!*\
  !*** ./src/searchDiv/searchDiv.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertSearchDiv\": () => (/* binding */ insertSearchDiv)\n/* harmony export */ });\n/* harmony import */ var _main_container_mainContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-container/mainContainer */ \"./src/main-container/mainContainer.js\");\n/* harmony import */ var _searchDiv_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchDiv.css */ \"./src/searchDiv/searchDiv.css\");\n/* harmony import */ var _assets_icno_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icno.png */ \"./src/assets/icno.png\");\n/* harmony import */ var _getApiInfo_getResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getApiInfo/getResponse */ \"./src/getApiInfo/getResponse.js\");\n\r\n\r\n\r\n\r\nfunction insertSearchDiv(){\r\n\r\n    let imgAndSearchContainer = document.createElement('div')\r\n    imgAndSearchContainer.id = 'img-and-search-container'\r\n    let imgLogo = document.createElement('img')\r\n    imgLogo.src = _assets_icno_png__WEBPACK_IMPORTED_MODULE_2__\r\n    imgLogo.id = 'img-logo'\r\n    let formContainer = document.createElement('div')\r\n    formContainer.id = 'form-container'\r\n    let form = document.createElement('form')\r\n    form.id = 'form'\r\n    let inputText = document.createElement('input')\r\n    inputText.type = 'text'\r\n    inputText.id = 'text-input'\r\n    inputText.placeholder = `Summoner's name`\r\n    let searchButton = document.createElement('button')\r\n    searchButton.id = 'search-button'\r\n    searchButton.innerHTML = 'Search'\r\n\r\n    let errorMessage = document.createElement('p')\r\n    errorMessage.id = 'error-message'\r\n    \r\n    let selectList = createSelectList(form)\r\n\r\n    form.append(inputText, searchButton)\r\n    formContainer.append(form, errorMessage)\r\n    imgAndSearchContainer.append(imgLogo, formContainer)\r\n    \r\n\r\n    searchButton.addEventListener('click', (e) =>{\r\n      e.preventDefault()\r\n      if(document.getElementById('main-info-container')) document.getElementById('main-info-container').remove()\r\n      ;(0,_main_container_mainContainer__WEBPACK_IMPORTED_MODULE_0__.mainInfoContainer)()\r\n      imgLogo.remove()\r\n      imgAndSearchContainer.style.height = '100px'\r\n      let regionSelected = selectList.value\r\n      let summonersNameValue = inputText.value.toLowerCase().replace(/\\s+/g, '')\r\n     \r\n      ;(0,_getApiInfo_getResponse__WEBPACK_IMPORTED_MODULE_3__.searchBySummonersName)(summonersNameValue, regionSelected)\r\n  })\r\n    \r\n    return imgAndSearchContainer\r\n    \r\n    /* <div id=\"form-container\">\r\n        <form action=\"\" id=\"form\">\r\n          <input type=\"text\" id=\"text-input\" placeholder=\"Summoner's name\" />\r\n          <button id=\"search-button\">Search</button>\r\n        </form>\r\n      </div> */\r\n}\r\n\r\nfunction createSelectList(form){\r\n    let array = ['Brasil',  'Korea', 'Japan', 'Latin America South', 'North America', 'Europe West', 'Europe Nordic & East', 'Latin America North', 'Russia', 'Turkey', 'Singapore', 'Philippines', 'Taiwan', 'Vietnam', 'Thailand']\r\n    let arrayValues = ['BR1', 'KR', 'JP1', 'LA2', 'NA1', 'EUW1', 'EUN1', 'LA1', 'RU1', 'TR1', 'SG2', 'PH2', 'TW2', 'VN2', 'TH2']\r\n    let selectList = document.createElement('select')\r\n    selectList.id = 'select-list'\r\n\r\n    for(let i = 0; i < array.length; i++){\r\n      let option = document.createElement('option')\r\n      option.text = array[i]\r\n      option.value = arrayValues[i]\r\n      selectList.appendChild(option)\r\n    }\r\n\r\n    form.appendChild(selectList)\r\n\r\n    return selectList\r\n}\n\n//# sourceURL=webpack://callbacks/./src/searchDiv/searchDiv.js?");

/***/ }),

/***/ "./src/showInfo/showInfo.js":
/*!**********************************!*\
  !*** ./src/showInfo/showInfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMatch\": () => (/* binding */ showMatch),\n/* harmony export */   \"showPlayerStats\": () => (/* binding */ showPlayerStats)\n/* harmony export */ });\n/* harmony import */ var _showInfo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showInfo.css */ \"./src/showInfo/showInfo.css\");\n/* harmony import */ var _assets_cs_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cs.png */ \"./src/assets/cs.png\");\n/* harmony import */ var _assets_gold_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/gold.png */ \"./src/assets/gold.png\");\n\r\n\r\n\r\n\r\nfunction showPlayerStats(playerName, playerLevel, playerIconId){\r\n    document.getElementById('player-icon').src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerIconId}.png`\r\n    document.getElementById('player-icon-container').setAttribute('data-value', playerLevel)\r\n    document.getElementById('player-name').innerHTML = `${playerName}`\r\n}\r\n\r\nfunction showMatch(response, summonerPuuid){\r\n\r\n    let playerStatsFiltered = response.info.participants.filter(element => element.puuid == summonerPuuid);\r\n    console.log(playerStatsFiltered)\r\n    let matchContainer = document.createElement('div')\r\n    matchContainer.classList.add('match-container')\r\n    document.getElementById('matches-container').appendChild(matchContainer)\r\n\r\n    let resultDivColor = document.createElement('div')\r\n    if(playerStatsFiltered[0].win)resultDivColor.id = 'win'\r\n    else resultDivColor.id = 'defeat'\r\n\r\n    matchContainer.appendChild(resultDivColor)\r\n    let championIconContainer = document.createElement('div')\r\n    championIconContainer.id = 'champion-icon-container'\r\n    championIconContainer.setAttribute('data-value', playerStatsFiltered[0].champLevel)\r\n    \r\n    let championIcon = document.createElement('img')\r\n    championIcon.id = 'champion-player-icon'\r\n    championIcon.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${playerStatsFiltered[0].championId}.png`\r\n    championIconContainer.appendChild(championIcon)\r\n\r\n    matchContainer.append(showGameAndSpells(playerStatsFiltered, response), championIconContainer);\r\n\r\n    let itemsAndStatsContainer = document.createElement('div')\r\n    itemsAndStatsContainer.id = 'items-and-stats-container'\r\n\r\n    let itemsContainer = showPlayerItems(playerStatsFiltered)\r\n    ////\r\n    itemsAndStatsContainer.append(itemsContainer, showKdaCreepScoreGoldEarned(playerStatsFiltered))\r\n\r\n    let matchStatsContainer = document.createElement('div')\r\n    matchStatsContainer.id = 'match-stats-container'\r\n    let mapPlayed = document.createElement('p')\r\n    mapPlayed.innerHTML = getMapPlayed(response)\r\n    \r\n\r\n    let gameDurationAndDateContainer = document.createElement('div')\r\n    gameDurationAndDateContainer.id = 'game-duration-and-date-container'\r\n    let gameDuration = document.createElement('p')\r\n    gameDuration.innerHTML = getGameDuration(response)\r\n\r\n    let gameDate = document.createElement('p')\r\n    gameDate.innerHTML = getGameDate(response)\r\n    \r\n    gameDurationAndDateContainer.append(gameDuration, gameDate)\r\n    matchStatsContainer.append(mapPlayed, gameDurationAndDateContainer)\r\n    matchContainer.append(itemsAndStatsContainer, matchStatsContainer)\r\n\r\n}\r\n\r\nfunction getGameDate(response){\r\n    let date = new Date(response.info.gameEndTimestamp)\r\n    let year = date.getFullYear()\r\n    let month = date.getMonth()\r\n    let day = date.getDate()\r\n\r\n    let monthDateYear  = day + \"/\" + (month+1) + \"/\" + year;\r\n    return monthDateYear\r\n}\r\n\r\nfunction getGameDuration(response){\r\n    let duration = response.info.gameDuration\r\n    let gameMinutes = Math.floor(duration/60)\r\n    let gameSeconds = duration % 60\r\n    let gameHours = Math.floor(gameMinutes/60)\r\n    if(gameHours > 0) return `${gameHours}:${gameMinutes}:${gameSeconds}`\r\n    else return `${gameMinutes}:${gameSeconds}`\r\n}\r\n\r\nfunction getMapPlayed(response){\r\n    switch(response.info.mapId){\r\n        case 11: return `Summoner's Rift`\r\n        case 12: return `Howling Abyss`\r\n    }\r\n}\r\n\r\nfunction showKdaCreepScoreGoldEarned(playerStatsFiltered){\r\n    let statsContainer = document.createElement('div')\r\n    statsContainer.id = 'stats-container'\r\n\r\n    let kdaScore = document.createElement('p')\r\n    kdaScore.innerHTML = `${playerStatsFiltered[0].kills} / ${playerStatsFiltered[0].deaths} / ${playerStatsFiltered[0].assists}`\r\n    \r\n    let creepScoreContainer = createScoreContainer(playerStatsFiltered, 'totalMinionsKilled', _assets_cs_png__WEBPACK_IMPORTED_MODULE_1__)\r\n\r\n    let goldScoreContainer = createScoreContainer(playerStatsFiltered, 'goldEarned', _assets_gold_png__WEBPACK_IMPORTED_MODULE_2__)\r\n    statsContainer.append(kdaScore, creepScoreContainer, goldScoreContainer)\r\n    \r\n    return statsContainer\r\n}\r\n\r\nfunction createScoreContainer(playerStatsFiltered, scoreProperty, imageSelected){\r\n    let scoreContainer = document.createElement('div')\r\n    scoreContainer.classList.add('score-container')\r\n    let scoreText = document.createElement('p')\r\n    scoreText.innerHTML = playerStatsFiltered[0][scoreProperty].toLocaleString('pt-BR')\r\n    \r\n\r\n    let scoreImage = document.createElement('img')\r\n    scoreImage.src = imageSelected\r\n\r\n    scoreContainer.append(scoreText, scoreImage)\r\n\r\n    return scoreContainer\r\n}\r\n\r\nfunction showPlayerItems(playerStatsFiltered){\r\n    let itemsContainer = document.createElement('div')\r\n    itemsContainer.id = 'player-items-container'\r\n    for(let i = 0; i <= 6; i++){\r\n        let objectProperty = 'item' + `${i}`\r\n        let playerItem = document.createElement('img')\r\n        playerItem.classList.add('player-item')\r\n        if(playerStatsFiltered[0][objectProperty] == 0){\r\n            playerItem.style.backgroundColor = 'rgb(224, 224, 224)'\r\n            \r\n        }\r\n        else playerItem.src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${playerStatsFiltered[0][objectProperty]}.png`\r\n\r\n        itemsContainer.appendChild(playerItem)\r\n    }\r\n    return itemsContainer\r\n}\r\n\r\nfunction showGameAndSpells(playerStatsFiltered, response){\r\n\r\n    let gameAndSpellsContainer = document.createElement('div')\r\n    gameAndSpellsContainer.id = 'game-and-spells-container'\r\n    let winOrDefeat = document.createElement('h3')\r\n    winOrDefeat.id = 'win-or-defeat-text'\r\n    if(playerStatsFiltered[0].win){\r\n        winOrDefeat.innerHTML = 'WIN'\r\n        winOrDefeat.style.color = 'rgb(125, 166, 241)'\r\n    }\r\n    else {\r\n        winOrDefeat.innerHTML = 'DEFEAT'\r\n        winOrDefeat.style.color = 'rgb(199, 49, 49)'\r\n    }\r\n\r\n    let matchType = document.createElement('p')\r\n    matchType.id = 'match-type-text'\r\n    matchType.innerHTML = checkGameType(response)\r\n\r\n    let spellsContainer = document.createElement('div')\r\n    spellsContainer.id = 'spells-container'\r\n\r\n    let summonerSpell1 = document.createElement('img')\r\n    summonerSpell1.id = 'first-summoner-spell'\r\n    summonerSpell1.src = checkSummonerSpells(playerStatsFiltered, 'summoner1Id')\r\n    \r\n    let summonerSpell2 = document.createElement('img')\r\n    summonerSpell2.id = 'first-summoner-spell'\r\n    summonerSpell2.src = checkSummonerSpells(playerStatsFiltered, 'summoner2Id')\r\n\r\n    spellsContainer.append(summonerSpell1, summonerSpell2);\r\n\r\n    gameAndSpellsContainer.append(winOrDefeat, matchType, spellsContainer);\r\n    \r\n    return gameAndSpellsContainer\r\n}\r\n\r\nfunction checkGameType(response){\r\n    switch(response.info.queueId) {\r\n        case 450: return 'ARAM'\r\n        case 420: return 'RANKED SOLO/DUO'\r\n        case 900: return 'RANDOM URF'\r\n        case 440: return 'RANKED FLEX'\r\n        case 430: return 'BLIND PICK'\r\n        case 400: return 'DRAFT PICK'\r\n        default:\r\n      }\r\n}\r\n\r\nfunction checkSummonerSpells(playerStatsFiltered, SummonerSpellId){\r\n    switch(playerStatsFiltered[0][SummonerSpellId]){\r\n        case 4: return `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerFlash.png`\r\n        case 14: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerDot.png`\r\n        case 12: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerTeleport.png`\r\n        case 1: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerBoost.png`\r\n        case 32: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerSnowURFSnowball_Mark.png`\r\n        case 3: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerExhaust.png`\r\n        case 6: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerHaste.png`\r\n        case 11: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerSmite.png`\r\n        case 21: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerBarrier.png` \r\n        case 7: return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/SummonerHeal.png`\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://callbacks/./src/showInfo/showInfo.js?");

/***/ }),

/***/ "./src/assets/cs.png":
/*!***************************!*\
  !*** ./src/assets/cs.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1016e495f02f8d818e58.png\";\n\n//# sourceURL=webpack://callbacks/./src/assets/cs.png?");

/***/ }),

/***/ "./src/assets/gold.png":
/*!*****************************!*\
  !*** ./src/assets/gold.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec363a074db3feea1255.png\";\n\n//# sourceURL=webpack://callbacks/./src/assets/gold.png?");

/***/ }),

/***/ "./src/assets/icno.png":
/*!*****************************!*\
  !*** ./src/assets/icno.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53a62768c5446355f8d3.png\";\n\n//# sourceURL=webpack://callbacks/./src/assets/icno.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;