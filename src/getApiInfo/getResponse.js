import { mainInfoContainer } from "../main-container/mainContainer";
import { showMatch, showPlayerStats } from "../showInfo/showInfo";

export function searchBySummonersName(summonersNameValue, regionSelected) {
  let summonerPuuid;
  fetch(
    `https://${regionSelected}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonersNameValue}?api_key=${process.env.API_URL}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      document.getElementById("img-and-search-container").style.bottom = "0%";
      document.getElementById("img-logo").remove();
      mainInfoContainer();
      document.getElementById("error-message").innerHTML = "";
      console.log(response);
      summonerPuuid = response.puuid;
      getRecentMatches(summonerPuuid, regionSelected);
      showPlayerStats(
        response.name,
        response.summonerLevel,
        response.profileIconId
      );
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("error-message").innerHTML =
        "Jogador não encontrado / API inválida.";
    });
}

export function getRecentMatches(summonerPuuid, regionSelected) {
  fetch(
    `https://${getRegionName(
      regionSelected
    )}.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=20&api_key=${
      process.env.API_URL
    }`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      response.forEach((element) => {
        getSingleMatch(element, summonerPuuid, regionSelected);
      });
    });
}

export function getSingleMatch(matchId, summonerPuuid, regionSelected) {
  fetch(
    `https://${getRegionName(
      regionSelected
    )}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${
      process.env.API_URL
    }`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      console.log(response.info.gameMode);
      showMatch(response, summonerPuuid);
    });
}

function getRegionName(region) {
  if (region == "BR1" || region == "LA1" || region == "LA2" || region == "NA1")
    return "americas";
  else if (
    region == "PH2" ||
    region == "SG2" ||
    region == "TW2, " ||
    region == "TH2, " ||
    region == "VN2"
  )
    return "sea";
  else if (
    region == "EUN1" ||
    region == "EUW1" ||
    region == "RU1" ||
    region == "TR1"
  )
    return "europe";
  else if (region == "KR" || region == "JP1" || region == "OC1") return "asia";
}
