'use strict'

function buildNode(element, text, id){
    const NEW_EL = document.createElement(element)
    const INNER_TEXT = document.createTextNode(text)
    const ELEM_ID = document.getElementById(id)
    NEW_EL.appendChild(INNER_TEXT)
    ELEM_ID.parentNode.insertBefore(NEW_EL, ELEM_ID)
}

export {buildNode}
