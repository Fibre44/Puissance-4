
export function setLocalStorage(grid) {
    const parse = JSON.stringify(grid)
    localStorage.setItem('grid', parse)

}

export function getLocalStorage() {
    const grid = localStorage.getItem('grid')
    const gridJson = JSON.parse(grid)
    return gridJson
}

export function clearLocalStorage() {
    localStorage.clear()
}
