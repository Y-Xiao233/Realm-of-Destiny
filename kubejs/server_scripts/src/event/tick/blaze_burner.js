const $BlazeBurnerBlock = Java.loadClass('com.simibubi.create.content.processing.burner.BlazeBurnerBlock')
const $BlazeBurnerBlockEntity = Java.loadClass('com.simibubi.create.content.processing.burner.BlazeBurnerBlockEntity')
const $ThermoTile = Java.loadClass("owmii.powah.block.thermo.ThermoTile")

let recipes = [
    {tag:"powah:thermo",item:"minecraft:oak_door",energy:10000,time:10*20,type:"thermo"},
    // {block:'minecraft:oak_log',item:'create:blaze_cake',time:80*20,type:"consum_block"}
]


LevelEvents.tick(event =>{
    const {level} = event
    const tickers = level.blockEntityTickers
    tickers.forEach(/** @param {$TickingBlockEntity_} ticker*/ ticker =>{
        if(ticker.getType() == "create:blaze_heater"){
            const pos = ticker.getPos()
            /**
             * @type {$BlazeBurnerBlockEntity_}
             */
            const burner = level.getBlockEntity(pos)
            const time = burner.getRemainingBurnTime()
            const heat_level = burner.getHeatLevelFromBlock().name()
            const below_block = level.getBlock(pos.below())
            const recipe = getRecipe(below_block)
            if(heat_level.toLowerCase() == "smouldering" && time <= 10 * 20 && recipe != null){
                if(recipe.type == "thermo"){
                    /**
                     * @type {$ThermoTile_}
                     */
                    const thermo = level.getBlockEntity(pos.below())
                    const stored = thermo.getEnergy().getStored()
                    if(stored >= 10000){
                        $BlazeBurnerBlock.tryInsert(burner.blockState,level,burner.blockPos,recipe.item,false,true,false)
                        const max = thermo.getEnergy().getMaxExtract()
                        const times = Math.floor(10000 / max)
                        for(let i = 0; i < times; i ++){
                            thermo.extractEnergy(max,false,Direction.UP)
                        }
                        thermo.extractEnergy(10000 % max,false,Direction.UP)
                    }
                }else if(recipe.type == "consum_block"){
                    $BlazeBurnerBlock.tryInsert(burner.blockState,level,burner.blockPos,recipe.item,false,true,false)
                    below_block.set("minecraft:air")
                }
            }
        }
    })
})

/**
 * 
 * @param {$BlockContainerJS_} block 
 */

function getRecipe(block){
    var found = null
    recipes.forEach(recipe =>{
        if(recipe.tag == null || recipe.tag == undefined){
            if(block.blockState.is(recipe.block)){
                found = recipe
                return
            }
        }else if(block.hasTag(recipe.tag)){
            found = recipe
            return
        }
    })

    return found
}