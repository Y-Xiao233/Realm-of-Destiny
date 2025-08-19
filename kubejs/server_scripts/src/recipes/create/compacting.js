ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/compacting/"

    const recipes = [
        {
            output:'create:electron_tube',
            input:[Item.of('create:polished_rose_quartz'),Item.of('actuallyadditions:diamatine_crystal'),Item.of('thermal:iron_plate')],
            id:"electron_tube"
        },
        {
            output:'8x ironfurnaces:rainbow_plating',
            input:[
                Item.of('mekanism:alloy_infused'),Item.of('mekanism:alloy_reinforced'),Item.of('mekanism:alloy_atomic'),
                Item.of('kubejs:alloy_covalence'),Item.of('mekanism:ingot_refined_obsidian'),Item.of('kubejs:alloy_source'),
                Item.of('kubejs:medium_alloy_covalence'),Item.of('create:andesite_alloy'),Item.of('create:polished_rose_quartz')
            ],
            id:"rainbow_plating"
        },
        {
            output:Item.of('mekanism:reprocessed_fissile_fragment',2),
            input:[Item.of('kubejs:fluix_shard'),Item.of('kubejs:certus_quartz_shard'),Item.of('kubejs:smooth_sky_stone_shard'),Item.of('kubejs:rainbow'),Item.of('mekanism:nugget_refined_obsidian')],
            id:"reprocessed_fissile_fragment"
        },
        {
            output:Item.of('kubejs:high_alloy_covalence',3),
            input:[Item.of('projecte:high_covalence_dust'),Item.of('kubejs:medium_alloy_covalence'),Item.of('mysticalagradditions:creative_essence')],
            id:"high_alloy_covalence"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.compacting(recipe.output,recipe.input).id(id_prefix + recipe.id)
    })
})