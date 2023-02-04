import { mainInfoContainer } from '../main-container/mainContainer'
import './searchDiv.css'
import logo from '../assets/icno.png'
import { searchBySummonersName } from '../getApiInfo/getResponse'
export function insertSearchDiv(){

    let imgAndSearchContainer = document.createElement('div')
    imgAndSearchContainer.id = 'img-and-search-container'
    let imgLogo = document.createElement('img')
    imgLogo.src = logo
    imgLogo.id = 'img-logo'
    let formContainer = document.createElement('div')
    formContainer.id = 'form-container'
    let form = document.createElement('form')
    form.id = 'form'
    let inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.id = 'text-input'
    inputText.placeholder = `Summoner's name`
    let searchButton = document.createElement('button')
    searchButton.id = 'search-button'
    searchButton.innerHTML = 'Search'

    let errorMessage = document.createElement('p')
    errorMessage.id = 'error-message'
    
    let selectList = createSelectList(form)

    form.append(inputText, searchButton)
    formContainer.append(form, errorMessage)
    imgAndSearchContainer.append(imgLogo, formContainer)
    

    searchButton.addEventListener('click', (e) =>{
      e.preventDefault()
      if(document.getElementById('main-info-container')) document.getElementById('main-info-container').remove()
      mainInfoContainer()
      imgLogo.remove()
      imgAndSearchContainer.style.height = '100px'
      let regionSelected = selectList.value
      let summonersNameValue = inputText.value.toLowerCase().replace(/\s+/g, '')
     
      searchBySummonersName(summonersNameValue, regionSelected)
  })
    
    return imgAndSearchContainer
    
    /* <div id="form-container">
        <form action="" id="form">
          <input type="text" id="text-input" placeholder="Summoner's name" />
          <button id="search-button">Search</button>
        </form>
      </div> */
}

function createSelectList(form){
    let array = ['Brasil',  'Korea', 'Japan', 'Latin America South', 'North America', 'Europe West', 'Europe Nordic & East', 'Latin America North', 'Russia', 'Turkey', 'Singapore', 'Philippines', 'Taiwan', 'Vietnam', 'Thailand']
    let arrayValues = ['BR1', 'KR', 'JP1', 'LA2', 'NA1', 'EUW1', 'EUN1', 'LA1', 'RU1', 'TR1', 'SG2', 'PH2', 'TW2', 'VN2', 'TH2']
    let selectList = document.createElement('select')
    selectList.id = 'select-list'

    for(let i = 0; i < array.length; i++){
      let option = document.createElement('option')
      option.text = array[i]
      option.value = arrayValues[i]
      selectList.appendChild(option)
    }

    form.appendChild(selectList)

    return selectList
}