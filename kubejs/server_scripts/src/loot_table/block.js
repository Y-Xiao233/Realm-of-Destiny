LootJS.modifiers(event =>{

    /**
     * 
     * @param {String} id 
     * @param {$NumberProvider_} num_provider 
     * @param {$LootEntry_[]} replace_loots 
     * @param {ItemFilter} main_hand 
     */
    function replaceMatchMainHand(id, num_provider,replace_loots){
        event.addBlockLootModifier(id).addWeightedLoot(num_provider,replace_loots).removeLoot(id)
    }
    replaceMatchMainHand("ae2:fluix_block",[4,6],[Item.of("minecraft:purple_dye")])
    replaceMatchMainHand("ae2:quartz_block",[1,2],[Item.of("minecraft:light_blue_dye")])
    replaceMatchMainHand("ae2:smooth_sky_stone_block",[1,2],[Item.of("minecraft:black_dye")])
    replaceMatchMainHand("kubejs:rainbow",[1,2],[Item.of("minecraft:yellow_dye")])

    event.addBlockLootModifier('minecraft:glowstone').replaceLoot('minecraft:glowstone_dust','minecraft:glowstone')
})