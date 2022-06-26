import { grid } from './model/grid.js';
import { getLocalStorage, setLocalStorage } from './localstorage.js'
let playerActif = 'yellow'

const pawns = document.getElementsByClassName('pawns')

const start = function () {
    setLocalStorage(grid)
}
start()

for (let i = 0; i < pawns.length; i++) {
    pawns[i].addEventListener('click', function () {
        const column = this.getAttribute('data-id').split('-')
        updateGrid(column[1], playerActif)
        changePlayer(playerActif)
        if (playerActif === 'yellow') {
            playerActif = 'red'
        } else {
            playerActif = 'yellow'
        }
    })
}

const changePlayer = function (color) {
    for (let i = 0; i < pawns.length; i++) {
        if (color === 'yellow') {
            pawns[i].classList.add('pawns--red')
            pawns[i].classList.remove('pawns--yellow')

        } else {
            pawns[i].classList.add('pawns--yellow')
            pawns[i].classList.remove('pawns--red')
        }
    }

}

/**
 * 
 * @param {integer} column numéro de la colonne la colonne de gauche est réprennté par 1 la colonne de droite par 7 
 * @param {string} color la couleur qu'il ajouter dans la colonne
 */

const updateGrid = function (column, color) {
    const gridLocal = getLocalStorage()
    let columnInt = parseInt(column)
    columnInt -= 1
    //Selection dans l'objet de la colonne à mettre à jour
    const columnActive = grid.find(e => e.column == column)
    const cellUpdate = columnActive.colors.length
    columnActive.colors.push(color)
    setLocalStorage(grid)
    updateDom(columnInt, cellUpdate, color)

}

/**
 * 
 * @param {integer} column indiquer le numéro à de la colonne à mettre à jour.
 * @param {integer} rowNumber indiquer le numéro de la cellule à mettre à jour 0 étant la cellule en haute à gauche
 * @param {string} color 
 */
const updateDom = function (column, rowNumber, color) {
    const columnsGrid = document.getElementsByClassName('game__columns')
    const childrens = columnsGrid[column].children
    //Dans le childrens la valeur 0 représente la ligne en haut. On reverse le tableau pour mettre à jour le DOM
    const reverseChildrens = []
    for (let i = 0; i < childrens.length; i++) {
        reverseChildrens.push(childrens[i])
    }

    const reverse = reverseChildrens.reverse()
    const classUpate = 'cells--' + color
    //columnsGrid[column].children[rowNumber].classList.add(classUpate)
    reverse[rowNumber].classList.add(classUpate)
}