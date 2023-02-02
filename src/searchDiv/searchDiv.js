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


    form.append(inputText, searchButton)
    formContainer.appendChild(form)
    imgAndSearchContainer.append(imgLogo, formContainer)
    

    searchButton.addEventListener('click', (e) =>{
      e.preventDefault()
      if(document.getElementById('main-info-container')) document.getElementById('main-info-container').remove()
      mainInfoContainer()
      imgLogo.remove()
      imgAndSearchContainer.style.height = '100px'

      let summonersNameValue = inputText.value.toLowerCase().replace(/\s+/g, '')
     
      searchBySummonersName(summonersNameValue)
  })
    
    return imgAndSearchContainer
    
    /* <div id="form-container">
        <form action="" id="form">
          <input type="text" id="text-input" placeholder="Summoner's name" />
          <button id="search-button">Search</button>
        </form>
      </div> */
}