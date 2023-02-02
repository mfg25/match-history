import { insertSearchDiv } from "./searchDiv/searchDiv.js" ;
import './pressets.css'

function loadPage(){

    let searchDiv = new insertSearchDiv()
    document.getElementById('content').appendChild(searchDiv)
    
}

loadPage()