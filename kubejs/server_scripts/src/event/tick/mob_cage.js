var $Block = Java.loadClass("net.minecraft.world.level.block.Block")
var $WorldlyContainerHolder = Java.loadClass("net.minecraft.world.WorldlyContainerHolder")

LevelEvents.tick(event =>{
    const {level} = event
    const tickers = level.blockEntityTickers
    tickers.forEach(/** @param {$TickingBlockEntity_} ticker*/ ticker =>{
        if(ticker.getType() == "cagedmobs:mob_cage"){
            const pos = ticker.getPos()
            /**
             * @type {$MobCageBlockEntity_}
             */
            const entity = level.getBlockEntity(pos)
            if(!entity.hasEntity()){
                return
            }
            const mob = entity.getEntityType().getDescriptionId()
            const percentage = entity.getGrowthPercentage()
            const auto = autoHarvest(level,pos)
            if(mob == "entity.minecraft.warden" && percentage >= 1 && auto){
                if(level.getRandom().nextFloat() < 0.6){
                    level.setBlock(pos.above(),Block.getBlock("ifeu:liquid_sculk_matter").defaultBlockState(),3)
                }
            }
        }
    })
})


/**
 * 
 * @param {$Level_} level 
 * @param {$BlockPos_} pos
 * @returns 
 */
function autoHarvest(level,pos){
    const below_entity = level.getBlockEntity(pos.below())
    if (below_entity != null) {
        const invCap = below_entity.getCapability(ForgeCapabilities.ITEM_HANDLER, Direction.UP);
        return invCap.orElse(false);
    }else{
        const state = level.getBlockState(pos.below());
        return state.getBlock() instanceof $WorldlyContainerHolder
    }
}
