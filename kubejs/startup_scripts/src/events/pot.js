ForgeEvents.onEvent("net.darkhax.botanypots.events.BotanyPotEvent",event =>{
    /**
     * @type {$BlockEntityBotanyPot_}
     */
    const pot = event.getPot()
    const inv = pot.getInventory()
    const isHarvestable = pot.isCropHarvestable()
    if(isHarvestable && inv != null && inv.canAddItem(Item.of('mekanism:enriched_refined_obsidian',9))){
        let crop = inv.getCropStack()
        let soil = inv.getSoilStack()
        if(crop.id == "mekanism:block_refined_obsidian"){
            let crop_count = crop.getCount()
            inv.setStackInSlot(1,crop.copyWithCount(crop_count - 1))
        }
        if(soil.id == "minecraft:diamond_block"){
            let soil_count = soil.getCount()
            inv.setStackInSlot(0,soil.copyWithCount(soil_count - 1))
        }
    }
})