ServerEvents.recipes(event => {
    const recipes = [
        {
            inputs:[Item.of('minecraft:experience_bottle',8),Item.of('minecraft:emerald')],
            outputs:[Item.of('ars_nouveau:greater_experience_gem',12)]
        },
        {
            inputs:[Item.of('minecraft:iron_ingot'),Item.of('minecraft:obsidian')],
            outputs:[Item.of('mekanism:ingot_refined_obsidian')],
        },
        {
            inputs:[
                Item.of('mekanism:alloy_infused'),Item.of('mekanism:alloy_reinforced'),Item.of('mekanism:alloy_atomic'),
                Item.of('kubejs:alloy_covalence'),Item.of('kubejs:alloy_source'),Item.of('kubejs:medium_alloy_covalence'),
                Item.of('create:andesite_alloy'),Item.of('minecraft:netherite_ingot')
            ],
            outputs:[Item.of('ironfurnaces:rainbow_plating',8)],
        },
        {
            inputs:[Item.of('kubejs:fluix_shard'),Item.of('kubejs:certus_quartz_shard'),Item.of('kubejs:smooth_sky_stone_shard'),Item.of('kubejs:rainbow')],
            outputs:[Item.of('mekanism:reprocessed_fissile_fragment',2)],
        },
        {
            inputs:[Item.of('projecte:high_covalence_dust'),Item.of('kubejs:medium_alloy_covalence'),Item.of('mysticalagradditions:creative_essence')],
            outputs:[Item.of('kubejs:high_alloy_covalence',3)],
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(anvil_processing("timewarp",
            recipe.inputs,
            recipe.outputs
        ))
    })
})