ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/botanypots/crop/'

    const crops = [
        {
            seed:'minecraft:oak_sapling',
            can_be_planted_on:['tree'],
            output:[crops_outputs('minecraft:oak_log',0.8,[4,6]),crops_outputs('minecraft:stick',0.1,[1,2]),crops_outputs('minecraft:oak_leaves',0.6,[2,4]),crops_outputs('minecraft:apple',0.1,[1,3])],
            growth_tick:200,
            growth_modifier:1,
            id:'oak_sapling'
        },
        {
            seed:'ars_nouveau:purple_archwood_sapling',
            can_be_planted_on:['tree'],
            output:[crops_outputs('ars_nouveau:purple_archwood_log',0.8,[4,6]),crops_outputs('ars_nouveau:purple_archwood_sapling',0.2,[1,2])],
            growth_tick:200,
            growth_modifier:1,
            id:'purple_archwood_sapling'
        },
        {
            seed:'minecraft:pumpkin_seeds',
            can_be_planted_on:['tree'],
            output:[crops_outputs('minecraft:pumpkin',0.8,[1,2])],
            growth_tick:200,
            growth_modifier:1,
            id:'pumpkin_seeds',
            display:'minecraft:pumpkin'
        },
        {
            seed:'mekanism:block_refined_obsidian',
            can_be_planted_on:['refined_obsidian'],
            output:[crops_outputs('mekanism:enriched_refined_obsidian',1,[9,9])],
            growth_tick:200,
            growth_modifier:1,
            id:'block_refined_obsidian'
        }
    ]

    crops.forEach(crop => {
        if(crop.display == null || crop.display == undefined){
            event.recipes.botanypots.crop(crop.seed,crop.can_be_planted_on,{block:crop.seed},crop.output,crop.growth_tick,crop.growth_modifier).id(id_prefix + crop.id)
        }else{
            event.recipes.botanypots.crop(crop.seed,crop.can_be_planted_on,{block:crop.display},crop.output,crop.growth_tick,crop.growth_modifier).id(id_prefix + crop.id)
        }
    })
})