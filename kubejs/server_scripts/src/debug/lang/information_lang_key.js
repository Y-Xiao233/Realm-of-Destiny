/**
 * @param {$CommandContext_<$CommandSourceStack_>} ctx
 * @param {string[]} keys
 * @param {string} path 
 */
function generateInformationLangKey(ctx,keys,path){
    const json = createJsonObject()
    keys.forEach(key =>{
        addToJsonObject(json,key,"")
    })

    JsonIO.write(path,json)
}


/**
 * @param {string} name 
 * @param {string} path 
 * @returns {string[]}
 */
function getInformationList(path){
    const json = JsonIO.readJson(path).getAsJsonObject()
    const elements1 = json.getAsJsonArray("tooltips_jei_information").asList()
    const elements2 = json.getAsJsonArray("jei_information").asList()
    let list = []
    elements1.forEach(/**@param {$JsonElement_} element*/ element =>{
        /**
         * @type {string}
         */
        const id = element.getAsString()
        const key = "information.rod." + id.replace(":",".")
        list.push(key)
    })

    elements2.forEach(/**@param {$JsonElement_} element */element =>{
        /**
         * @type {string}
         */
        const id = element.getAsString()
        const key = "information.rod." + id.replace(":",".")
        list.push(key)
    })

    return list
}