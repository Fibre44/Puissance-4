/**
 * 
 * @param {JSON} grid 
 * La fonction va écrire dans la localStorage
 */
export function setLocalStorage(grid) {
    const parse = JSON.stringify(grid)
    localStorage.setItem('grid', parse)

}

/**
 * 
 * @returns retourne la grille au format JSON
 */
export function getLocalStorage() {
    const grid = localStorage.getItem('grid')
    const gridJson = JSON.parse(grid)
    return gridJson
}
/**
 * Va supprimer le localStorage
 */
export function clearLocalStorage() {
    localStorage.clear()
}
