ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/infuser/'
    const recipes = [
        {
            output:'create:brass_ingot',
            input:'alltheores:brass_dust',
            fluid:'starbunclemania:source_fluid',
            time:100,
            id:'brass_ingot'
        },
        {
            output:'4x mekanism:ingot_steel',
            input:'kubejs:enriched_steel',
            fluid:'minecraft:lava',
            time:100,
            id:'ingot_steel'
        },
        {
            output:'powah:dielectric_casing',
            input:'powah:capacitor_basic_large',
            fluid:Fluid.of('kubejs:energized_fluid',500),
            time:100,
            id:'dielectric_casing'
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ifeu.infuser(recipe.output,recipe.input,recipe.fluid,recipe.time).id(id_prefix + recipe.id)
    })
})