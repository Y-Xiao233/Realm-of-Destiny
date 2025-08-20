ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/industrialforegoing/fluid_extractor/'

    const recipes = [
        {
            output:Fluid.of('kubejs:energized_fluid',10),
            input:'powah:energized_steel_block',
            chance:0.01,
            result:'kubejs:empty_block',
            id:"energized_fluid"
        },
        {
            output:Fluid.of('industrialforegoing:latex',10),
            input:'minecraft:oak_log',
            chance:0.01,
            result:'minecraft:air',
            id:"latex"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.industrialforegoing.fluid_extractor(recipe.output,recipe.input,recipe.chance,recipe.result).id(id_prefix + recipe.id)
    })
})