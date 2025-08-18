var $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 * @param {string} modid 
 * @param {string} path 
 * @param {boolean} needRun 
 */
function outputModItems(ctx,modid,path){
    const {player} = ctx.source
    const json = createJsonObject()
    const array = createJsonArray()
    $BuiltInRegistries.ITEM.stream().toList().forEach(/** @param {$ItemStack_} item*/item => {
        /**
         * @type {String}
         */
        const id = item.id
        if(id.startsWith(modid)){
            addToJsonArray(array,item.id)
        }
    })
    addToJsonObject(json,"entries",array)
    JsonIO.write(path,json)
}