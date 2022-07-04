import { getLocalStorage } from "./localstorage.js";

/**
 * 
 * @param {integer} column 
 * @param {string} player
 * La fonction controle sur une colonne si on a 4 pions de la même couleur de haut en bas 
 * @returns retourne true si puissance 4
 */

export async function controleBottom(column, player) {
    try {
        const grid = getLocalStorage()
        const columControle = grid[column].colors.reverse()
        let c = null
        for (let i = 0; i < columControle.length; i++) {
            if (columControle[i] == player) {
                c++
                if (c == 4) {
                    return true
                }
            }
        }
        return false
    } catch {
        return false
    }

}

/**
 * 
 * @param {integer} column 
 * @param {string} player 
 * La fonction controle la ligne qui a été joué pour verifier si on a 4 pions de la même couleur de gauche à droite
 * @returns retourne true si puissance 4
 */
export async function controleRow(column, player) {
    try {
        const grid = getLocalStorage()
        const rowActive = grid[column].colors.length
        let c = 0
        for (let i = 0; i < 7; i++) {
            let row = grid[i].colors[rowActive - 1]
            if (row == player) {
                c++
                if (c == 4) {
                    return true
                }
            }
        }
        return false
    } catch {
        return false
    }

}
/**
 * 
 * @param {integer} column 
 * @param {string} player
 * @param {array} grid 
 * La fonction controle en diagonale et elle va renvoyer vrai si on a un puissance
 */
export async function controleCross(column, player, grid) {
    try {
        const rowActive = grid[column].colors.length - 1
        let testTopRight = await topRight(column, rowActive, grid, player)
        let testBottomLeft = await bottomLeft(column, rowActive, grid, player)
        if (testBottomLeft == true || testTopRight == true) {
            return true
        } else {
            return false
        }
    } catch {
        return false
    }


}

const topRight = async (column, row, grid, player) => {
    try {
        let c = 1
        let r = row
        let right = parseInt(column)
        while (right < 7) {
            r += 1
            right += 1
            let rowActive = grid[right].colors[r]
            if (rowActive == player) {
                c++
                console.log(c)
                if (c == 4) {
                    console.log(c)
                    return true
                }
            } else {
                return false
            }

        }
        return c
    } catch {
        return false
    }

}

const bottomLeft = async (column, row, grid, player) => {
    try {
        let c = 1
        let r = row
        let left = parseInt(column)
        while (right < 7) {
            r -= 1
            left -= 1
            let rowActive = grid[right].colors[r]
            console.log(rowActive)
            if (rowActive == player) {
                c++
                console.log(c)
                if (c == 4) {
                    console.log(c)
                    return true
                }
            } else {
                return false
            }

        }
        return c
    } catch {
        return false
    }

}


