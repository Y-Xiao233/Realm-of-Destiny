//To delete all EMC values
var $EMCMappingHandler = Java.loadClass("moze_intel.projecte.emc.EMCMappingHandler")
/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} context 
 */
function writeAllToCustomEMC0(ctx,context){
    const path1 = "./config/ProjectE/custom_emc.json"
    const path2 = "./kubejs/debug_output.json"
    const {player} = ctx.source
    /**
     * @type {$Set_<$ItemInfo_>}
     */
    let map = $EMCMappingHandler.getMappedItems()
    const json = createJsonObject()
    const array = createJsonArray()
    map.forEach(/** @param {$ItemInfo_} entry*/entry =>{
        const id = entry.getItem().getId()
        const itemObj = createJsonObject()
        addToJsonObject(itemObj,"item",id.toString())
        addToJsonObject(itemObj,"emc",0)
        array["add(com.google.gson.JsonElement)"](itemObj)
    })
    addToJsonObject(json,"entries",array)

    JsonIO.write(context == "1" ? path1 : path2,json)
}