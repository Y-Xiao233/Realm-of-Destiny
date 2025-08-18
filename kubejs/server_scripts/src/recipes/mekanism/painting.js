ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/painting/'
    const recipes = [
        {
            output:'minecraft:nether_star',
            input:'ifeu:empty_nether_star',
            chemical:'10000x mekanism:white',
            id:"ingot_osmium"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.painting(recipe.input,recipe.chemical,recipe.output).id(id_prefix + recipe.id)
    })
})