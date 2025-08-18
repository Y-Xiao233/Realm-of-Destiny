ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/metallurgic_infusing/'
    const recipes = [
        {
            output:'mekanism:ingot_osmium',
            input:'kubejs:rawosmium',
            infuse:'20x kubejs:low_covalence_matter',
            id:"ingot_osmium"
        },
        {
            output:'thermal:tin_ingot',
            input:'kubejs:rawtin',
            infuse:'20x kubejs:low_covalence_matter',
            id:"tin_ingot"
        },
        {
            output:'thermal:machine_frame',
            input:'mekanism:steel_casing',
            infuse:'80x mekanism:tin',
            id:"machine_frame"
        },
        {
            output:'kubejs:alloy_covalence',
            input:'minecraft:iron_ingot',
            infuse:'20x kubejs:low_covalence_matter',
            id:"alloy_covalence"
        },
        {
            output:'kubejs:alloy_source',
            input:'kubejs:alloy_covalence',
            infuse:'20x kubejs:source_matter',
            id:"alloy_source"
        },
        {
            output:'mekanism:alloy_infused',
            input:'4x mysticalagriculture:iron_essence',
            infuse:'20x mekanism:redstone',
            id:"alloy_infused"
        },
        {
            output:'kubejs:medium_alloy_covalence',
            input:'kubejs:alloy_covalence',
            infuse:'20x mekanism:refined_obsidian',
            id:"medium_alloy_covalence"
        },
        {
            output:'thermal:iron_coin',
            input:'thermal:copper_coin',
            infuse:'160x kubejs:medium_covalence_matter',
            id:"iron_coin"
        },
        {
            output:'mekanism:elite_tier_installer',
            input:'64x mekanism:advanced_tier_installer',
            infuse:'20x kubejs:medium_covalence_matter',
            id:"elite_tier_installer"
        },
        {
            output:'createcasing:chorium_ingot',
            input:'mysticalagradditions:creative_essence',
            infuse:'20x kubejs:high_covalence_matter',
            id:"chorium_ingot"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.metallurgic_infusing(recipe.output,recipe.input,recipe.infuse).id(id_prefix + recipe.id)
    })
})