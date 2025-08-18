/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {number} start 
 */
function generateTextureFont(ctx,start,path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    const array = createJsonArray()
    let n = 0
    for(let i = 0; i <= 35; i ++){
        let id = items.getStackInSlot(i).id
        let location = id.replace(":",":item/") + ".png"
        let entry = createJsonObject()
        let chars = createJsonArray()
        if(id !== "minecraft:air"){
            let s = String(start + n)
            addToJsonObject(entry,"type","bitmap")
            addToJsonObject(entry,"file",location)
            addToJsonObject(entry,"ascent",7)
            addToJsonArray(chars,"\\u" + "0".repeat(4 - s.length) + s)
            addToJsonObject(entry,"chars",chars)
            addToJsonArray(array,entry)
            n ++
        }
    }

    addToJsonObject(json,"providers",array)
    JsonIO.write(path,json)
}