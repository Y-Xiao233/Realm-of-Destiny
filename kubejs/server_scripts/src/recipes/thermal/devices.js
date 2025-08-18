ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/thermal/rock_gen/'

    const recipes = [
        {
            output:'industrialforegoing:machine_frame_simple',
            below:'thermal:machine_frame',
            adjacent:'thermal:enderium_block',
            time:80,
            id:"machine_frame_simple"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.thermal.rock_gen(recipe.output,recipe.below,recipe.adjacent,recipe.time).id(id_prefix + recipe.id)
    })
})