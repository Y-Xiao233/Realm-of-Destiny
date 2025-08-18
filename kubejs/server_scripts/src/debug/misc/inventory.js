/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} path 
 */
function generateInventoryItems(ctx, path){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    const json = createJsonObject()
    const array = createJsonArray()
    for(let i = 0; i <= 35; i ++){
        let id = items.getStackInSlot(i).id
        if(id !== "minecraft:air"){
            addToJsonArray(array,id)
        }
    }

    addToJsonObject(json,"entries",array)
    JsonIO.write(path,json)
    player.tell(JsonIO.toString(json))
}