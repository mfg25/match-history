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

/***/ "./src/getApiInfo/getResponse.js":
/*!***************************************!*\
  !*** ./src/getApiInfo/getResponse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecentMatches\": () => (/* binding */ getRecentMatches),\n/* harmony export */   \"getSingleMatch\": () => (/* binding */ getSingleMatch),\n/* harmony export */   \"searchBySummonersName\": () => (/* binding */ searchBySummonersName)\n/* harmony export */ });\n/* harmony import */ var _showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showInfo/showInfo */ \"./src/showInfo/showInfo.js\");\n\r\n\r\nfunction searchBySummonersName(summonersNameValue){\r\n    let summonerPuuid;\r\n    fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    console.log(response)\r\n    summonerPuuid = response.puuid\r\n    getRecentMatches(summonerPuuid)\r\n\r\n    ;(0,_showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__.showPlayerStats)(response.name, response.summonerLevel, response.profileIconId)\r\n})\r\n}\r\n\r\nfunction getRecentMatches(summonerPuuid){\r\n    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=10&api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    response.forEach(element => {\r\n        getSingleMatch(element, summonerPuuid)\r\n    });\r\n})\r\n}\r\n\r\nfunction getSingleMatch(matchId, summonerPuuid){\r\n    fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-f71da4da-db9a-4615-8fab-dffe0146486e`, {mode: 'cors'}).then(function(response){\r\n    return response.json()\r\n}).then(function(response){\r\n    console.log(response)\r\n    console.log(response.info.gameMode)\r\n    ;(0,_showInfo_showInfo__WEBPACK_IMPORTED_MODULE_0__.showMatch)(response, summonerPuuid)\r\n})\r\n}\r\n\r\n\n\n//# sourceURL=webpack://callbacks/./src/getApiInfo/getResponse.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainInfoContainer\": () => (/* binding */ mainInfoContainer)\n/* harmony export */ });\n/* harmony import */ var _mainContainer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContainer.css */ \"./src/main-container/mainContainer.css\");\n\r\n\r\nfunction mainInfoContainer(){\r\n\r\n    let mainContainer = document.createElement('main')\r\n    mainContainer.id = 'main-info-container'\r\n\r\n    let playerStatsDiv = document.createElement('section')\r\n    playerStatsDiv.id = 'player-stats'\r\n\r\n    let playerIconContainer = document.createElement('div')\r\n    playerIconContainer.id = 'player-icon-container'\r\n\r\n    let playerIconImage = document.createElement('img')\r\n    playerIconImage.id = 'player-icon'\r\n\r\n    let playerNameText = document.createElement('p')\r\n    playerNameText.id = 'player-name'\r\n\r\n    let playerLevelText = document.createElement('p')\r\n    playerNameText.id = 'player-level'\r\n\r\n    let matchesContainer = document.createElement('section')\r\n    matchesContainer.id = 'matches-container'\r\n\r\n    let recentMatchesText = document.createElement('h3')\r\n    recentMatchesText.innerHTML = 'Recent matches'\r\n\r\n    playerIconContainer.appendChild(playerIconImage)\r\n    mainContainer.appendChild(playerStatsDiv)\r\n    mainContainer.appendChild(playerIconContainer)\r\n    mainContainer.appendChild(playerLevelText)\r\n    mainContainer.appendChild(playerNameText)\r\n\r\n    matchesContainer.appendChild(recentMatchesText)\r\n    mainContainer.appendChild(matchesContainer)\r\n\r\n    document.getElementById('content').appendChild(mainContainer)\r\n    \r\n    /* <div id=\"main-info-container\">\r\n            <div id=\"player-stats\">\r\n            <img src=\"\" alt=\"\" id=\"player-icon\" />\r\n            <p id=\"player-name\"></p>\r\n            <p id=\"player-level\"></p>\r\n            </div>\r\n        <div id=\"matches-container\">\r\n            <h3>Recent matches</h3>\r\n        </div>\r\n      </div> */\r\n}\n\n//# sourceURL=webpack://callbacks/./src/main-container/mainContainer.js?");

/***/ }),

/***/ "./src/searchDiv/searchDiv.js":
/*!************************************!*\
  !*** ./src/searchDiv/searchDiv.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertSearchDiv\": () => (/* binding */ insertSearchDiv)\n/* harmony export */ });\n/* harmony import */ var _main_container_mainContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-container/mainContainer */ \"./src/main-container/mainContainer.js\");\n/* harmony import */ var _searchDiv_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchDiv.css */ \"./src/searchDiv/searchDiv.css\");\n/* harmony import */ var _icno_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icno.png */ \"./src/searchDiv/icno.png\");\n/* harmony import */ var _getApiInfo_getResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getApiInfo/getResponse */ \"./src/getApiInfo/getResponse.js\");\n\r\n\r\n\r\n\r\nfunction insertSearchDiv(){\r\n\r\n    let imgAndSearchContainer = document.createElement('div')\r\n    imgAndSearchContainer.id = 'img-and-search-container'\r\n    let imgLogo = document.createElement('img')\r\n    imgLogo.src = _icno_png__WEBPACK_IMPORTED_MODULE_2__\r\n    imgLogo.id = 'img-logo'\r\n    let formContainer = document.createElement('div')\r\n    formContainer.id = 'form-container'\r\n    let form = document.createElement('form')\r\n    form.id = 'form'\r\n    let inputText = document.createElement('input')\r\n    inputText.type = 'text'\r\n    inputText.id = 'text-input'\r\n    inputText.placeholder = `Summoner's name`\r\n    let searchButton = document.createElement('button')\r\n    searchButton.id = 'search-button'\r\n    searchButton.innerHTML = 'Search'\r\n\r\n\r\n    form.appendChild(inputText)\r\n    form.appendChild(searchButton)\r\n    formContainer.appendChild(form)\r\n    imgAndSearchContainer.appendChild(imgLogo)\r\n    imgAndSearchContainer.appendChild(formContainer)\r\n\r\n    searchButton.addEventListener('click', (e) =>{\r\n      e.preventDefault()\r\n      if(!document.getElementById('main-info-container'))(0,_main_container_mainContainer__WEBPACK_IMPORTED_MODULE_0__.mainInfoContainer)()\r\n      imgLogo.remove()\r\n      imgAndSearchContainer.style.height = '100px'\r\n\r\n      let summonersNameValue = inputText.value.toLowerCase().replace(/\\s+/g, '')\r\n     \r\n      ;(0,_getApiInfo_getResponse__WEBPACK_IMPORTED_MODULE_3__.searchBySummonersName)(summonersNameValue)\r\n  })\r\n    \r\n    return imgAndSearchContainer\r\n    \r\n    /* <div id=\"form-container\">\r\n        <form action=\"\" id=\"form\">\r\n          <input type=\"text\" id=\"text-input\" placeholder=\"Summoner's name\" />\r\n          <button id=\"search-button\">Search</button>\r\n        </form>\r\n      </div> */\r\n}\n\n//# sourceURL=webpack://callbacks/./src/searchDiv/searchDiv.js?");

/***/ }),

/***/ "./src/showInfo/showInfo.js":
/*!**********************************!*\
  !*** ./src/showInfo/showInfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMatch\": () => (/* binding */ showMatch),\n/* harmony export */   \"showPlayerStats\": () => (/* binding */ showPlayerStats)\n/* harmony export */ });\nfunction showPlayerStats(playerName, playerLevel, playerIconId){\r\n    document.getElementById('player-icon').src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${playerIconId}.png`\r\n    playerNameElement.innerHTML = `Nickname: ${playerName}`\r\n    playerLevelElement.innerHTML = `Level: ${playerLevel}`\r\n}\r\n\r\nfunction showMatch(response, summonerPuuid){\r\n\r\n    let playerStatsFiltered = response.info.participants.filter(element => element.puuid == summonerPuuid);\r\n    console.log(playerStatsFiltered)\r\n    let matchContainer = document.createElement('div')\r\n    matchContainer.classList.add('match-container')\r\n    matchesContainer.appendChild(matchContainer)\r\n\r\n    let championIcon = document.createElement('img')\r\n    \r\n    championIcon.id = 'champion-player-icon'\r\n    championIcon.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${playerStatsFiltered[0].championId}.png`\r\n    matchContainer.appendChild(championIcon)\r\n}\n\n//# sourceURL=webpack://callbacks/./src/showInfo/showInfo.js?");

/***/ }),

/***/ "./src/searchDiv/icno.png":
/*!********************************!*\
  !*** ./src/searchDiv/icno.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53a62768c5446355f8d3.png\";\n\n//# sourceURL=webpack://callbacks/./src/searchDiv/icno.png?");

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