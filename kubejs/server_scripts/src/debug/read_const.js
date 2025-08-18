/**
 * @param {string} name 
 * @param {string} path 
 * @returns {string[]}
 */
function readConst(path,name){
    const json = JsonIO.readJson(path).getAsJsonObject()
    const elements = json.getAsJsonArray(name).asList()
    let list = []
    elements.forEach(/**@param {$JsonElement_} element*/ element =>{
        const id = element.getAsString()
        list.push(id)
    })
    return list
}