ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/thermal/smelter/'

    const recipes = [
        {
            outputs:'kubejs:rainbow',
            inputs:['#forge:stone','kubejs:colorful_matter_ball_seven'],
            energy:2000,
            id:"rainbow"
        },
        {
            outputs:'ae2:smooth_sky_stone_block',
            inputs:['#forge:stone','kubejs:smooth_sky_stone_shard'],
            energy:2000,
            id:"smooth_sky_stone_block"
        },
        {
            outputs:'minecraft:emerald',
            inputs:['minecraft:diamond','minecraft:green_dye','ars_nouveau:earth_essence'],
            energy:2000,
            id:"emerald"
        },
        {
            outputs:'2x minecraft:ender_pearl',
            inputs:['projecte:low_covalence_dust','hostilenetworks:end_prediction','thermal:enderium_ingot'],
            energy:2000,
            id:'ender_pearl'
        },
        {
            outputs:'2x minecraft:blaze_rod',
            inputs:['projecte:low_covalence_dust','hostilenetworks:nether_prediction','powah:crystal_blazing'],
            energy:2000,
            id:'blaze_rod'
        },
        {
            outputs:'2x minecraft:glowstone',
            inputs:['projecte:low_covalence_dust','hostilenetworks:overworld_prediction','mekanism:ingot_refined_glowstone'],
            energy:2000,
            id:'glowstone'
        },
        {
            outputs:'minecraft:netherite_ingot',
            inputs:[Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),'kubejs:empty_ingot'],
            energy:2000,
            id:'netherite_ingot'
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.thermal.smelter(recipe.outputs,recipe.inputs).energy(recipe.energy).id(id_prefix + recipe.id)
    })
})