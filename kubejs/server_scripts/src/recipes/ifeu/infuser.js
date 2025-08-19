ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/infuser/'
    const recipes = [
        {
            output:'create:brass_ingot',
            input:'alltheores:brass_dust',
            fluid:'starbunclemania:source_fluid',
            time:50,
            id:'brass_ingot'
        },
        {
            output:'4x mekanism:ingot_steel',
            input:'kubejs:enriched_steel',
            fluid:'minecraft:lava',
            time:50,
            id:'ingot_steel'
        },
        {
            output:'powah:dielectric_casing',
            input:'powah:capacitor_basic_large',
            fluid:Fluid.of('kubejs:energized_fluid',500),
            time:50,
            id:'dielectric_casing'
        },
        {
            output:'minecraft:crying_obsidian',
            input:'mekanism:dust_obsidian',
            fluid:Fluid.of('ifeu:liquid_sculk_matter',500),
            time:50,
            id:'crying_obsidian'
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ifeu.infuser(recipe.output,recipe.input,recipe.fluid,recipe.time).id(id_prefix + recipe.id)
    })
})