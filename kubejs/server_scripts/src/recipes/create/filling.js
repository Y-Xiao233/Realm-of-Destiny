ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/filling/"

    const recipes = [
        {
            output:'ars_nouveau:source_gem',
            fluid:Fluid.of('starbunclemania:source_fluid',1000),
            input:'kubejs:empty_gem',
            id:"source_gem"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.filling(recipe.output,[recipe.fluid,recipe.input]).id(id_prefix + recipe.id)
    })
})